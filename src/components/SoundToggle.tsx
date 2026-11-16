"use client";

import { useEffect, useState } from "react";

// ヘッダーに置く「音を鳴らす」ボタン。
// 同じページに SoundWave があるときだけ表示し、window のカスタムイベントで再生・停止を伝える。
export const SOUNDWAVE_TOGGLE = "soundwave:toggle";
export const SOUNDWAVE_STATE = "soundwave:state";
export const SOUNDWAVE_QUERY = "soundwave:query";

// 表示は再生／停止アイコンのみ。読み上げ・ツールチップ用のラベル
const LABEL = {
  ja: { play: "音を鳴らす", stop: "音を止める" },
  en: { play: "Play sound", stop: "Stop sound" },
};

export default function SoundToggle({ lang = "ja", className = "" }: { lang?: string; className?: string }) {
  // null = このページに SoundWave が無い
  const [state, setState] = useState<{ playing: boolean } | null>(null);

  useEffect(() => {
    const onState = (e: Event) => setState((e as CustomEvent<{ playing: boolean } | null>).detail);
    window.addEventListener(SOUNDWAVE_STATE, onState);
    window.dispatchEvent(new Event(SOUNDWAVE_QUERY));
    return () => window.removeEventListener(SOUNDWAVE_STATE, onState);
  }, []);

  if (!state) return null;
  const label = LABEL[lang === "en" ? "en" : "ja"];

  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(SOUNDWAVE_TOGGLE))}
      aria-label={state.playing ? label.stop : label.play}
      title={state.playing ? label.stop : label.play}
      // ヘッダーのリンクと同じ配色。再生中は、現在のページのリンクと同じ白にする。
      // ▶／■ の文字は端末によって絵文字表示になるため、SVG で描く
      className={`p-1 transition-colors duration-100 ${state.playing ? "text-white hover:text-blue-100" : "text-blue-800 hover:text-blue-500"} ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        {state.playing ? <rect x="6" y="6" width="12" height="12" rx="1.5" /> : <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />}
      </svg>
    </button>
  );
}
