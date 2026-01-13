import Header from "../../../../components/header";
import Footer from "../../../../components/footer";

export default function ChariNavi() { 

return (
        <main className="flex flex-col items-center px-4 md:px-60">
            <Header page="work-detail"/>
                <div className="mt-20 flex-col min-h-screen">
                    <img src="/chari-navi.png" alt="チャリ Navi" className="w-full rounded-md" />
                    <div className="flex justify-center my-10">
                        <div className="flex justify-center mx-5"><p className="text-xl font-bold">使用技術</p></div>
                        <div className="flex justify-center mx-5"><p className="text-xl">React Native</p></div>
                        <div className="flex justify-center mx-5"><p className="text-xl">Expo</p></div>
                        <div className="flex justify-center mx-5"><p className="text-xl">Google Maps API</p></div>
                        <div className="flex justify-center mx-5"><p className="text-xl">Open Street Map</p></div>
                    </div>
                    <div className="flex flex-col items-center my-10">
                        <h2 className="text-2xl font-bold mb-6" style={{color: '#3b82f6'}}>受賞履歴</h2>
                        <div className="w-full max-w-4xl overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr style={{backgroundColor: '#e0f2fe'}}>
                                        <th className="border px-6 py-3 text-left text-base md:text-lg font-semibold" style={{borderColor: '#4ade80', color: '#3b82f6'}}>イベント名</th>
                                        <th className="border px-6 py-3 text-left text-base md:text-lg font-semibold" style={{borderColor: '#4ade80', color: '#3b82f6'}}>受賞内容</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="transition-colors" style={{backgroundColor: '#f0fdf4'}}>
                                        <td className="border px-6 py-3 text-sm md:text-base" style={{borderColor: '#bfdbfe'}}>東京都オープンデータハッカソン2025</td>
                                        <td className="border px-6 py-3 text-sm md:text-base font-medium" style={{borderColor: '#bfdbfe'}}>ファイナリスト選出</td>
                                    </tr>
                                    <tr className="transition-colors" style={{backgroundColor: '#f0fdf4'}}>
                                        <td className="border px-6 py-3 text-sm md:text-base" style={{borderColor: '#bfdbfe'}}>東京都オープンデータハッカソン2025</td>
                                        <td className="border px-6 py-3 text-sm md:text-base font-medium" style={{borderColor: '#bfdbfe'}}>学生賞</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="mt-20 z-10 max-w-5xl items-center font-mono text-sm text-center md:text-left">
                        <h1 className="flex justify-center text-4xl md:text-6xl font-bold text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(to right, #4ade80, #3b82f6)'}}>チャリ Navi</h1><br></br>
                    </div>
                    {/* <h1 className="mt-10 flex justify-center"></h1> */}
                    <div className="flex justify-center my-10">
                        <a href="https://odhackathon.metro.tokyo.lg.jp/collection/97/?year=2025" target="_blank" rel="noopener noreferrer" className="text-white rounded-md px-4 py-2 mx-2" style={{backgroundColor: '#4ade80'}}>公式紹介ページへ→</a>
                    </div>
                    <div className="my-20 flex-col place-items-center">
                        <h1 className="flex justify-center my-10 text-2xl md:text-4xl font-semibold">自転車の「車道走行への不安」を、データで可視化する</h1>
                        <div className="text-sm md:text-base">　<strong>チャリ Navi</strong> は、自転車利用者が抱きがちな「車道を走るのが怖い」「どの道が安全かわからない」といった不安を、オープンデータと地図技術で解消するためのナビゲーションアプリです。<br/><br/>
                            日本では、自転車は原則「車道走行」とされている一方で、車道を走ることへの恐怖心、歩道走行に慣れてしまっている実態、安全なルートに関する情報不足といった理由から、歩行者と自転車の接触リスクが課題となっています。<br/><br/>
                            私たちはこの問題を「感覚」ではなく<strong>データから捉え直す</strong>ことを目指し、2025年 都知事杯オープンデータハッカソンにて開発しました。<br/><br/>
                            警視庁の交通量統計データを分析した結果、<strong>1時間あたりの車両流出入数が約1450台を超える交差点では、歩道を通行する自転車の割合が50%を超える</strong>ことが判明しました。<br/>
                            <img src="/chari-navi_analysis.png" alt="チャリ Naviデータ分析" className="rounded-md my-4 max-w-full h-auto" /><br/>
                            この知見をもとに、危険エリアを可視化し、自転車道を優先した「安全ルート」を提案するアプリケーションを実現しました。
                            <div className="flex flex-col justify-center my-4">
                                <img src="/chari-navi_demo1.png" alt="チャリ Naviデモ" className="rounded-md max-w-full h-auto" />
                                <img src="/chari-navi_demo2.png" alt="チャリ Naviデモ" className="rounded-md max-w-full h-auto" />
                            </div>
                        </div>
                        <div className="flex justify-center my-20">
                            <a href="https://odhackathon.metro.tokyo.lg.jp/collection/97/?year=2025" target="_blank" rel="noopener noreferrer" className="text-white rounded-md px-4 py-2 mx-2" style={{backgroundColor: '#4ade80'}}>公式紹介ページへ→</a>
                        </div>
                        <h2 className="flex justify-center my-10 text-2xl md:text-4xl mt-20 font-semibold">アプリの特徴</h2>
                        <div className="text-sm md:text-base space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">🚦 危険エリアの可視化</h3>
                                <p>警視庁の交通量統計データを分析し、1時間あたりの車両流出入数が多い交差点を危険エリアとして地図上に表示。危険度に応じて警告表示の濃淡を変えることで、直感的に理解できます。</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">🚴 自転車走行空間の表示</h3>
                                <p>東京都建設局および OpenStreetMap のオープンデータを活用し、自転車道・自転車通行可能な歩道をマップ上に明示。「この道なら安心できる」という判断材料を提供します。</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">🗺️ 2種類のルート案内</h3>
                                <p>最短時間を優先する「標準ルート」と、危険エリアを避け自転車道を優先する「安全ルート」を提供。利用者の目的や心理状態に合わせて選択できます。</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">📊 走行履歴・運動記録の保存</h3>
                                <p>走行距離・時間・平均速度・消費カロリーを記録。健康管理の視点を取り入れることで、日常的に使いたくなる設計を意識しました。</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">📈 データ分析による科学的根拠</h3>
                                <p>Pythonを用いて交通量統計データを分析し、車両流出入数1450台/時間を危険交差点の基準値として定義。「なんとなく怖い道」ではなく「データに基づいて避けるべき道」を提示します。</p>
                            </div>
                        </div>
                    </div>
            </div>
            <Footer />
        </main>
    );
}
