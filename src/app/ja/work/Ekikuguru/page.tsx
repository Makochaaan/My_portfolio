import Header from "../../../../components/header";
import Footer from "../../../../components/footer";

export default function Yorimichizu() { 

return (
        <main className="flex flex-col items-center px-4 md:px-60">
            <Header page="work-detail"/>
                <div className="mt-20 flex-col min-h-screen">
                    <img src="/ekikuguru.png" className="w-full rounded-md" />
                    <div className="flex justify-center my-10">
                        <div className="flex justify-center mx-5"><p className="text-xl font-bold">使用技術</p></div>
                        <div className="flex justify-center mx-5"><img src="/dart.svg" className="h-6"></img><p className="text-xl">Dart</p></div>
                        <div className="flex justify-center mx-5"><img src="/flutter.svg" className="h-6"></img><p className="text-xl">Flutter</p></div>
                        <div className="flex justify-center mx-5"><img src="/googlemap.png" className="h-6"></img><p className="text-xl">Google Map API</p></div>
                        <div className="flex justify-center mx-5"><img src="/firebase.png" className="h-6"></img><p className="text-xl">firebase</p></div>
                    </div>
                    <div className="mt-20 z-10 max-w-5xl items-center font-mono text-sm text-center md:text-left">
                    <h1 className="flex justify-center text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-300 to-orange-500 text-transparent bg-clip-text">--駅くぐる--</h1><br></br>
                </div>
                {/* <h1 className="mt-10 flex justify-center"></h1> */}
                <div className="flex justify-center my-10">
                    <a href="https://www.youtube.com/watch?si=kv6wfif2_ViJLryt&v=PAU-5mBOTMw&feature=youtu.be" target="_blank" rel="noopener noreferrer" className="bg-orange-400 text-white rounded-md px-4 py-2">デモ動画へ→</a>
                </div>
                <div className="my-20 flex-col place-items-center">
                    <h1 className="flex justify-center my-10 text-2xl md:text-4xl font-semibold">この駅、トイレない...！！</h1>
                    <p className="text-sm md:text-base">　「駅くぐる」は、駅にどんな設備が備わっているか、そしてその設備が改札内なのか改札外なのかを可視化するアプリで、
                        JPHACKS2024のプロジェクトとして作成したアプリケーションになっています。駅のトイレを使おうとしても、それが改札内であったとき。また、チャージ機が駅になくチャージができないとき。
                        このような普段遭遇する不便さを解消したいとメンバー3人で開発しました。自分はGoogleMapAPIとフロントデザイン、そしてプロジェクトマネジメントを担当しました。惜しくも本選には進めませんでしたが、メンバーの持つ技術を利用して、1つきれいな形でアプリを完成させることができ、
                        自分のスキルアップを実感できました。
                    </p>
                    <div className="flex justify-center my-20">
                        <a href="https://www.youtube.com/watch?si=kv6wfif2_ViJLryt&v=PAU-5mBOTMw&feature=youtu.be" target="_blank" rel="noopener noreferrer" className="bg-orange-400 text-white rounded-md px-4 py-2">デモ動画へ→</a>
                    </div>
                    <h2 className="flex justify-center my-10 text-2xl md:text-4xl mt-20 font-semibold">ポイント</h2>
                    <ul className="list-disc list-inside text-sm md:text-base">
                        <li>GoogleMap上にある駅情報を検索して、その駅に何があるかを地図から直感的に見ることが出来るようにしました．</li>
                        <li>路線図や駅名から駅の設備を詳しく調べることも可能にしました。</li>
                        <li> 駅の設備であるか分からないものは、ユーザからのアンケートで可変的に登録可能にしました。</li>
                        <div className="flex justify-center my-10">
                            <img src="/eki3.png" className="h-80 mx-5"></img>
                            <img src="/eki2.png" className="h-80 mx-5"></img>
                            <img src="/eki4.png" className="h-80 mx-5"></img>
                        </div>
                       
                    </ul>
                </div>
            </div>
            <Footer />
        </main>
    );
}