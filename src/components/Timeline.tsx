"use client";

import NextLink from "next/link";
import { useInView } from "react-intersection-observer";

type Category = "education" | "research" | "dev" | "activity" | "career";

type HistoryItem = {
  date: string; // YYYY/MM or YYYY/MM~YYYY/MM
  category: Category;
  title: string;
  body?: string;
  image?: string;
  work?: { route: string; image: string; title: string };
  link?: { label: string; href: string };
};

// 新しい出来事は配列の先頭に追加してください（新しい順に表示されます）
const HISTORY: HistoryItem[] = [
  {
    date: "2026/11",
    category: "research",
    title: "APSIPA ASC 2026（バンコク, タイ）で発表",
    body: "「Audio Effect Setting Estimation with Module Separated Architecture」について、国際会議で発表しました。",
    image: "/2026APSIPA.jpg",
  },
  {
    date: "2026/10~2026/11",
    category: "career",
    title: "リクルート株式会社 データサイエンスインターン",
    body: "データサイエンスのインターンに参加し、実務データを使った課題発見とモデル改善を行いました。",
  },
  {
    date: "2026/09",
    category: "research",
    title: "音響学会 2026年秋季大会（金沢）で発表",
    body: "「オーディオエフェクト設定逆推定における学習戦略」について発表しました。",
    image: "/2026ASJ.jpg",
  },
  {
    date: "2026/06",
    category: "research",
    title: "音学シンポジウム 2026で学生優秀発表賞を受賞",
    body: "「モジュール分離型アーキテクチャによるオーディオエフェクト設定逆推定」について発表し、学生優秀発表賞をいただきました。",
    image: "/symposyum.jpg",
  },
  {
    date: "2026/05~",
    category: "career",
    title: "株式会社Acompanyにてフルスタックエンジニアインターンを開始",
    body: "セキュリティ技術の一つであるConfidential Computingを扱った製品開発を行います。",
  },
  {
    date: "2026/04",
    category: "education",
    title: "名古屋大学 情報学研究科 知能システム学専攻 修士課程 入学",
    body: "引き続き戸田研究室で、オーディオエフェクトを対象とした音声信号処理の研究を続けています。",
  },
  {
    date: "2026/03",
    category: "education",
    title: "名古屋大学 情報学部 コンピュータ科学科 卒業",
  },
  {
    date: "2026/02",
    category: "activity",
    title: "Google AI学生アンバサダー キャンパスMVPを受賞",
    body: "半年間リーダーとして携わったアンバサダー活動が、全国で最も成果を出したことで表彰されました。",
    image: "/ambasador.jpg",
  },
  {
    date: "2025/11",
    category: "education",
    title: "応用情報技術者試験に合格",
  },
  {
    date: "2025/10~2025/11",
    category: "dev",
    title: "JPHACKS 2025で審査員特別賞・イノベーター認定を受賞",
    body: "前年のリベンジとしてJPHACKS 2025に参加しました。塾講師としての経験を踏まえ、教師の説明を補助する数学動画生成ツール「SUDO」を開発し、審査員特別賞とイノベーター認定をいただきました。",
    work: { route: "./work/SUDO", image: "/Sudo.png", title: "SUDO" },
  },
  {
    date: "2025/09~2025/10",
    category: "dev",
    title: "東京都オープンデータハッカソン 2025で学生賞を受賞",
    body: "東京都の公開するオープンデータを活用して行政課題を解決するハッカソンに、「自転車の自発的な車道走行を促すアプリ」というテーマで参加し、「チャリNavi」を開発しました。アプリ開発だけでなく、研究で培ったデータ分析技術も活かすことができました。",
    work: { route: "./work/Chari-navi", image: "/chari-navi.png", title: "チャリNavi" },
  },
  {
    date: "2025/07",
    category: "activity",
    title: "Google AI学生アンバサダーに就任",
    body: "Googleの主催する、AI活用を学生に推進するアンバサダー活動を開始しました。名古屋大学のリーダーを務めます。",
  },
  {
    date: "2025/04",
    category: "research",
    title: "名古屋大学 戸田研究室に配属",
    body: "強く希望していた戸田研究室に配属されました。音声信号処理を専門とする研究室で、エレキギターの音やエフェクターを扱う研究に取り組んでいます。",
    link: { label: "戸田研究室", href: "https://www.toda.is.i.nagoya-u.ac.jp/" },
  },
  {
    date: "2025/03~2025/09",
    category: "career",
    title: "株式会社PrAha フルスタックエンジニアインターン",
    body: "Flutterを用いた動画学習アプリの開発に携わりました。GraphQLを使ったAPIの設計・実装やDDDの実務実践など、普段の学びでは得られない経験を積みました。",
  },
  {
    date: "2025/02",
    category: "education",
    title: "情報セキュリティマネジメント試験に合格",
    body: "情報セキュリティの基礎知識を体系的に身につけました。",
  },
  {
    date: "2024/10",
    category: "dev",
    title: "JPHACKS 2024に参加",
    body: "日本最大の学生ハッカソンに、jackのメンバー3人で出場しました。駅の改札の内外にどんな設備があるかを可視化するアプリ「駅くぐる」を開発しました。",
    work: { route: "./work/Ekikuguru", image: "/ekikuguru.png", title: "駅くぐる" },
  },
  {
    date: "2024/08~2025/02",
    category: "career",
    title: "株式会社レコセレ インターン",
    body: "シンガポール研修中に出会った株式会社レコセレ様にスカウトいただき、Transformerベースの音声合成モデルの構築に取り組みました。",
  },
  {
    date: "2024/07",
    category: "activity",
    title: "シンガポール国立大学での研修に参加",
    body: "情報学部の2週間のシンガポール研修プランに参加し、シンガポール国立大学での研修のほか、Google・Microsoft・AWSのシンガポールオフィスを見学しました。",
    image: "/singapore_sensored.jpg",
    link: { label: "名古屋大学公式サイトの記事（英語）", href: "https://en.nagoya-u.ac.jp/voice/nus_entrepreneurship.html" },
  },
  {
    date: "2024/04",
    category: "dev",
    title: "「名古屋大学しんかんWeb2024」を受託開発",
    body: "前年に続き名古屋大学生協学生委員会様からお声かけいただき、制作の総監督として土台の整備、デザインの決定、マイルストーンの設定などを担いました。",
    work: { route: "./work/Shinkan-web-2024", image: "/shinkanweb2024.png", title: "名古屋大学しんかんWeb2024" },
  },
  {
    date: "2023/12",
    category: "activity",
    title: "アプリ開発団体jack 副代表に就任",
    body: "代表の任期満了後、副代表としてサークル運営を支えました。",
  },
  {
    date: "2023/10",
    category: "activity",
    title: "学生エンジニア交流会「Matsuriba」を立ち上げ",
    body: "HAL名古屋の学生を中心に、名工大・愛工大・名城大など名古屋周辺の学生エンジニアが交流する場を立ち上げました。",
    image: "/matsuriba.jpg",
  },
  {
    date: "2023/07",
    category: "dev",
    title: "「よりみちず ver.2」を開発・リリース",
    body: "ハッカソンで作った ver.1 を自分の環境で作り直し、UIの刷新と機能追加を行ってリリースしました。",
    work: { route: "./work/Yorimichizu", image: "/yorimichizu.png", title: "よりみちず" },
  },
  {
    date: "2023/04",
    category: "dev",
    title: "「名古屋大学しんかんWeb2023」を開発",
    body: "名古屋大学生協学生委員会様からお声かけいただき、新入生向けの情報サイトの制作に携わりました。",
  },
  {
    date: "2023/02",
    category: "dev",
    title: "「My New Gear」を開発・リリース",
    body: "サークルの先輩の企画に参加し、6人で3Dシューティングゲームを制作しました。Unityのオブジェクト操作、エフェクト、モデリングの基礎を学びました。",
    work: { route: "./work/My-new-gear", image: "/mynewgear.png", title: "My New Gear" },
  },
  {
    date: "2022/12",
    category: "activity",
    title: "アプリ開発団体jack 代表に就任",
    body: "交流機会を増やしたり外部団体と交渉したりして、メンバーの利益が最大化できるよう取り組みました。",
  },
  {
    date: "2022/05",
    category: "dev",
    title: "「よりみちず ver.1」を開発",
    body: "サークル加入後最初のハッカソンで、メンバー4人で開発しました。出発地と目的地を入れると寄り道先を提案する、シンプルなアプリでした。",
    image: "/yorimichizu1.png",
  },
  {
    date: "2022/04",
    category: "education",
    title: "名古屋大学 情報学部 コンピュータ科学科 入学",
    body: "AI・プログラミングに興味を持ち、独立した情報学部を持つ名古屋大学に入学しました。同時にアプリ開発団体jackに加入し、アプリ開発を始めました。",
  },
  {
    date: "2020/09",
    category: "activity",
    title: "岡崎北高校 生徒会長に就任",
    body: "コロナ禍で開催が危ぶまれた学校祭を実現し、女子生徒のスラックス着用許可や一部頭髪規定の撤廃なども実現しました。",
  },
  {
    date: "2020/02",
    category: "activity",
    title: "岡崎北高校 音楽部 部長に就任",
    body: "就任直後にコロナ禍となり、イベントや全国大会の中止を経験しました。限られた環境でどうするかを考えた経験は、今も活きています。",
  },
  {
    date: "2019/04",
    category: "education",
    title: "愛知県立 岡崎北高校 入学",
    body: "音楽部（合唱・軽音楽）に所属し、テノールパートとベースボーカルを担当しました。",
  },
];

