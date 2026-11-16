import Image from "next/image";
import NextLink from "next/link";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

type Proof = { label: string; href?: string };

type Skill = {
  name: string;
  icon?: string;
  tools?: string[];
  body: string;
  proofs?: Proof[];
};

type Section = {
  title: string;
  lead: string;
  skills: Skill[];
};

const SECTIONS: Section[] = [
  {
    title: "研究",
    lead: "音声・音楽信号処理と機械学習を軸に、エレキギターのオーディオエフェクトを対象とした研究をしています。",
    skills: [
      {
        name: "音声・音楽信号処理",
        body: "エレキギターの音やエフェクターの出力音を対象に、エフェクト設定を音から逆推定する研究に取り組んでいます。",
        proofs: [
          { label: "APSIPA ASC 2026 発表" },
          { label: "音響学会 2026秋 発表" },
          { label: "音学シンポジウム 2026 学生優秀発表賞" },
        ],
      },
      {
        name: "深層学習モデルの設計・学習",
        icon: "/python.png",
        tools: ["Python"],
        body: "研究ではモジュール分離型のアーキテクチャや学習戦略を設計・検証しています。インターンではTransformerベースの音声合成モデルの構築に取り組みました。",
        proofs: [{ label: "株式会社レコセレ インターン" }, { label: "戸田研究室" , href: "https://www.toda.is.i.nagoya-u.ac.jp/" }],
      },
      {
        name: "研究発表・論文執筆",
        body: "国内学会から国際会議まで、日本語・英語の両方で研究を発表しています。",
        proofs: [{ label: "国際会議（英語）での口頭発表" }, { label: "国内学会での受賞" }],
      },
    ],
  },
  {
    title: "開発",
    lead: "Web・モバイル・AIアプリケーションを、設計から実装・リリースまで一貫して作ります。",
    skills: [
      {
        name: "Webフロントエンド",
        icon: "/typescript.svg",
        tools: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
        body: "このポートフォリオサイトを含め、Webアプリのフロントエンドを主にNext.jsで開発しています。",
        proofs: [
          { label: "株式会社Acompany インターン" },
          { label: "SUDO", href: "./work/SUDO" },
          { label: "しんかんWeb2024", href: "./work/Shinkan-web-2024" },
          { label: "このサイト", href: "./work/Portfolio" },
        ],
      },
      {
        name: "バックエンド・API",
        icon: "/python.png",
        tools: ["Python", "FastAPI", "Flask", "GraphQL", "Docker"],
        body: "PythonでのAPI開発に加え、インターンではGraphQLを用いたAPIの設計・実装やDDDの実務実践を経験しました。",
        proofs: [{ label: "株式会社PrAha インターン" }, { label: "SUDO", href: "./work/SUDO" }],
      },
      {
        name: "モバイルアプリ",
        icon: "/flutter.svg",
        tools: ["Flutter", "Dart"],
        body: "インターンで動画学習アプリの開発に約半年間携わりました。",
        proofs: [{ label: "株式会社PrAha インターン" }],
      },
      {
        name: "LLMアプリケーション",
        tools: ["LangGraph", "Gemini API", "RAG（Chroma）"],
        body: "コード生成・静的解析・実行・エラー修正を自動で回すAIエージェントを設計し、数学動画ジェネレーターとして形にしました。",
        proofs: [
          { label: "株式会社Acompany インターン" },
          { label: "SUDO（JPHACKS 2025 審査員特別賞）", href: "./work/SUDO" },
        ],
      },
      {
        name: "データサイエンス・機械学習",
        icon: "/python.png",
        tools: ["Python"],
        body: "データサイエンスのインターンで、機械学習の研鑽を積みました。また、オープンデータを分析して行政課題の解決につなげるアプリも開発しました。",
        proofs: [
          { label: "リクルート株式会社 データサイエンスインターン" },
          { label: "チャリNavi（東京都OD Hackathon 学生賞）", href: "./work/Chari-navi" },
        ],
      },
    ],
  },
];

const OTHER_TOOLS = ["Java", "Unity (C#)", "Firebase", "Blender", "Git / GitHub"];

const CERTS = [
  { date: "2025/11", name: "応用情報技術者試験" },
  { date: "2025/02", name: "情報セキュリティマネジメント試験" },
];

