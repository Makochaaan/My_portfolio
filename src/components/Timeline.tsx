"use client";

import React, { useEffect } from 'react';
import WorkTab from "../components/workTab";
import { SlideAnimationRight } from '../animation/slideAnimation';
import NextLink from 'next/link';

const Timeline = () => {
    useEffect(() => {
      const handleScroll = () => {
        document.querySelectorAll('.timeline li').forEach(item => {
          const element = item as HTMLElement;
          const elemPos = element.getBoundingClientRect().top + window.scrollY;
          const scroll = window.scrollY;
          const windowHeight = window.innerHeight;
          const startPoint = windowHeight / 2; // 画面の高さの50%をトリガーポイントに設定
  
          if (scroll >= elemPos - windowHeight + startPoint) {
            console.log("Condition met for", item);
            const H = element.offsetHeight;
            const percent = ((scroll + startPoint - elemPos-100) / (H / 2)) * 100;
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
          <SlideAnimationRight Threshold={0.5}>
          <dt>2019/04</dt>
          <dd><h1 className="my-2 font-bold text-xl">愛知県立 岡崎北高校入学</h1>
              愛知県岡崎市にある岡崎北高校に入学しました。高校入学後は、音楽部(合唱と軽音楽を行う部活)に所属し、テノールパート及びベースボーカルを担当しました。体育と美術のみ苦手でした。</dd>
          </SlideAnimationRight>
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
          <SlideAnimationRight Threshold={0.5}>
          <dt>2020/02</dt>
          <dd><h1 className="my-2 font-bold text-xl">岡崎北高校 音楽部 部長になる</h1>
              音楽部の部長になりました。しかし、就任直後にコロナ禍に見舞われてしまい、部内イベントの中止、当年の全国大会への出場の中止を余儀なくされ、思うよう物事を進めることが出来ませんでした。ただその時の、限られた環境でどうするかを考える経験は今でも自分の中に活きていると感じています。</dd>
          </SlideAnimationRight>
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
          <SlideAnimationRight Threshold={0.5}>
          <dt>2020/09</dt>
          <dd><h1 className="my-2 font-bold text-xl">岡崎北高校 生徒会長になる</h1>
              2学期となり、コロナとどう向き合っていくかで学校が不安に包まれている中、その不安定さをどうにかするためにどうすることができるのか。その答えとして、生徒会長に立候補して当選しました。コロナ禍で開催が危ぶまれた11月の学校祭を開催にこぎつけたり、女子生徒のスラックス着用許可、ツーブロックなど一部頭髪制限の撤廃などを実現したりしました。そこで経験した、人と議論をするといった経験は特に、今の考えを伝えられるという自分の能力にも生きていると感じています。</dd>
          </SlideAnimationRight>
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
          <SlideAnimationRight Threshold={0.5}>
          <dt>2022/04</dt>
          <dd><h1 className="my-2 font-bold text-xl">名古屋大学 情報学部 コンピュータ科学科入学</h1>
              AI・プログラミングについて興味があり、当時珍しく「工学部」としてではなく、「情報学部」として独立した学部を持っていた名古屋大学へ入学しました。そして入学する際に、アプリ開発団体jackの存在を知り加入しました。それがアプリ開発者としての始まりです。
              <image href=""></image></dd>
          </SlideAnimationRight>
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
          <SlideAnimationRight Threshold={0.5}>
          <dt>2022/05</dt>
          <dd><h1 className="my-2 font-bold text-xl">サークルメンバー4人で「よりみちず ver.1」を開発</h1>
          サークル加入後最初のハッカソンで作ったものこそが「よりみちず」の始まりでした。当時は白背景に出発地と目的地を入れたら寄り道が適当に出てくるだけでした。</dd>
          <img src='/yorimichizu1.png' className="rounded-md" />
          </SlideAnimationRight>
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
        <SlideAnimationRight Threshold={0.5}>
          <dt>2022/12</dt>
          <dd><h1 className="my-2 font-bold text-xl">アプリ開発団体jack代表に就任</h1>
          僭越ながら代表となりました。幼少期から組織マネジメントは得意だったので、その力を活かしてサークルの交流機会を増やしたり、外部団体様と交渉したりして、メンバーの利益が最大化できるように精一杯取り組みました。</dd>
          </SlideAnimationRight>
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
        <SlideAnimationRight Threshold={0.5}>
          <dt>2023/02</dt>
          <dd><h1 className="my-2 font-bold text-xl">サークルメンバー6人で「My New Gear」を開発・リリース</h1>
          サークルの先輩から、Unity開発のチュートリアルを兼ねて開発する企画に誘ってもらい参加しました。3Dシューティングゲームの作成を通じて、基本的なUnityのオブジェクト操作やエフェクティング、モデリングのイロハを学びました。
          <WorkTab route="./work/My-new-gear" image="/mynewgear.png" title="My New Gear" year="2023/04" target="0"/></dd>
          </SlideAnimationRight>
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
        <SlideAnimationRight Threshold={0.5}>
          <dt>2023/04</dt>
          <dd><h1 className="my-2 font-bold text-xl">「名古屋大学しんかんWeb2023」を開発</h1>
          名古屋大学生協学生委員会様からお声かけ頂き、新入生向けの情報サイトの作成に携わりました。</dd>
        </SlideAnimationRight>
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
          <SlideAnimationRight Threshold={0.5}>
          <dt>2023/07</dt>
          <dd><h1 className="my-2 font-bold text-xl">「よりみちず ver.2」を開発・リリース</h1>
          ハッカソンにて作成したままであった「よりみちず ver.1」を再度自分の環境に作成し、そこからUIや追加機能を実装してver.2としてリリースしました。
          <WorkTab route="./work/Yorimichizu" image="/yorimichizu.png" title="よりみちず" year="2023/10" target="0"/></dd>
          </SlideAnimationRight>
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
        <SlideAnimationRight Threshold={0.5}>
          <dt>2023/10</dt>
          <dd><h1 className="my-2 font-bold text-xl">Matsuriba始動メンバーに</h1>
          東海地方での学生エンジニア同士の交流をより活発にしたい、というHAL名古屋の学生を中心に、名工大、愛工大、名城大、トライデントコンピュータ専門学校などといった名古屋周辺の学生エンジニアが交流する場である「Matsuriba」を立ち上げました。
          <img src='/matsuriba.jpg' className="rounded-md" />
          </dd>
          </SlideAnimationRight>
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
        <SlideAnimationRight Threshold={0.5}>          
          <dt>2023/12</dt>
          <dd><h1 className="my-2 font-bold text-xl">アプリ開発団体jack代表任期満了、続いて副代表に就任</h1></dd>
          </SlideAnimationRight>        
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
        <SlideAnimationRight Threshold={0.5}>
          <dt>2023/04</dt>
          <dd><h1 className="my-2 font-bold text-xl">「名古屋大学しんかんWeb2024」を受託開発</h1>
          再度、名古屋大学生協学生委員会様からお声かけ頂き、再び新入生向けの情報サイトの作成に携わりました。今回は制作の総監督を務め、土台の整備、大まかなデザインの決定、マイルストーンの設定、コードの微修正などを担いました。
          <WorkTab route="./work/Shinkan-web-2024" image="/shinkanweb2024.png" title="名古屋大学しんかんWeb2024" year="2024/04" target="0"/></dd>
          </SlideAnimationRight>        
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
        <SlideAnimationRight Threshold={0.5}>
          <dt>2024/07</dt>
          <dd><h1 className="my-2 font-bold text-xl">シンガポールに留学</h1>
          情報学部にて今年度から開始された2週間のシンガポール研修プランに参加しました。名古屋大学と提携を結び、深くつながっているシンガポール国立大学様にて10日間の研修を行い、Google・Microsoft・AWSのシンガポールオフィスに見学へも行きました。研修を通じて、異国文化を知る良い機会となりました。<br/>
          以下のリンクに、シンガポール研修の記事(英語)を名古屋大学の公式サイトにて掲載しています。<br/>
          リンク：<NextLink href="https://en.nagoya-u.ac.jp/voice/nus_entrepreneurship.html" target="_blank">https://en.nagoya-u.ac.jp/voice/nus_entrepreneurship.html</NextLink>
          <img src="/singapore_sensored.jpg" className="rounded-md" />
          </dd>
          </SlideAnimationRight>        
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
        <SlideAnimationRight Threshold={0.5}>
          <dt>2024/08</dt>
          <dd><h1 className="my-2 font-bold text-xl">株式会社レコセレ インターンに参加</h1>
          シンガポール研修の最中に出会った株式会社レコセレ様にスカウトいただき、インターン生として勤務しています。TransformerベースのAIを用いた音声合成モデルの構築に取り組んでいます。</dd>
          </SlideAnimationRight>        
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
        <SlideAnimationRight Threshold={0.5}>
          <dt>2024/10</dt>
          <dd><h1 className="my-2 font-bold text-xl">JPHACKS 2024に参加</h1>
          日本最大の学生ハッカソンであるJPHACKSに出場しました。そこで、jackに所属するサークルメンバと3人で、「駅くぐる」というアプリを開発しました。メンバーの間で出た、駅の改札の中と外にトイレやコンビニといったどんな設備があるかを可視化したいというアイデアを形にしました。
          賞は惜しくも取れませんでしたが、普段研鑽している技術でここまで形にすることができ、とても楽しくいい経験になりました。
          <img src="/ekikuguru.png" className="rounded-md" /></dd>
          </SlideAnimationRight>        
        </dl>
        <span className="border-line"></span>
      </li>
      <li>
        <dl>
        <SlideAnimationRight Threshold={0.5}>
          <dt>2024/11</dt>
          <dd><h1 className="my-2 font-bold text-xl">Syber Agent様主催のインターンイベントに参加</h1>
          Syber Agent様が主催する、インフラ技術を体験するインターンイベントに参加しました。大学での実験でインフラ構築を体験したことから、とてもインフラ技術に対する関心が高まっていた中のため、とても身になる貴重な経験をさせていただきました。
          <img src="/syber.jpg" className="rounded-md" /></dd>
          </SlideAnimationRight>        
        </dl>
        {/* <span className="border-line"></span> */}
      </li>
    </ul>
  );
};

export default Timeline;
