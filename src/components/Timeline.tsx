"use client";

import NextLink from "next/link";
import { useInView } from "react-intersection-observer";

type Lang = "ja" | "en";

type Category = "education" | "research" | "dev" | "activity" | "career";

type HistoryItem = {
  date: string; // YYYY/MM or YYYY/MM~YYYY/MM
  category: Category;
  title: string;
  body?: string;
  image?: string;
  work?: { route: string; image: string; title: string };
  link?: { label: string; href: string };
  // 英語版の表示内容。workHref は英語版での作品リンク先（英語の詳細ページが無いため外部リンク）
  en: { title: string; body?: string; linkLabel?: string; workTitle?: string; workHref?: string };
};

// 新しい出来事は配列の先頭に追加してください（新しい順に表示されます）
const HISTORY: HistoryItem[] = [
  {
    date: "2026/11",
    category: "research",
    title: "APSIPA ASC 2026（バンコク, タイ）で発表",
    body: "「Audio Effect Setting Estimation with Module Separated Architecture」について、国際会議で発表しました。",
    image: "/2026APSIPA.jpg",
    en: { title: "Presented at APSIPA ASC 2026 (Bangkok, Thailand)", body: "Presented \"Audio Effect Setting Estimation with Module Separated Architecture\" at an international conference." },
  },
  {
    date: "2026/10~2026/11",
    category: "career",
    title: "リクルート株式会社 データサイエンスインターン",
    body: "データサイエンスのインターンに参加し、実務データを使った課題発見とモデル改善を行いました。",
    en: { title: "Data Science Intern at Recruit Co., Ltd.", body: "Joined a data science internship, discovering problems and improving models using real-world business data." },
  },
  {
    date: "2026/09",
    category: "research",
    title: "音響学会 2026年秋季大会（金沢）で発表",
    body: "「オーディオエフェクト設定逆推定における学習戦略」について発表しました。",
    image: "/2026ASJ.jpg",
    en: { title: "Presented at the ASJ 2026 Autumn Meeting (Kanazawa)", body: "Presented \"Learning Strategies for Audio Effect Setting Estimation\" at the Acoustical Society of Japan." },
  },
  {
    date: "2026/06",
    category: "research",
    title: "音学シンポジウム 2026で学生優秀発表賞を受賞",
    body: "「モジュール分離型アーキテクチャによるオーディオエフェクト設定逆推定」について発表し、学生優秀発表賞をいただきました。",
    image: "/symposyum.jpg",
    en: { title: "Student Excellent Presentation Award at Otogaku Symposium 2026", body: "Presented \"Audio Effect Setting Estimation with a Module-Separated Architecture\" and received the Student Excellent Presentation Award." },
  },
  {
    date: "2026/05~",
    category: "career",
    title: "株式会社Acompanyにてフルスタックエンジニアインターンを開始",
    body: "セキュリティ技術の一つであるConfidential Computingを扱った製品開発を行います。",
    en: { title: "Started a Full-Stack Engineer Internship at Acompany Co., Ltd.", body: "Developing products built on Confidential Computing, a security technology." },
  },
  {
    date: "2026/04",
    category: "education",
    title: "名古屋大学 情報学研究科 知能システム学専攻 修士課程 入学",
    body: "引き続き戸田研究室で、オーディオエフェクトを対象とした音声信号処理の研究を続けています。",
    en: { title: "Entered the Master's Program, Department of Intelligent Systems, Graduate School of Informatics, Nagoya University", body: "Continuing research on audio signal processing for audio effects at Toda Lab." },
  },
  {
    date: "2026/03",
    category: "education",
    title: "名古屋大学 情報学部 コンピュータ科学科 卒業",
    en: { title: "Graduated from Nagoya University, School of Informatics, Department of Computer Science" },
  },
  {
    date: "2026/02",
    category: "activity",
    title: "Google AI学生アンバサダー キャンパスMVPを受賞",
    body: "半年間リーダーとして携わったアンバサダー活動が、全国で最も成果を出したことで表彰されました。",
    image: "/ambasador.jpg",
    en: { title: "Won Campus MVP as a Google AI Student Ambassador", body: "The ambassador activities I led for six months were recognized as the most successful in Japan." },
  },
  {
    date: "2025/11",
    category: "education",
    title: "応用情報技術者試験に合格",
    en: { title: "Passed the Applied Information Technology Engineer Examination" },
  },
  {
    date: "2025/10~2025/11",
    category: "dev",
    title: "JPHACKS 2025で審査員特別賞・イノベーター認定を受賞",
    body: "前年のリベンジとしてJPHACKS 2025に参加しました。塾講師としての経験を踏まえ、教師の説明を補助する数学動画生成ツール「SUDO」を開発し、審査員特別賞とイノベーター認定をいただきました。",
    work: { route: "./work/SUDO", image: "/Sudo.png", title: "SUDO" },
    en: { title: "Special Jury Prize and Innovator Certification at JPHACKS 2025", body: "Came back to JPHACKS for a rematch. Drawing on my experience as a cram school teacher, I built \"SUDO\", a math video generator that helps teachers explain concepts, and received the Special Jury Prize and Innovator Certification.", workTitle: "SUDO", workHref: "https://www.youtube.com/watch?v=lA9EluZugD8" },
  },
  {
    date: "2025/09~2025/10",
    category: "dev",
    title: "東京都オープンデータハッカソン 2025で学生賞を受賞",
    body: "東京都の公開するオープンデータを活用して行政課題を解決するハッカソンに、「自転車の自発的な車道走行を促すアプリ」というテーマで参加し、「チャリNavi」を開発しました。アプリ開発だけでなく、研究で培ったデータ分析技術も活かすことができました。",
    work: { route: "./work/Chari-navi", image: "/chari-navi.png", title: "チャリNavi" },
    en: { title: "Student Award at the Tokyo Open Data Hackathon 2025", body: "Built \"Chari-Navi\", an app that encourages cyclists to ride on the roadway, using open data published by the Tokyo Metropolitan Government. I applied data analysis skills from my research as well as app development.", workTitle: "Chari-Navi", workHref: "https://odhackathon.metro.tokyo.lg.jp/collection/97/?year=2025" },
  },
  {
    date: "2025/07",
    category: "activity",
    title: "Google AI学生アンバサダーに就任",
    body: "Googleの主催する、AI活用を学生に推進するアンバサダー活動を開始しました。名古屋大学のリーダーを務めます。",
    en: { title: "Became a Google AI Student Ambassador", body: "Started ambassador activities hosted by Google to promote the use of AI among students, serving as the leader for Nagoya University." },
  },
  {
    date: "2025/04",
    category: "research",
    title: "名古屋大学 戸田研究室に配属",
    body: "強く希望していた戸田研究室に配属されました。音声信号処理を専門とする研究室で、エレキギターの音やエフェクターを扱う研究に取り組んでいます。",
    link: { label: "戸田研究室", href: "https://www.toda.is.i.nagoya-u.ac.jp/" },
    en: { title: "Joined Toda Lab, Nagoya University", body: "Joined Toda Lab, which specializes in audio signal processing — the lab I had strongly hoped to join. I work on research involving electric guitar sounds and audio effects.", linkLabel: "Toda Lab" },
  },
  {
    date: "2025/03~2025/09",
    category: "career",
    title: "株式会社PrAha フルスタックエンジニアインターン",
    body: "Flutterを用いた動画学習アプリの開発に携わりました。GraphQLを使ったAPIの設計・実装やDDDの実務実践など、普段の学びでは得られない経験を積みました。",
    en: { title: "Full-Stack Engineer Intern at PrAha Inc.", body: "Developed a video learning app with Flutter, and gained hands-on experience designing and implementing GraphQL APIs and practicing DDD." },
  },
  {
    date: "2025/02",
    category: "education",
    title: "情報セキュリティマネジメント試験に合格",
    body: "情報セキュリティの基礎知識を体系的に身につけました。",
    en: { title: "Passed the Information Security Management Examination", body: "Systematically learned the fundamentals of information security." },
  },
  {
    date: "2024/10",
    category: "dev",
    title: "JPHACKS 2024に参加",
    body: "日本最大の学生ハッカソンに、jackのメンバー3人で出場しました。駅の改札の内外にどんな設備があるかを可視化するアプリ「駅くぐる」を開発しました。",
    work: { route: "./work/Ekikuguru", image: "/ekikuguru.png", title: "駅くぐる" },
    en: { title: "Participated in JPHACKS 2024", body: "Competed in Japan's largest student hackathon with two club members, building \"Ekikuguru\", an app that visualizes facilities inside and outside station ticket gates.", workTitle: "Ekikuguru", workHref: "https://www.youtube.com/watch?v=PAU-5mBOTMw" },
  },
  {
    date: "2024/08~2025/02",
    category: "career",
    title: "株式会社レコセレ インターン",
    body: "シンガポール研修中に出会った株式会社レコセレ様にスカウトいただき、Transformerベースの音声合成モデルの構築に取り組みました。",
    en: { title: "Intern at RecoSele Inc.", body: "Scouted during the Singapore program, I worked on building Transformer-based speech synthesis models." },
  },
  {
    date: "2024/07",
    category: "activity",
    title: "シンガポール国立大学での研修に参加",
    body: "情報学部の2週間のシンガポール研修プランに参加し、シンガポール国立大学での研修のほか、Google・Microsoft・AWSのシンガポールオフィスを見学しました。",
    image: "/singapore_sensored.jpg",
    link: { label: "名古屋大学公式サイトの記事（英語）", href: "https://en.nagoya-u.ac.jp/voice/nus_entrepreneurship.html" },
    en: { title: "Study Program at the National University of Singapore", body: "Joined a two-week program at NUS and visited the Singapore offices of Google, Microsoft, and AWS.", linkLabel: "Article on Nagoya University's website" },
  },
  {
    date: "2024/04",
    category: "dev",
    title: "「名古屋大学しんかんWeb2024」を受託開発",
    body: "前年に続き名古屋大学生協学生委員会様からお声かけいただき、制作の総監督として土台の整備、デザインの決定、マイルストーンの設定などを担いました。",
    work: { route: "./work/Shinkan-web-2024", image: "/shinkanweb2024.png", title: "名古屋大学しんかんWeb2024" },
    en: { title: "Developed \"Nagoya Univ. Shinkan Web 2024\" (commissioned)", body: "Commissioned again by the Nagoya University Co-op Student Committee, I served as project director, setting up the foundation, design direction, and milestones.", workTitle: "Shinkan Web 2024", workHref: "https://sc.coop.nagoya-u.ac.jp/nusc/sinkan2024/" },
  },
  {
    date: "2023/12",
    category: "activity",
    title: "アプリ開発団体jack 副代表に就任",
    body: "代表の任期満了後、副代表としてサークル運営を支えました。",
    en: { title: "Became Vice President of the app development club jack", body: "After my term as president ended, I supported club management as vice president." },
  },
  {
    date: "2023/10",
    category: "activity",
    title: "学生エンジニア交流会「Matsuriba」を立ち上げ",
    body: "HAL名古屋の学生を中心に、名工大・愛工大・名城大など名古屋周辺の学生エンジニアが交流する場を立ち上げました。",
    image: "/matsuriba.jpg",
    en: { title: "Co-founded \"Matsuriba\", a student engineer community", body: "Co-founded a community for student engineers around Nagoya — including HAL Nagoya, Nagoya Institute of Technology, Aichi Institute of Technology, and Meijo University." },
  },
  {
    date: "2023/07",
    category: "dev",
    title: "「よりみちず ver.2」を開発・リリース",
    body: "ハッカソンで作った ver.1 を自分の環境で作り直し、UIの刷新と機能追加を行ってリリースしました。",
    work: { route: "./work/Yorimichizu", image: "/yorimichizu.png", title: "よりみちず" },
    en: { title: "Developed and released \"Yorimichizu ver.2\"", body: "Rebuilt the hackathon version from scratch, redesigned the UI, and added new features.", workTitle: "Yorimichizu", workHref: "https://yorimichizu.up.railway.app" },
  },
  {
    date: "2023/04",
    category: "dev",
    title: "「名古屋大学しんかんWeb2023」を開発",
    body: "名古屋大学生協学生委員会様からお声かけいただき、新入生向けの情報サイトの制作に携わりました。",
    en: { title: "Developed \"Nagoya Univ. Shinkan Web 2023\"", body: "Invited by the Nagoya University Co-op Student Committee to build an information site for new students." },
  },
  {
    date: "2023/02",
    category: "dev",
    title: "「My New Gear」を開発・リリース",
    body: "サークルの先輩の企画に参加し、6人で3Dシューティングゲームを制作しました。Unityのオブジェクト操作、エフェクト、モデリングの基礎を学びました。",
    work: { route: "./work/My-new-gear", image: "/mynewgear.png", title: "My New Gear" },
    en: { title: "Developed and released \"My New Gear\"", body: "Joined a senior club member's project and built a 3D shooting game with a team of six, learning the basics of Unity objects, effects, and modeling.", workTitle: "My New Gear", workHref: "https://unityroom.com/games/my_new_gear" },
  },
  {
    date: "2022/12",
    category: "activity",
    title: "アプリ開発団体jack 代表に就任",
    body: "交流機会を増やしたり外部団体と交渉したりして、メンバーの利益が最大化できるよう取り組みました。",
    en: { title: "Became President of the app development club jack", body: "Increased networking opportunities and negotiated with external organizations to maximize benefits for members." },
  },
  {
    date: "2022/05",
    category: "dev",
    title: "「よりみちず ver.1」を開発",
    body: "サークル加入後最初のハッカソンで、メンバー4人で開発しました。出発地と目的地を入れると寄り道先を提案する、シンプルなアプリでした。",
    image: "/yorimichizu1.png",
    en: { title: "Developed \"Yorimichizu ver.1\"", body: "Built at my first hackathon after joining the club, with a team of four — a simple app that suggests detours between a start point and a destination." },
  },
  {
    date: "2022/04",
    category: "education",
    title: "名古屋大学 情報学部 コンピュータ科学科 入学",
    body: "AI・プログラミングに興味を持ち、独立した情報学部を持つ名古屋大学に入学しました。同時にアプリ開発団体jackに加入し、アプリ開発を始めました。",
    en: { title: "Entered Nagoya University, School of Informatics, Department of Computer Science", body: "Interested in AI and programming, I chose Nagoya University for its independent School of Informatics, and started app development by joining the club jack." },
  },
  {
    date: "2020/09",
    category: "activity",
    title: "岡崎北高校 生徒会長に就任",
    body: "コロナ禍で開催が危ぶまれた学校祭を実現し、女子生徒のスラックス着用許可や一部頭髪規定の撤廃なども実現しました。",
    en: { title: "Became Student Council President at Okazaki Kita High School", body: "Made the school festival happen despite the pandemic, and achieved rule changes such as allowing slacks for female students and lifting some hairstyle restrictions." },
  },
  {
    date: "2020/02",
    category: "activity",
    title: "岡崎北高校 音楽部 部長に就任",
    body: "就任直後にコロナ禍となり、イベントや全国大会の中止を経験しました。限られた環境でどうするかを考えた経験は、今も活きています。",
    en: { title: "Became Captain of the Music Club at Okazaki Kita High School", body: "The pandemic hit right after I took office, canceling events and the national competition. Thinking about what we could do under constraints still shapes me today." },
  },
  {
    date: "2019/04",
    category: "education",
    title: "愛知県立 岡崎北高校 入学",
    body: "音楽部（合唱・軽音楽）に所属し、テノールパートとベースボーカルを担当しました。",
    en: { title: "Entered Okazaki Kita High School, Aichi", body: "Joined the music club (choir and band), singing tenor and playing bass with vocals." },
  },
];

