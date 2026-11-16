"use client";

import { useLayoutEffect, useRef, useState } from "react";

type Lang = "ja" | "en" | "pt-BR";

type NewsItem = {
  date: string; // YYYY/MM/DD or YYYY/MM
  tag: "research" | "award" | "event";
  title: Record<Lang, string>;
  link?: string;
};

// 新しいニュースは配列の先頭に追加してください（新しい順に表示されます）
const NEWS: NewsItem[] = [
  {
    date: "2026/11",
    tag: "research",
    title: {
      ja: "APSIPA ASC 2026（バンコク, タイ）にて「Audio Effect Setting Estimation with Module Separated Architecture」の発表を行いました",
      en: "Presented 'Audio Effect Setting Estimation with Module Separated Architecture' at APSIPA ASC 2026 (Bangkok, Thailand)",
      "pt-BR": "Apresentei 'Estimativa de Configurações de Efeitos de Áudio com Arquitetura de Módulos Separados' na APSIPA ASC 2026 (Bangkok, Tailândia)",
    },
    link: "",
  },
  {
    date: "2026/09",
    tag: "research",
    title: {
      ja: "音響学会 2026年秋季大会（金沢, 石川県）にて「オーディオエフェクト設定逆推定における学習戦略」の発表を行いました",
      en: "Presented 'Learning Strategies for Audio Effect Setting Estimation' at the Acoustical Society of Japan (ASJ) 2026 Autumn Meeting (Kanazawa, Ishikawa)",
      "pt-BR": "Apresentei 'Estratégias de Aprendizado para Estimativa de Configurações de Efeitos de Áudio' no Encontro de Outono 2026 da Sociedade Acústica do Japão (ASJ) (Kanazawa, Ishikawa)",
    },
    link: "",
  },
  {
    date: "2026/06",
    tag: "award",
    title: {
      ja: "音学シンポジウム 2026にて「モジュール分離型アーキテクチャによるオーディオエフェクト設定逆推定」の発表を行い、学生優秀発表賞を受賞しました",
      en: "Presented 'Audio Effect Setting Estimation with a Module-Separated Architecture' and received the Student Excellent Presentation Award at Otogaku Symposium 2026",
      "pt-BR": "Recebi o Prêmio de Apresentação Estudantil de Destaque no Otogaku Symposium 2026",
    },
    link: "",
  },
  {
    date: "2026/03",
    tag: "event",
    title: {
      ja: "名古屋大学 情報学部 コンピュータ科学科を卒業しました。引き続き情報学研究科 知能システム学専攻に進学します",
      en: "Graduated from Nagoya University, School of Informatics, Department of Computer Science. I will continue my studies in the Graduate School of Informatics, Department of Intelligent Systems.",
      "pt-BR": "Me formei na Universidade de Nagoya, Escola de Informática, Departamento de Ciência da Computação. Continuarei meus estudos na Escola de Pós-Graduação em Informática, Departamento de Sistemas Inteligentes.",
    },
    link: "",
  },
  {
    date: "2025/11",
    tag: "award",
    title: {
      ja: "JPHACKS 2025にて作成した「数学動画ジェネレータSUDO」で、審査員特別賞およびイノベーター認定を受賞しました",
      en: "Received the Special Jury Prize and Innovator Certification for 'Mathematics Video Generator SUDO' created at JPHACKS 2025",
      "pt-BR": "Recebi o Prêmio Especial do Júri e a Certificação de Inovador por 'Gerador de Vídeo Matemático SUDO' criado no JPHACKS 2025",
    },
    link: "",
  },
  {
    date: "2025/10",
    tag: "award",
    title: {
      ja: "東京都オープンデータハッカソン 2025にて作成した「チャリNavi」が学生賞を受賞しました",
      en: "Received the Student Award for 'ChariNavi' created at the Tokyo Open Data Hackathon 2025",
      "pt-BR": "Recebi o Prêmio Estudantil por 'ChariNavi' criado no Hackathon de Dados Abertos de Tóquio 2025",
    },
    link: "",
  }
];

const HEADING: Record<Lang, string> = { ja: "ニュース", en: "News", "pt-BR": "Notícias" };

const TAG_LABEL: Record<NewsItem["tag"], Record<Lang, string>> = {
  research: { ja: "研究", en: "Research", "pt-BR": "Pesquisa" },
  award: { ja: "受賞", en: "Award", "pt-BR": "Prêmio" },
  event: { ja: "イベント", en: "Event", "pt-BR": "Evento" },
};

const TAG_COLOR: Record<NewsItem["tag"], string> = {
  research: "bg-blue-600",
  award: "bg-amber-500",
  event: "bg-emerald-600",
};

const VISIBLE_COUNT = 5;

export default function News({ lang }: { lang: Lang }) {
  const listRef = useRef<HTMLUListElement>(null);
  const [maxHeight, setMaxHeight] = useState<number>();

  // 表示幅によって各行の高さが変わるため、先頭5件の実際の高さを測ってリストの高さにする
  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const measure = () => {
      const items = list.children;
      if (items.length <= VISIBLE_COUNT) {
        setMaxHeight(undefined);
        return;
      }
      const last = items[VISIBLE_COUNT - 1] as HTMLElement;
      setMaxHeight(last.offsetTop + last.offsetHeight);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(list);
    return () => observer.disconnect();
  }, [lang]);

  return (
    <div className="pt-20 mb-20 flex flex-col items-center">
      <h1 className="mb-10 font-bold text-3xl text-center">{HEADING[lang]}</h1>
      <ul
        ref={listRef}
        style={{ maxHeight }}
        className="relative w-full max-w-3xl overflow-y-auto pr-2 divide-y divide-gray-300 border-y border-gray-300"
      >
        {NEWS.map((item) => (
          <li key={item.date + item.title.ja} className="py-4 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <div className="flex items-center gap-3 shrink-0">
              <time className="font-mono text-sm text-gray-500 w-24">{item.date}</time>
              <span className={`${TAG_COLOR[item.tag]} text-white text-xs font-bold rounded-full px-3 py-1 w-20 text-center`}>
                {TAG_LABEL[item.tag][lang]}
              </span>
            </div>
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-left hover:text-blue-600 hover:underline">
                {item.title[lang]}
              </a>
            ) : (
              <p className="text-left">{item.title[lang]}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
