import Header from "../../../../components/header";
import Footer from "../../../../components/footer";

export default function Yorimichizu() { 

return (
        <main className="flex flex-col items-center px-4 md:px-60">
            <Header page="work-detail"/>
                <div className="mt-20 flex-col min-h-screen">
                    <img src="/portfolio.png" className="w-full rounded-md border-indigo-200 border-2" />
                    <div className="flex justify-center my-10">
                        <div className="flex justify-center mx-5"><p className="text-xl font-bold">使用技術</p></div>
                        <div className="flex justify-center mx-5"><img src="/react.svg" className="h-6"></img><p className="text-xl">React</p></div>
                        <div className="flex justify-center mx-5"><img src="/typescript.svg" className="h-6"></img><p className="text-xl">TypeScript</p></div>
                    </div>
                    <div className="mt-20 z-10 max-w-5xl items-center font-mono text-sm text-center md:text-left">
                    <h1 className="flex justify-center text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-300 to-orange-500 text-transparent bg-clip-text">--ポートフォリオ--</h1><br></br>
                </div>
                {/* <h1 className="mt-10 flex justify-center"></h1> */}
                <div className="my-20 flex-col place-items-center">
                    <h1 className="flex justify-center my-10 text-2xl md:text-4xl font-semibold">本ポートフォリオです</h1>
                    <p className="text-sm md:text-base">　本ポートフォリオは、React＆TypeScriptでのWeb開発の経験を積む目的を兼ねて、2か月ほどかけて作成しました。また、フロントデザインに興味を持ち始めた時期でもあったため、視線誘導や色相調和などのデザインの基本を学びながら、このサイトを作成しました。ぜひ本ポートフォリオの隅々までみていていただけると幸いです。
                    </p>
                    <h2 className="flex justify-center my-10 text-2xl md:text-4xl mt-20 font-semibold">ポイント</h2>
                    <ul className="list-disc list-inside text-sm md:text-base">
                        <li>配色に濃紺を用い、グラデーションを用いた濃淡による視線誘導を実装しました。</li>
                        <li>シンプルなUIを心がけ、複雑でかつ直観的でない部分を生まないようにしました。</li>
                        <li>アニメーションの動きによる視線誘導を実装しました。</li>
                        <li>英語版サイトも併設し、ブラウザの設定言語が日本語以外の場合は英語版にアクセスするようにしました。</li>
                        <li>設計では、クリーンアーキテクチャとなるよう、VMMVモデルを採用して実践しました。</li>
                        {/* <div className="flex justify-center my-10">
                            <img src="/eki3.png" className="h-80 mx-5"></img>
                            <img src="/eki2.png" className="h-80 mx-5"></img>
                            <img src="/eki4.png" className="h-80 mx-5"></img>
                        </div> */}
                       
                    </ul>
                </div>
            </div>
            <Footer />
        </main>
    );
}