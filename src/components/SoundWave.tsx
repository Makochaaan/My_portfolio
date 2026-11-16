"use client";

import { ReactNode, useEffect, useRef } from "react";
import { SOUNDWAVE_QUERY, SOUNDWAVE_STATE, SOUNDWAVE_TOGGLE } from "./SoundToggle";

// 音楽を3次元の波に投影する背景エフェクト。
//   横軸(x) = 周波数（中央が低音、左右対称）
//   奥行き(z) = 時間（手前が今、奥に向かって過去の音が流れていく）
//   高さ(y) = その周波数の音の強さ
// src を渡すとその音声ファイルを、渡さなければ内蔵の簡易シンセを鳴らす。
// 再生ボタンはヘッダー側（SoundToggle）にあり、window のカスタムイベントでやり取りする。
// 音を鳴らしていなくても、DEMO_PERIOD 秒ごとに DEMO_LENGTH 秒間、内蔵シンセを鳴らしたときと
// 同じような波形を「無音のまま」計算で作って流す（ブラウザはユーザー操作なしに音声処理を動かせないため）。

type Props = {
  children: ReactNode;
  src?: string;
};

const COLS = 72; // 横方向の点の数
const ROWS = 36; // 奥行き方向の線の数
const FPS = 30; // 描画のフレームレート上限
const ROTATION_SPEED = (2 * Math.PI) / 20; // x-z平面の回転速度 [rad/秒]（20秒で1周）
const DEMO_PERIOD = 60; // 無音デモの周期 [秒]
const DEMO_LENGTH = 30; // 無音デモの長さ [秒]
const DEMO_FADE = 2; // 無音デモの始まり・終わりのフェード [秒]
const FFT_SIZE = 1024;
const SAMPLE_RATE = 44100; // 無音デモで周波数→列を対応づけるときの想定サンプルレート

// ---- 内蔵シンセの楽譜（実際の再生と無音デモで共通） ----
const SCALE = [0, 3, 5, 7, 10, 12, 15, 17]; // マイナーペンタトニック
const ROOTS = [45, 41, 48, 43]; // A, F, C, G (MIDI)
const STEP = 60 / 100 / 2; // 8分音符（BPM 100）
const mtof = (m: number) => 440 * Math.pow(2, (m - 69) / 12);
const rootAt = (i: number) => ROOTS[Math.floor(i / 16) % ROOTS.length];
const melodyAt = (i: number) => rootAt(i) + 12 + SCALE[(i * 5 + Math.floor(i / 3)) % SCALE.length];

// ---- 内蔵シンセ（音声ファイルが無い場合の仮の音源） ----
const startSynth = (ctx: AudioContext, out: AudioNode) => {
  let next = ctx.currentTime + 0.05;
  let i = 0;

  const note = (freq: number, t: number, dur: number, type: OscillatorType, vol: number) => {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(g).connect(out);
    osc.start(t);
    osc.stop(t + dur + 0.05);
  };

  const timer = window.setInterval(() => {
    while (next < ctx.currentTime + 0.2) {
      const root = rootAt(i);
      if (i % 8 === 0) note(mtof(root - 12), next, STEP * 7, "sine", 0.35);
      if (i % 4 === 2) note(mtof(root + 24) * 2, next, 0.05, "square", 0.03);
      note(mtof(melodyAt(i)), next, STEP * 1.6, "triangle", 0.12);
      next += STEP;
      i++;
    }
  }, 50);
  return () => window.clearInterval(timer);
};

