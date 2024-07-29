"use client";  // Add this line

import React, { useEffect } from 'react';
import '../app/globals.css';

const Timeline = () => {
    useEffect(() => {
      const handleScroll = () => {
        document.querySelectorAll('.timeline li').forEach(item => {
          const element = item as HTMLElement;
          const elemPos = element.getBoundingClientRect().top + window.scrollY;
          const scroll = window.scrollY;
          const windowHeight = window.innerHeight;
          const startPoint = 100;
  
          if (scroll >= elemPos - windowHeight + startPoint) {
            console.log("Condition met for", item);
            const H = element.offsetHeight;
            const percent = ((scroll + startPoint - elemPos) / (H / 2)) * 100;
            const borderLine = element.querySelector('.border-line') as HTMLElement;
            if (borderLine) {
              borderLine.style.height = `${Math.min(percent, 100)}%`;
            }
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll();
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <ul className="timeline">
      <li>
        <dl>
          <dt>2022/04</dt>
          <dd><h1 className="my-2 font-bold text-xl">名古屋大学 情報学部 コンピュータ科学科入学</h1>
              AI・プログラミングについて興味があり、当時は珍しかった「情報学部」として独立した学部を持つ名古屋大学へ入学しました。入学する際に、アプリ開発団体jackの存在を知り加入しました。それがアプリ開発者としての始まりです。</dd>
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
          <dt>2022/05</dt>
          <dd><h1 className="my-2 font-bold text-xl">サークルメンバー4人で「よりみちず ver.1」を開発</h1>
          サークル加入後最初のハッカソンで作ったものこそが「よりみちず」の始まりでした。当時は白背景に出発地と目的地を入れたら寄り道が適当に出てくるだけでした。</dd>
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
          <dt>2022/12</dt>
          <dd><h1 className="my-2 font-bold text-xl">アプリ開発団体jack代表に就任</h1>
          僭越ながら代表となりました。幼少期から組織マネジメントは得意だったので、その力を活かしてサークルの交流機会を増やしたり、外部団体様と交渉したりして、メンバーの利益が最大化できるように精一杯取り組みました。</dd>
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
          <dt>2023/02</dt>
          <dd><h1 className="my-2 font-bold text-xl">サークルメンバー6人で「My New Gear」を開発・リリース</h1></dd>
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
          <dt>2023/04</dt>
          <dd><h1 className="my-2 font-bold text-xl">「名古屋大学しんかんWeb2023」を開発</h1>
          名古屋大学生協学生委員会様からお声かけ頂き、新入生向けの情報サイトの作成に携わりました。</dd>
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
          <dt>2023/07</dt>
          <dd><h1 className="my-2 font-bold text-xl">「名古屋大学オープンキャンパスWeb2023」を受託開発</h1></dd>
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
          <dt>2023/07</dt>
          <dd><h1 className="my-2 font-bold text-xl">「よりみちず ver.2」を開発・リリース</h1>
          ハッカソンにて作成したままであった「よりみちず ver.1」を再度自分の環境に作成し、そこからUIや追加機能を実装してver.2としてリリースしました。詳しくはWorkページよりご覧ください。</dd>
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
          <dt>2023/10</dt>
          <dd><h1 className="my-2 font-bold text-xl">Matsuriba始動メンバーに</h1>
          東海地方での学生エンジニア同士の交流をより活発にしたい、というHAL名古屋の学生を中心に、名工大、愛工大、名城大、トライデントコンピュータ専門学校などといった名古屋周辺の学生エンジニアが交流する場である「Matsuriba」を立ち上げました。</dd>
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
          <dt>2023/12</dt>
          <dd><h1 className="my-2 font-bold text-xl">アプリ開発団体jack代表任期満了、続いて副代表に就任</h1></dd>
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
          <dt>2023/04</dt>
          <dd><h1 className="my-2 font-bold text-xl">「名古屋大学しんかんWeb2024」を受託開発</h1>
          名古屋大学生協学生委員会様からお声かけ頂き、再び新入生向けの情報サイトの作成に携わりました。今回は制作の総監督を務め、土台の整備、大まかなデザインの決定、マイルストーンの設定、コードの微修正などを担いました。</dd>
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
          <dt>2024/07</dt>
          <dd><h1 className="my-2 font-bold text-xl">シンガポールに留学</h1>
          情報学部にて今年度から開始されたシンガポール研修プランに参加しました。名古屋大学と提携を結び、深くつながっているシンガポール国立大学様にて10日間の研修を行い、Google・Microsoft・AWSのシンガポールオフィスに見学へも行きました。研修を通じて、異国文化を知る良い機会となりました。</dd>
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
          <dt>2024/08</dt>
          <dd><h1 className="my-2 font-bold text-xl">株式会社レコセレ インターンに参加</h1>
          シンガポール研修の最中に出会った株式会社レコセレ様にスカウトいただき、インターン生として勤務しています。TransformerベースのAIを用いた音声合成モデルの構築に取り組んでいます。</dd>
        </dl>
        <span className="border-line"></span>
      </li>
    </ul>
  );
};

export default Timeline;
