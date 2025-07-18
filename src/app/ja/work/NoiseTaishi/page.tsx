import Image from "next/image";
import Header from "../../../../components/header";
import NextLink from 'next/link'
import Footer from "../../../../components/footer";

export default function NoiseTaishi() { 

return (
        <main className="flex flex-col items-center px-4 md:px-60">
            <Header page="work-detail"/>
                <div className="mt-20 flex-col min-h-screen">
                    <img src="/noiseTaishi.png" className="w-full rounded-md" />
                    <div className="flex justify-center my-10">
                        <div className="flex justify-center mx-5"><p className="text-xl font-bold">使用技術</p></div>
                        <div className="flex justify-center mx-5"><img src="/unity.svg" className="h-6"></img><p className="text-xl">Unity</p></div>
                    </div>
                    <div className="mt-20 z-10 max-w-5xl items-center font-mono text-sm text-center md:text-left">
                    <h1 className="flex justify-center text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-700 to-purple-950 text-transparent bg-clip-text">-ノイキャン聖徳太子--</h1><br></br>
                </div>
                {/* <h1 className="mt-10 flex justify-center"></h1> */}
                <div className="flex justify-center my-10">
                    <a href="https://unityroom.com/games/jackhack2025_h" target="_blank" rel="noopener noreferrer" className="bg-purple-800 text-white rounded-md px-4 py-2">クリックして触ってみる→</a>
                </div>
                <div className="my-20 flex-col place-items-center">
                    <h1 className="flex justify-center my-10 text-2xl md:text-4xl font-semibold">音ゲー X クイズ X 聖徳太子</h1>
                    <p className="text-sm md:text-base">　「ノイキャン聖徳太子」は、音楽ゲームとクイズを組み合わせたゲームで、
                        聖徳太子が10人の声を聞き分けられたのは、<br/>
                        　　1. ノイズキャンセルで聞きたい音だけ聞き分けていた<br/>
                        　　2. 聖徳太子が見識深かったから<br/>
                        であると仮定して作ったゲームです。<strong>サークル内ハッカソンにて第2位を獲得しました。</strong><br></br>
                        プレイヤーは、聖徳太子の周りからやってくるノイズをノイズキャンセリングで消しながら、聞こえてくる声を聞き分けて、聞き取れた声をもとにクイズに答えていきます。<br/>
                        私は今回はプロダクトの全体構造・進捗マネジメント及び細やかなエフェクトの作成を行いました。チームには開発初心者の1,2年生もいたため、Unityの使い方やC#の書き方を教えたり、ゲームの進捗を管理したりしながら楽しんでもらえるように心がけました。
                    </p>
                   <div className="flex justify-center my-20">
                        <a href="https://unityroom.com/games/jackhack2025_h" target="_blank" rel="noopener noreferrer" className="bg-purple-800 text-white rounded-md px-4 py-2">クリックして触ってみる→</a>
                    </div>
                    <h2 className="flex justify-center my-10 text-2xl md:text-4xl mt-20 font-semibold">ポイント</h2>
                    <ul className="list-disc list-inside text-sm md:text-base">
                        <li>マウスの動きに合わせて聖徳太子を囲むバリアが360°回転するインターフェースを搭載しました。</li>
                        <li>聖徳太子がリズムに乗る演出や、ノイズの演出など、細やかなゲーム体験を向上できるようなデザインを行いました。</li>
                        <li>最初の音ゲーフェーズで紫のノイズを消せないと、次の金色のノードがクイズ画面時に隠れてしまうようにしました。</li>
                        <div className="flex justify-center my-10">
                            <img src="/taishi1.png" className="h-60 mx-5"></img>
                            <img src="/taishi2.png" className="h-60 mx-5"></img>
                        </div>
                    </ul>
                </div>
            </div>
            <Footer />
        </main>
    );
}
