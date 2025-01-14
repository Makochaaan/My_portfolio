import Image from "next/image";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Timeline from "../../../components/Timeline";
import { FadeinAnimation } from "../../../animation/fadeAnimation";
import React, { useEffect } from 'react';

export default function About() {
  return (
    <main className="flex flex-col items-center px-4 md:px-60">
      <Header page="about"/>
      <div className="z-10 w-full max-w-5xl items-center font-medium lg:flex-col">
        
            <FadeinAnimation>
              <div className="mt-20 z-10 flex flex-col md:flex-row place-items-center relative">
                <Image
                    className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] scale-75 rounded-md"
                    src="/myPhoto.jpg"
                    alt="myPhoto"
                    width={420}
                    height={420}
                    priority
                />
                <div className="flex-col ml-0 md:ml-12 text-center md:text-left">
                    <h1 className="font-extrabold mb-8 text-4xl md:text-7xl text-blue-800">私について</h1>
                    <p className="text-xl md:text-2xl mb-8">{process.env.NEXT_PUBLIC_NAME}</p>
                    <p className="text-lg md:text-xl mb-8">{process.env.NEXT_PUBLIC_BIRTHDAY}, 愛知県生まれ</p>
                    <p className="text-lg md:text-xl mb-4">{process.env.NEXT_PUBLIC_BELONG}</p>
                    <p className="text-lg md:text-xl mb-4">総合GPA: 3.86</p>
                </div>
              </div>
            </FadeinAnimation>
        <FadeinAnimation>
        <div className="mt-10 flex-col place-items-center">
            <h1 className="text-xl md:text-2xl mb-4 font-semibold">自己紹介</h1>
            <p className="text-sm md:text-base">　本ポートフォリオをご覧いただきありがとうございます。{process.env.NEXT_PUBLIC_NAME}({process.env.NEXT_PUBLIC_NAME_KANA})と申します。名古屋大学 情報学部コンピュータ科学科 知能システム学専攻所属の3年生です。専攻先では、エレキギターやその音を加工するエフェクターといったものの出力する音声を扱う、音声信号処理という分野に興味を持っています。</p>
            <p className="text-sm md:text-base">　名古屋大学のアプリ開発団体jackに所属しており、主に自分があったらいいなと思ったアプリをゆっくりと作っています。また、アプリケーションを作成する傍らで、音楽活動にも携わっています。</p>
            <p className="text-sm md:text-base">　ぜひ、Workページから作成したアプリや音楽をご覧いただけると幸いです。</p>
        </div>
        </FadeinAnimation>
        
        <div className="mt-10 z-10 flex-col place-items-center">
            <FadeinAnimation>
            <h1 className="text-xl md:text-2xl my-4 font-semibold">経歴</h1>
            </FadeinAnimation>
            <Timeline />
        </div>
        
        <h1 className="mt-10 text-xl md:text-2xl mb-4 font-semibold">アカウント</h1>
        <p className="my-4 text-sm md:text-md">　ご連絡等ございましたら、以下のリンク先又はメール( {process.env.NEXT_PUBLIC_MAIL} )よりご連絡ください。</p>
        <div className="mb-20 flex flex-col items-center">
                    
                    <div className="flex flex-col items-center">
                        <a href={process.env.NEXT_PUBLIC_LINKEDIN|| '#'} target="_blank" className="mt-10 bg-gray-300 hover:bg-gray-400 hover:duration-500 text-gray-800 font-bold py-5 px-20 md:px-40 w-full inline-flex items-center rounded-full">
                        <img className="fill-current w-7 h-6 mr-2" src="/LI-In-mark.png" alt="LinkedIn Logo" />
                            <span>LinkedIn</span>
                        </a><br></br>
                        <a href={process.env.NEXT_PUBLIC_GITHUB|| '#'} target="_blank" className="mt-2 bg-gray-300 hover:bg-gray-400 hover:duration-500 text-gray-800 font-bold py-5 px-20 md:px-40 w-full rounded-full inline-flex items-center">
                            <img className="fill-current w-6 h-6 mr-2" src="/github-mark.svg" alt="Github Logo" />
                            <span>Github</span>
                        </a><br></br>
                        <a href={process.env.NEXT_PUBLIC_INSTAGRAM|| '#'} target="_blank" className="mt-2 bg-gray-300 hover:bg-gray-400 hover:duration-500 text-gray-800 font-bold py-5 px-20 md:px-40 w-full rounded-full inline-flex items-center">
                        <img className="fill-current w-6 h-6 mr-2" src="/Instagram_mark.svg" alt="Instagram Logo" />
                            <span>Instagram</span>
                        </a><br></br>
                        <a href={process.env.NEXT_PUBLIC_JACK|| '#'} target="_blank" className="mt-2 bg-gray-300 hover:bg-gray-400 hover:duration-500 text-gray-800 font-bold py-5 px-20 md:px-40 w-full rounded-full inline-flex items-center">
                        <img className="fill-current w-6 h-6 mr-2 rounded-md" src="/jack_mark.png" alt="jack Logo" />
                            <span>アプリ開発団体jack</span>
                        </a><br></br>
                    </div>
          </div>
      </div>
      <Footer />
    </main>
  );
}
