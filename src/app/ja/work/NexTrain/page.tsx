import Header from "../../../../components/header";
import Footer from "../../../../components/footer";

export default function NexTrain() { 

return (
        <main className="flex flex-col items-center px-4 md:px-60">
            <Header page="work-detail"/>
                <div className="mt-20 flex-col min-h-screen">
                    <img src="/nexTrain.png" className="w-full rounded-md" />
                    <div className="flex justify-center my-10">
                        <div className="flex justify-center mx-5"><p className="text-xl font-bold">使用技術</p></div>
                        <div className="flex justify-center mx-5"><img src="/dart.svg" className="h-6"></img><p className="text-xl">Dart</p></div>
                        <div className="flex justify-center mx-5"><img src="/flutter.svg" className="h-6"></img><p className="text-xl">Flutter</p></div>
                        <div className="flex justify-center mx-5"><img src="/googlemap.png" className="h-6"></img><p className="text-xl">Google Map API</p></div>
                    </div>
                    <div className="mt-20 z-10 max-w-5xl items-center font-mono text-sm text-center md:text-left">
                    <h1 className="flex justify-center text-4xl md:text-6xl font-bold bg-gradient-to-r from-sky-300 to-sky-500 text-transparent bg-clip-text">--NexTrain--</h1><br></br>
                </div>
                {/* <h1 className="mt-10 flex justify-center"></h1> */}
                <div className="flex justify-center my-10">
                    <a href="https://youtube.com/shorts/-5Ac-um0i0Q?feature=share" target="_blank" rel="noopener noreferrer" className="bg-sky-400 text-white rounded-md px-4 py-2">デモ動画へ→</a>
                </div>
                <div className="my-20 flex-col place-items-center">
                    <h1 className="flex justify-center my-10 text-2xl md:text-4xl font-semibold">今ここから間に合う最寄りの電車はどれだろう？？</h1>
                    <p className="text-sm md:text-base">　「NexTrain」は、今の現在地の近くにある駅から発車する列車の時刻を取得し、現在地からの移動時間を加味したコメントを表示するアプリケーションです。
                        そろそろ電車来るかな？という勘で駅まで走り、結局駅で10分間待つことになってしまった。その時、もっとゆっくりでよかったのに...や、もっと早く出てれば乗れたのに...なんて風には思いたくないですよね。
                        また、とりあえず一番すぐに来る電車を調べたいのに、GoogleMapなどでは必要のない到着地の駅を入力して、出発時間を入力して...と調べなければなりません。これも面倒ですね。
                        このアプリでは、それらのめんどくささの原因となる、「今の位置からの距離を加味する」時刻表示と「現在地から近い駅から発車する」電車の表示を行います。
                        これは自分のコード練習を兼ねて作成しました。
                    </p>
                    <div className="flex justify-center my-20">
                        <a href="https://youtube.com/shorts/-5Ac-um0i0Q?feature=share" target="_blank" rel="noopener noreferrer" className="bg-sky-400 text-white rounded-md px-4 py-2">デモ動画へ→</a>
                    </div>
                    <h2 className="flex justify-center my-10 text-2xl md:text-4xl mt-20 font-semibold">ポイント</h2>
                    <ul className="list-disc list-inside text-sm md:text-base">
                        <li>現在地から近い最大3つの駅を取得して、その駅全ての路線情報を表示します。</li>
                        <li>現在地からの移動時間を加味して、「走ったら間に合います」、「次の列車を利用しましょう」、「十分間に合います」などのコメントを記載できるようにしました。</li>
                        <li>デザインを現実の駅の電光掲示板のようにしてちょっとこだわりました。</li>
                        <div className="flex justify-center my-10">
                            <img src="/nextrain1.jpg" className="h-80 mx-5"></img>
                            <img src="/nextrain2.jpg" className="h-80 mx-5"></img>
                            <img src="/nextrain3.jpg" className="h-80 mx-5"></img>
                        </div>
                       
                    </ul>
                </div>
            </div>
            <Footer />
        </main>
    );
}