const CATEGORY: Record<Category, { label: Record<Lang, string>; color: string }> = {
  education: { label: { ja: "学歴", en: "Education" }, color: "bg-slate-600" },
  research: { label: { ja: "研究", en: "Research" }, color: "bg-blue-600" },
  dev: { label: { ja: "開発", en: "Development" }, color: "bg-indigo-500" },
  activity: { label: { ja: "活動", en: "Activity" }, color: "bg-emerald-600" },
  career: { label: { ja: "職歴", en: "Career" }, color: "bg-amber-500" },
};

const TimelineItem = ({ item, lang }: { item: HistoryItem; lang: Lang }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const cat = CATEGORY[item.category];
  const isEn = lang === "en";
  const title = isEn ? item.en.title : item.title;
  const body = isEn ? item.en.body : item.body;
  const linkLabel = isEn ? item.en.linkLabel ?? item.link?.label : item.link?.label;
  const workHref = isEn ? item.en.workHref : item.work?.route;
  const workTitle = isEn ? item.en.workTitle ?? item.work?.title : item.work?.title;

  return (
    <li
      ref={ref}
      className={`relative pl-8 pb-8 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <span className={`absolute left-0 top-1.5 h-3 w-3 -translate-x-[5px] rounded-full ring-4 ring-white ${cat.color}`} />
      <div className="flex flex-wrap items-center gap-2 mb-1">
        <time className="font-mono text-sm text-gray-500">{item.date}</time>
        <span className={`${cat.color} text-white text-xs font-bold rounded-full px-2.5 py-0.5`}>{cat.label[lang]}</span>
      </div>
      <h3 className="font-bold text-base md:text-lg leading-snug">{title}</h3>
      {body && <p className="mt-1 text-sm md:text-base text-gray-700 leading-relaxed">{body}</p>}
      {item.link && (
        <NextLink href={item.link.href} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-sm text-blue-700 hover:underline">
          {linkLabel} ↗
        </NextLink>
      )}
      {item.image && <img src={item.image} alt="" className="mt-3 h-auto w-auto max-w-full sm:max-w-sm max-h-72 rounded-md" />}
      {item.work && workHref && (
        <NextLink
          href={workHref}
          target={isEn ? "_blank" : undefined}
          rel={isEn ? "noopener noreferrer" : undefined}
          className="mt-3 flex w-full max-w-sm items-center gap-3 rounded-md border border-indigo-300 p-2 hover:bg-indigo-50 transition-colors"
        >
          <img src={item.work.image} alt="" className="h-14 w-24 shrink-0 rounded object-cover" />
          <span className="text-sm font-semibold text-indigo-700">{isEn ? "View " + workTitle + " ↗" : workTitle + " を見る →"}</span>
        </NextLink>
      )}
    </li>
  );
};

const Timeline = ({ lang = "ja" }: { lang?: Lang }) => {
  const years = Array.from(new Set(HISTORY.map((h) => h.date.slice(0, 4))));

  return (
    <div className="my-8 w-full">
      {years.map((year) => (
        <section key={year} className="mb-2">
          <h3 className="mb-4 text-2xl font-extrabold text-blue-800">{year}</h3>
          <ul className="ml-2 border-l-2 border-gray-300">
            {HISTORY.filter((h) => h.date.startsWith(year)).map((item) => (
              <TimelineItem key={item.date + item.title} item={item} lang={lang} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default Timeline;
