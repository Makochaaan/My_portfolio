import Header from "../../../../components/header";
import Footer from "../../../../components/footer";

export default function Yorimichizu() { 

return (
        <main className="flex flex-col items-center px-4 md:px-60">
            <Header page="work-detail"/>
                <div className="mt-20 flex-col min-h-screen">
                    <img src="/yorimichizu.png" className="w-full rounded-md" />
                    <div className="flex justify-center my-10">
                        <div className="flex justify-center mx-5"><p className="text-xl font-bold">使用技術</p></div>
                        <div className="flex justify-center mx-5"><img src="/HTML5.svg" className="h-6"></img><p className="text-xl">HTML</p></div>
                        <div className="flex justify-center mx-5"><img src="/css.svg" className="h-6"></img><p className="text-xl">CSS</p></div>
                        <div className="flex justify-center mx-5"><img src="/JavaScript.png" className="h-6"></img><p className="text-xl">JavaScript</p></div>
                        <div className="flex justify-center mx-5"><img src="/python.png" className="h-6"></img><p className="text-xl">Python</p></div>
                        <div className="flex justify-center mx-5"><img src="/googlemap.png" className="h-6"></img><p className="text-xl">Google Map API</p></div>
                    </div>
                    <div className="mt-20 z-10 max-w-5xl items-center font-mono text-sm text-center md:text-left">
                    <h1 className="flex justify-center text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-300 to-orange-500 text-transparent bg-clip-text">--よりみちず--</h1><br></br>
                </div>
                {/* <h1 className="mt-10 flex justify-center"></h1> */}
                <div className="flex justify-center my-10">
                    <a href="https://yorimichizu.up.railway.app" target="_blank" rel="noopener noreferrer" className="bg-orange-400 text-white rounded-md px-4 py-2">クリックして触ってみる→</a>
                </div>
                <div className="my-20 flex-col place-items-center">
                    <h1 className="flex justify-center my-10 text-2xl md:text-4xl font-semibold">普段の道をより面白く...</h1>
                    <p className="text-sm md:text-base">　「よりみちず」は，出発地と目的地を最短でつなぐ既存の地図アプリとは違い，あえて「寄り道」を提案します．<br></br>
                       　普段の道も，思いがけない場所の再発見で，より面白いものになるのではないか．そう考えて2022年6月にサークルメンバー4人で開発したものが始まりです．<br></br>
                       　その後，2023年10月に私が1年間眠っていたプログラムを引き受け，UIと機能を拡充し，11月にリリースしました．</p>
                    <h2 className="flex justify-center my-10 text-2xl md:text-4xl mt-20 font-semibold">使い方</h2>
                    <p className="text-sm md:text-base">出発地と目的地を入力し、詳細検索から場所のジャンルを選択する．そうして検索を押し，結果をお待ちください．<br></br>
                    　例えば，少し早い学校からの帰り道に．例えば，散歩の目的地に．例えば，旅先での移動途中に．ただ早く移動するだけ，そんな生活に飽きてしまった時にぜひお使いください．</p>
                    <div className="flex justify-center my-20">
                        <a href="https://yorimichizu.up.railway.app" target="_blank" rel="noopener noreferrer" className="bg-orange-400 text-white rounded-md px-4 py-2">クリックして触ってみる→</a>
                    </div>
                    <h2 className="flex justify-center my-10 text-2xl md:text-4xl mt-20 font-semibold">ポイント</h2>
                    <ul className="list-disc list-inside text-sm md:text-base">
                        <li>Google Map APIを活用し，マップの表示，店情報の取得，オートコンプリート，店ジャンル指定，経路表示を実装しました．</li>
                        <img src="/yorimichizu2.png" className="h-80"></img>
                        <li>デザインはオレンジを基調として暖色とし，シンプルで見やすい配色としました．</li>
                        <li>出発地の指定に現在地情報を利用できるようにしました．</li>
                        <li>右上にポップアップ式の使い方説明を配置し，不慣れな人でも触りやすいようにしました．</li>
                        <img src="/yorimichizu3.png" className="h-80"></img>
                    </ul>
                </div>
            </div>
            <Footer />
        </main>
    );
}