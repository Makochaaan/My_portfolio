import Header from "../../../components/header";
import Footer from "../../../components/footer";
import SkillContent, { SkillPageContent } from "../../../components/SkillContent";

// 英語の作品詳細ページが無いため、作品へのリンクはデモ動画などの外部リンクにしている
const CONTENT: SkillPageContent = {
  sections: [
    {
      title: "Research",
      lead: "My research focuses on audio and music signal processing and machine learning, targeting audio effects for electric guitar.",
      skills: [
        {
          name: "Audio & Music Signal Processing",
          body: "I work on estimating audio effect settings from the sound of electric guitars and effect pedals.",
          proofs: [
            { label: "Presentation at APSIPA ASC 2026" },
            { label: "Presentation at ASJ 2026 Autumn Meeting" },
            { label: "Student Excellent Presentation Award, Otogaku Symposium 2026" },
          ],
        },
        {
          name: "Deep Learning Model Design & Training",
          icon: "/python.png",
          tools: ["Python"],
          body: "In my research, I design and evaluate module-separated architectures and training strategies. During an internship, I built Transformer-based speech synthesis models.",
          proofs: [{ label: "Internship at RecoSele Inc." }, { label: "Toda Lab", href: "https://www.toda.is.i.nagoya-u.ac.jp/" }],
        },
        {
          name: "Research Presentation & Writing",
          body: "I present my research in both Japanese and English, from domestic conferences to international ones.",
          proofs: [{ label: "Oral presentation at an international conference (in English)" }, { label: "Award at a domestic symposium" }],
        },
      ],
    },
    {
      title: "Development",
      lead: "I build web, mobile, and AI applications end to end — from design to implementation and release.",
      otherTools: { label: "Other experience:", tools: ["Java", "Unity (C#)", "Firebase", "Blender", "Git / GitHub"] },
      skills: [
        {
          name: "Web Frontend",
          icon: "/typescript.svg",
          tools: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
          body: "I mainly build web frontends with Next.js, including this portfolio site.",
          proofs: [
            { label: "Internship at Acompany Co., Ltd." },
            { label: "SUDO (demo video)", href: "https://www.youtube.com/watch?v=lA9EluZugD8" },
            { label: "Shinkan Web 2024", href: "https://sc.coop.nagoya-u.ac.jp/nusc/sinkan2024/" },
          ],
        },
        {
          name: "Backend & API",
          icon: "/python.png",
          tools: ["Python", "FastAPI", "Flask", "GraphQL", "Docker"],
          body: "Beyond building APIs in Python, I designed and implemented GraphQL APIs and practiced DDD during an internship.",
          proofs: [{ label: "Internship at PrAha Inc." }, { label: "SUDO (demo video)", href: "https://www.youtube.com/watch?v=lA9EluZugD8" }],
        },
        {
          name: "Mobile Apps",
          icon: "/flutter.svg",
          tools: ["Flutter", "Dart"],
          body: "I developed a video learning app for about six months during an internship.",
          proofs: [{ label: "Internship at PrAha Inc." }],
        },
        {
          name: "LLM Applications",
          tools: ["LangGraph", "Gemini API", "RAG (Chroma)"],
          body: "I designed an AI agent that automatically loops through code generation, static analysis, execution, and error fixing, and turned it into a math video generator.",
          proofs: [
            { label: "Internship at Acompany Co., Ltd." },
            { label: "SUDO — Special Jury Prize, JPHACKS 2025", href: "https://www.youtube.com/watch?v=lA9EluZugD8" },
          ],
        },
        {
          name: "Data Science & Machine Learning",
          icon: "/python.png",
          tools: ["Python"],
          body: "In a data science internship, I discovered problems and improved models using real-world business data. I also built an app that analyzes open data to help solve public policy issues.",
          proofs: [
            { label: "Data Science Internship at Recruit Co., Ltd." },
            { label: "Chari-Navi — Student Award, Tokyo Open Data Hackathon", href: "https://odhackathon.metro.tokyo.lg.jp/collection/97/?year=2025" },
          ],
        },
      ],
    },
  ],
  certs: {
    title: "Certifications",
    items: [
      { date: "2025/11", name: "Applied Information Technology Engineer Examination (Japan)" },
      { date: "2025/02", name: "Information Security Management Examination (Japan)" },
    ],
  },
  languages: {
    title: "Languages",
    items: [
      { name: "Japanese", flag: "/japan.png", level: "Native", body: "My native language. People often tell me my explanations are clear and thorough." },
      { name: "English", flag: "/english.jpg", level: "Business / Academic", body: "I presented my research at an international conference (APSIPA ASC 2026), and use English daily with international students." },
      { name: "Portuguese", flag: "/brazil.jpg", level: "Conversational", body: "My father's language, which I started learning in high school. I use it with relatives and the local Brazilian community." },
      { name: "Italian", flag: "/italia.png", level: "Reading", body: "I started learning it to cover songs by my favorite artists, and kept going because I love how it sounds." },
      { name: "Korean", flag: "/korea.jpg", level: "Reading", body: "I love the sound of the language and the shapes of Hangul, and keep learning little by little through K-pop lyrics." },
    ],
  },
};

export default function SkillPage() {
  return (
    <main className="flex flex-col items-center px-4 md:px-20 lg:px-40">
      <Header page="skill" lang="en" />
      <SkillContent content={CONTENT} />
      <Footer />
    </main>
  );
}