// ---- 無音デモ用：シンセを鳴らしたときのスペクトルを計算で近似する ----
// out の右半分（中央→右）に低音→高音を並べ、左半分は鏡写しにする。列の対応はアナライザー使用時と同じ。
const fakeSpectrum = (out: Float32Array, tau: number, gain: number) => {
  const half = COLS / 2;
  const bins = (FFT_SIZE / 2) * 0.8;
  const logBins = Math.log(bins);
  const binHz = SAMPLE_RATE / FFT_SIZE;
  const right = out.subarray(half);
  right.fill(0);

  // 周波数 f の音を、強さ a で列方向にガウス状に広げて足す
  const addTone = (f: number, a: number) => {
    const k = (half * Math.log(Math.max(f / binHz, 1))) / logBins;
    const k0 = Math.max(0, Math.floor(k - 3));
    const k1 = Math.min(half - 1, Math.ceil(k + 3));
    for (let j = k0; j <= k1; j++) {
      const d = j - k;
      right[j] += a * Math.exp(-d * d * 0.6);
    }
  };

  const i = Math.floor(tau / STEP);
  for (let n = Math.max(0, i - 8); n <= i; n++) {
    const age = tau - n * STEP;
    const root = rootAt(n);
    // メロディ（三角波：倍音は奇数次で弱い）
    const mel = Math.exp(-age / 0.3);
    const fm = mtof(melodyAt(n));
    addTone(fm, 0.75 * mel);
    addTone(fm * 3, 0.25 * mel);
    addTone(fm * 5, 0.1 * mel);
    // ベース（サイン波・長め）
    if (n % 8 === 0) addTone(mtof(root - 12), 0.95 * Math.exp(-age / 1.4));
    // ハイハット的な短い高音（矩形波）
    if (n % 4 === 2) {
      const hat = Math.exp(-age / 0.06);
      const fh = mtof(root + 24) * 2;
      addTone(fh, 0.35 * hat);
      addTone(fh * 3, 0.2 * hat);
    }
  }

  for (let j = 0; j < half; j++) {
    const v = Math.min(1, right[j]) * gain;
    right[j] = v;
    out[half - 1 - j] = v;
  }
};