const CATEGORY: Record<Category, { label: string; color: string }> = {
  education: { label: "学歴", color: "bg-slate-600" },
  research: { label: "研究", color: "bg-blue-600" },
  dev: { label: "開発", color: "bg-indigo-500" },
  activity: { label: "活動", color: "bg-emerald-600" },
  career: { label: "職歴", color: "bg-amber-500" },
};

const TimelineItem = ({ item }: { item: HistoryItem }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const cat = CATEGORY[item.category];

  return (
    <li
      ref={ref}
      className={`relative pl-8 pb-8 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <span className={`absolute left-0 top-1.5 h-3 w-3 -translate-x-[5px] rounded-full ring-4 ring-white ${cat.color}`} />
      <div className="flex flex-wrap items-center gap-2 mb-1">
        <time className="font-mono text-sm text-gray-500">{item.date}</time>
        <span className={`${cat.color} text-white text-xs font-bold rounded-full px-2.5 py-0.5`}>{cat.label}</span>
      </div>
      <h3 className="font-bold text-base md:text-lg leading-snug">{item.title}</h3>
      {item.body && <p className="mt-1 text-sm md:text-base text-gray-700 leading-relaxed">{item.body}</p>}
      {item.link && (
        <NextLink href={item.link.href} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm text-blue-700 hover:underline">
          {item.link.label} ↗
        </NextLink>
      )}
      {item.image && <img src={item.image} alt="" className="mt-3 h-auto w-auto max-w-full sm:max-w-sm max-h-72 rounded-md" />}
      {item.work && (
        <NextLink
          href={item.work.route}
          className="mt-3 flex w-full max-w-sm items-center gap-3 rounded-md border border-indigo-300 p-2 hover:bg-indigo-50 transition-colors"
        >
          <img src={item.work.image} alt="" className="h-14 w-24 shrink-0 rounded object-cover" />
          <span className="text-sm font-semibold text-indigo-700">{item.work.title} を見る →</span>
        </NextLink>
      )}
    </li>
  );
};

const Timeline = () => {
  const years = Array.from(new Set(HISTORY.map((h) => h.date.slice(0, 4))));

  return (
    <div className="my-8 w-full">
      {years.map((year) => (
        <section key={year} className="mb-2">
          <h3 className="mb-4 text-2xl font-extrabold text-blue-800">{year}</h3>
          <ul className="ml-2 border-l-2 border-gray-300">
            {HISTORY.filter((h) => h.date.startsWith(year)).map((item) => (
              <TimelineItem key={item.date + item.title} item={item} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default Timeline;
