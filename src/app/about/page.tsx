import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Timeline from "../../components/Timeline";
import React, { useEffect } from 'react';

export default function About() {
  return (
    <main className="flex flex-col items-center px-60">
      <Header page="about"/>
      <div className="z-10 w-full max-w-5xl items-center font-medium lg:flex-col">
        
      <div className="mt-20 z-10 flex place-items-center relative">
                <Image
                    className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert scale-75 rounded-md"
                    src="/myPhoto.jpg"
                    alt="Next.js Logo"
                    width={420}
                    height={420}
                    priority
                />
                <div className="flex-col ml-12 text-center">
                    <h1 className="font-extrabold mb-8 text-7xl text-blue-800">私について</h1>
                    <p className="text-2xl mb-8">{process.env.NAME}</p>
                    <p className="text-xl mb-8">{process.env.BELONG}</p>
                </div>
            </div>

        <div className="mt-10 flex-col place-items-center ">
            <h1 className="text-2xl mb-4 font-semibold">自己紹介</h1>
            <p >　本ポートフォリオをご覧いただきありがとうございます。{process.env.NAME}({process.env.NAME_KANA})と申します。名古屋大学 情報学部コンピュータ科学科 知能システム学専攻所属の3年生です。専攻先では、エレキギターやその音を加工するエフェクターといったものの出力する音声を扱う、音声信号処理という分野に興味を持っています。</p>
            <p>　名古屋大学のアプリ開発団体jackに所属しており、主に自分があったらいいなと思ったアプリをゆっくりと作っています。また、アプリケーションを作成する傍らで、音楽活動にも携わっています。</p>
            <p>　ぜひ、Workページから作成したアプリや音楽をご覧いただけると幸いです。</p>
        </div>

        <div className="mt-10 z-10 flex-col place-items-center ">
            <h1 className="text-2xl my-4 font-semibold">経歴</h1>
            <Timeline />
        </div>

        <div className="mt-10 z-10 flex-col place-items-center ">
            <h1 className="text-2xl my-4 font-semibold">趣味</h1>
            <p>　電車旅、音楽作成、飲食店・バー巡り、アプリ開発、外国語学習</p>
            {/*TODO:写真を載せる */}
        </div>

        <div className="mt-20 z-10 flex-col place-items-center ">
            <h1>Links and Contacts</h1>
            <p>Github:<a href={process.env.GITHUB} target="_blank">{process.env.GITHUB}</a></p>
            <p>Mail:{process.env.MAIL}</p>
            <p>Blog:<a href={process.env.BLOG} target="_blank">{process.env.BLOG}</a></p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