export default function SoundWave({ children, src }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const ctxRef = useRef<AudioContext | null>(null);
  const stopRef = useRef<(() => void) | null>(null);
  const playingRef = useRef(false);
  const busyRef = useRef(false);

  const announce = () =>
    window.dispatchEvent(new CustomEvent(SOUNDWAVE_STATE, { detail: { playing: playingRef.current } }));

  // ---- 描画ループ ----
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const g = canvas.getContext("2d");
    if (!g) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const history: Float32Array[] = Array.from({ length: ROWS }, () => new Float32Array(COLS));
    // ArrayBuffer から作ると TS 5.7 以降で Uint8Array<ArrayBuffer> と推論され、getByteFrequencyData の引数型に合う
    let freq = new Uint8Array(new ArrayBuffer(0));
    let raf = 0;
    let visible = true;
    let w = 0;
    let h = 0;
    let last = -Infinity;
    let staticDrawn = false;
    let demoOrigin = -1; // 無音デモの周期の基準時刻 [ms]

    // ---- 毎フレーム変わらない値は先に計算しておく ----
    const spanX = 3.2; // 波の横幅の半分（ワールド座標）
    const depthHalf = 2.9; // 波の奥行きの半分（ワールド座標）
    const colXl = new Float32Array(COLS); // 回転前の x 座標
    const colTaper = new Float32Array(COLS); // 左右の端ほど揺れを抑える係数
    const colSin = new Float32Array(COLS); // 待機中の揺れ用 sin(c*0.22)
    const colCos = new Float32Array(COLS); // 待機中の揺れ用 cos(c*0.22)
    for (let c = 0; c < COLS; c++) {
      const u = c / (COLS - 1) - 0.5;
      colXl[c] = u * spanX * 2;
      colTaper[c] = Math.cos(u * Math.PI) ** 1.5;
      colSin[c] = Math.sin(c * 0.22);
      colCos[c] = Math.cos(c * 0.22);
    }
    const rowZl = new Float32Array(ROWS); // 回転前の z 座標（手前 r=0 が -depthHalf）
    for (let r = 0; r < ROWS; r++) rowZl[r] = -depthHalf + (2 * depthHalf * r) / (ROWS - 1);

    // 周波数ビンを COLS/2 本にまとめるときの区切り位置（ビン数が変わったときだけ計算し直す）
    let binStart = new Int32Array(0);
    let binEnd = new Int32Array(0);
    const buildBinRanges = (binCount: number) => {
      const half = COLS / 2;
      const bins = binCount * 0.8; // 高すぎる帯域は使わない
      binStart = new Int32Array(half);
      binEnd = new Int32Array(half);
      for (let k = 0; k < half; k++) {
        const a = Math.floor(Math.pow(bins, k / half));
        binStart[k] = a;
        binEnd[k] = Math.max(a + 1, Math.floor(Math.pow(bins, (k + 1) / half)));
      }
    };

    const resize = () => {
      // 細い線なので 1.5 倍で十分。描画ピクセル数を抑える
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      staticDrawn = false;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !raf) raf = requestAnimationFrame(frame);
    });
    io.observe(canvas);

    // 周波数ビンを、低音ほど細かくなるよう対数的に COLS/2 本へまとめ、左右対称に並べる
    const sampleSpectrum = (out: Float32Array, time: number) => {
      const analyser = analyserRef.current;
      if (!analyser) {
        // 音が鳴っていないときは、周期的に無音デモの波形を流す（動きを減らす設定では流さない）
        if (demoOrigin < 0) demoOrigin = time;
        const tau = ((time - demoOrigin) / 1000) % DEMO_PERIOD;
        if (reduceMotion || tau >= DEMO_LENGTH) {
          out.fill(0);
          return;
        }
        const gain = Math.min(1, tau / DEMO_FADE, (DEMO_LENGTH - tau) / DEMO_FADE);
        fakeSpectrum(out, tau, gain);
        return;
      }
      if (freq.length !== analyser.frequencyBinCount) {
        freq = new Uint8Array(new ArrayBuffer(analyser.frequencyBinCount));
        buildBinRanges(freq.length);
      }
      analyser.getByteFrequencyData(freq);
      const half = COLS / 2;
      for (let k = 0; k < half; k++) {
        const a = binStart[k];
        const b = binEnd[k];
        let sum = 0;
        for (let j = a; j < b; j++) sum += freq[j];
        const v = sum / (b - a) / 255;
        out[half - 1 - k] = v;
        out[half + k] = v;
      }
    };

    const frame = (time: number) => {
      raf = 0;
      if (!visible) return;
      raf = requestAnimationFrame(frame);

      // 30fps に間引く（画面のリフレッシュレートによらず、波の流れる速さも一定になる）
      if (time - last < 1000 / FPS - 2) return;
      last = time;

      const playing = analyserRef.current !== null;
      // 動きを減らす設定で音も鳴っていないときは、静止画を一度描いたら以降は描かない
      if (reduceMotion && !playing && staticDrawn) return;
      staticDrawn = reduceMotion && !playing;

      // 動きを減らす設定のときは、待機中の揺れと回転を止める（音への反応は残す）
      const t = reduceMotion ? 0 : time / 1000;

      // 履歴を1行奥へ送り、手前に最新のスペクトルを入れる
      const recycled = history.pop()!;
      sampleSpectrum(recycled, time);
      history.unshift(recycled);

      g.clearRect(0, 0, w, h);
      const cx = w / 2;
      const horizon = h * 0.28;
      const focal = h * 0.9;
      const camH = 1.1; // カメラの高さ
      const zCenter = 4.1; // 回転の中心（カメラからの距離）。0°のとき手前1.2〜奥7.0で、回転前と同じ見た目になる
      const zClip = 0.3; // これよりカメラに近い点は描かない（どのみち画面外に大きく外れる）
      const zMax = zCenter + Math.hypot(spanX, depthHalf);
      const amp = 1.6;

      // x-z平面（水平面）の回転角。y軸まわりにゆっくり一定速度で回す
      const angle = t * ROTATION_SPEED;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      for (let r = ROWS - 1; r >= 0; r--) {
        const zl = rowZl[r];
        const row = history[r];
        // 待機中の揺れ: 0.08 * sin(c*0.22 + phase) * cos(r*0.25 - t*0.8)
        // sin の加法定理で、点ごとの三角関数計算を行ごとの計算に減らす
        const phase = t * 1.2 + r * 0.35;
        const pSin = Math.sin(phase);
        const pCos = Math.cos(phase);
        const rowAmp = 0.08 * Math.cos(r * 0.25 - t * 0.8);
        // 線の濃さ・太さは、その行の中央が回転後にどれだけ奥にあるかで決める
        const zRowCenter = zCenter + zl * cos;
        const depth = Math.min(1, Math.max(0, (zMax - zRowCenter) / (zMax - zClip))); // 手前ほど1

        g.beginPath();
        let penDown = false;
        for (let c = 0; c < COLS; c++) {
          const xl = colXl[c];
          const x = xl * cos - zl * sin;
          const z = xl * sin + zl * cos + zCenter;
          if (z < zClip) {
            penDown = false; // カメラに近すぎる・後ろにある部分は線を切る
            continue;
          }
          const idle = rowAmp * (colSin[c] * pCos + colCos[c] * pSin);
          const y = idle + row[c] * row[c] * amp * colTaper[c];
          const sx = cx + (x * focal) / z;
          const sy = horizon + ((camH - y) * focal) / z;
          if (penDown) g.lineTo(sx, sy);
          else g.moveTo(sx, sy);
          penDown = true;
        }
        const alpha = 0.08 + 0.5 * depth * depth;
        g.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
        g.lineWidth = 0.6 + 1.2 * depth;
        g.stroke();
      }
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  // ---- 音の再生・停止 ----
  const toggle = async () => {
    if (busyRef.current) return;
    if (playingRef.current) {
      stopRef.current?.();
      stopRef.current = null;
      analyserRef.current = null;
      playingRef.current = false;
      announce();
      return;
    }
    busyRef.current = true;
    try {
    const ctx = ctxRef.current ?? new AudioContext();
    ctxRef.current = ctx;
    await ctx.resume();

    const analyser = ctx.createAnalyser();
    analyser.fftSize = FFT_SIZE;
    analyser.smoothingTimeConstant = 0.8;
    analyser.connect(ctx.destination);

    if (src) {
      const audio = new Audio(src);
      audio.loop = true;
      const node = ctx.createMediaElementSource(audio);
      node.connect(analyser);
      await audio.play();
      stopRef.current = () => {
        audio.pause();
        node.disconnect();
        analyser.disconnect();
      };
    } else {
      const master = ctx.createGain();
      master.gain.value = 0.5;
      master.connect(analyser);
      const stopSynth = startSynth(ctx, master);
      stopRef.current = () => {
        stopSynth();
        master.gain.setTargetAtTime(0, ctx.currentTime, 0.05);
        window.setTimeout(() => {
          master.disconnect();
          analyser.disconnect();
        }, 300);
      };
    }
    analyserRef.current = analyser;
    playingRef.current = true;
    announce();
    } finally {
      busyRef.current = false;
    }
  };

  // ヘッダーのボタンとのやり取り
  useEffect(() => {
    const onToggle = () => void toggle();
    window.addEventListener(SOUNDWAVE_TOGGLE, onToggle);
    window.addEventListener(SOUNDWAVE_QUERY, announce);
    announce();
    return () => {
      window.removeEventListener(SOUNDWAVE_TOGGLE, onToggle);
      window.removeEventListener(SOUNDWAVE_QUERY, announce);
      stopRef.current?.();
      ctxRef.current?.close();
      ctxRef.current = null;
      window.dispatchEvent(new CustomEvent(SOUNDWAVE_STATE, { detail: null }));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center">
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        // 下端をこのエリア（ボタン）の下端に揃え、波は上方向にだけ広げる。
        // 下にある縦棒のアニメーションと重ならないよう、下端はフェードアウトさせる。
        // 下端は縦棒エリアの直前まで（縦棒エリアの上余白: mt-24 / md:mt-[18vh]）
        className="pointer-events-none absolute left-1/2 -bottom-[5.5rem] md:-bottom-[17vh] -translate-x-1/2 w-screen h-[70vh] md:h-[80vh]"
        style={{
          maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
        }}
      />
      {children}
      {/* ボタンはヘッダーへ移動。レイアウトを変えないよう、元のボタンと同じ高さの空きを残す */}
      <div aria-hidden="true" className="mt-8 h-[2.375rem] md:mt-0 md:h-[1.875rem]" />
    </div>
  );
}