const LANGUAGES = [
  { name: "日本語", flag: "/japan.png", level: "ネイティブ", body: "母語です。わかりやすく、深くまで表現できると評価をいただくことが多いです。" },
  { name: "英語", flag: "/english.jpg", level: "ビジネス・アカデミック", body: "国際会議（APSIPA ASC 2026）で研究発表を行いました。留学生との日常的なコミュニケーションにも使っています。" },
  { name: "ポルトガル語", flag: "/brazil.jpg", level: "日常会話", body: "父方の言語で、高校生の時から習得を始めました。親戚や地域のブラジル人コミュニティとの交流で使っています。" },
  { name: "イタリア語", flag: "/italia.png", level: "読解", body: "好きなアーティストの曲をカバーするために学び始め、今は響きそのものが気に入って続けています。" },
  { name: "韓国語", flag: "/korea.jpg", level: "読解", body: "音の響きとハングルの形が好きで、K-popの歌詞を通じて少しずつ勉強しています。" },
];

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-2xl md:text-3xl font-bold text-blue-800 border-b-2 border-blue-800 pb-2 mb-3">{children}</h2>
);

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-gray-700 border border-gray-300">{children}</span>
);

export default function SkillPage() {
  return (
    <main className="flex flex-col items-center px-4 md:px-20 lg:px-40">
      <Header page="skill" />
      <div className="mt-20 w-full max-w-5xl">
        {/* <p className="mb-12 text-center text-sm md:text-base text-gray-700">
          音声・音楽の<span className="font-bold text-blue-800">研究</span>と、アプリケーションの<span className="font-bold text-indigo-600">開発</span>。
          <br className="hidden md:block" />
          研究で得た知見を、実際に使えるものとして形にすることが強みです。
        </p> */}

        {SECTIONS.map((section) => (
          <section key={section.title} className="mb-16">
            <SectionTitle>{section.title}</SectionTitle>
            <p className="mb-6 text-sm md:text-base text-gray-700">{section.lead}</p>
            <div className="grid gap-4 md:grid-cols-2">
              {section.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col rounded-lg bg-gray-200 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    {skill.icon && <Image src={skill.icon} alt="" width={32} height={32} className="h-8 w-8 object-contain" />}
                    <h3 className="font-bold text-lg">{skill.name}</h3>
                  </div>
                  {skill.tools && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {skill.tools.map((t) => <Chip key={t}>{t}</Chip>)}
                    </div>
                  )}
                  <p className="text-sm md:text-base text-gray-800 leading-relaxed">{skill.body}</p>
                  {skill.proofs && (
                    <ul className="mt-3 pt-3 border-t border-gray-300 space-y-1 text-sm">
                      {skill.proofs.map((p) => (
                        <li key={p.label} className="flex gap-2">
                          <span className="text-blue-700">▸</span>
                          {p.href ? (
                            <NextLink
                              href={p.href}
                              target={p.href.startsWith("http") ? "_blank" : undefined}
                              className="text-blue-700 hover:underline"
                            >
                              {p.label}
                            </NextLink>
                          ) : (
                            <span>{p.label}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            {section.title === "開発" && (
              <div className="mt-4 flex flex-wrap items-center gap-1.5 text-sm">
                <span className="font-semibold text-gray-600 mr-1">その他の経験：</span>
                {OTHER_TOOLS.map((t) => <Chip key={t}>{t}</Chip>)}
              </div>
            )}
          </section>
        ))}

        <section className="mb-16">
          <SectionTitle>資格</SectionTitle>
          <ul className="divide-y divide-gray-300">
            {CERTS.map((c) => (
              <li key={c.name} className="flex gap-4 py-3">
                <time className="font-mono text-sm text-gray-500 w-20 shrink-0">{c.date}</time>
                <span className="font-semibold">{c.name}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-20">
          <SectionTitle>言語</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LANGUAGES.map((l) => (
              <div key={l.name} className="rounded-lg bg-gray-200 p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Image src={l.flag} alt="" width={40} height={27} className="h-7 w-10 rounded-sm object-cover" />
                  <h3 className="font-bold text-lg">{l.name}</h3>
                </div>
                <p className="mb-2 text-xs font-semibold text-blue-800">{l.level}</p>
                <p className="text-sm text-gray-800 leading-relaxed">{l.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
