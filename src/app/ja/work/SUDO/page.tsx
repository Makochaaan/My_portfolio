import Header from "../../../../components/header";
import Footer from "../../../../components/footer";

export default function Sudo() { 

return (
        <main className="flex flex-col items-center px-4 md:px-60">
            <Header page="work-detail"/>
                <div className="mt-20 flex-col min-h-screen">
                    <img src="/Sudo.png" alt="SUDO - 数学動画ジェネレーター" className="w-full rounded-md" />
                    <div className="flex justify-center my-10">
                        <div className="flex justify-center mx-5"><p className="text-xl font-bold">使用技術</p></div>
                        <div className="flex justify-center mx-5"><p className="text-xl">Next.js</p></div>
                        <div className="flex justify-center mx-5"><p className="text-xl">FastAPI</p></div>
                        <div className="flex justify-center mx-5"><p className="text-xl">manim</p></div>
                        <div className="flex justify-center mx-5"><p className="text-xl">LangGraph</p></div>
                        <div className="flex justify-center mx-5"><p className="text-xl">Gemini API</p></div>
                    </div>
                    <div className="flex flex-col items-center my-10">
                        <h2 className="text-2xl font-bold mb-6" style={{color: '#344FA1'}}>受賞履歴</h2>
                        <div className="w-full max-w-4xl overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr style={{backgroundColor: '#e8f0f7'}}>
                                        <th className="border px-6 py-3 text-left text-base md:text-lg font-semibold" style={{borderColor: '#7DB8A7', color: '#344FA1'}}>イベント名</th>
                                        <th className="border px-6 py-3 text-left text-base md:text-lg font-semibold" style={{borderColor: '#7DB8A7', color: '#344FA1'}}>受賞内容</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="transition-colors" style={{backgroundColor: '#f5f9fc'}}>
                                        <td className="border px-6 py-3 text-sm md:text-base" style={{borderColor: '#d1e8df'}}>JPHACKS2025 HackDay</td>
                                        <td className="border px-6 py-3 text-sm md:text-base font-medium" style={{borderColor: '#d1e8df'}}>パソナ賞</td>
                                    </tr>
                                    <tr className="transition-colors" style={{backgroundColor: '#f5f9fc'}}>
                                        <td className="border px-6 py-3 text-sm md:text-base" style={{borderColor: '#d1e8df'}}>JPHACKS2025 AwardDay</td>
                                        <td className="border px-6 py-3 text-sm md:text-base font-medium" style={{borderColor: '#d1e8df'}}>イノベーター認定</td>
                                    </tr>
                                    <tr className="transition-colors" style={{backgroundColor: '#f5f9fc'}}>
                                        <td className="border px-6 py-3 text-sm md:text-base" style={{borderColor: '#d1e8df'}}>JPHACKS2025 AwardDay</td>
                                        <td className="border px-6 py-3 text-sm md:text-base font-medium" style={{borderColor: '#d1e8df'}}>審査員特別賞（準優勝）</td>
                                    </tr>
                                    <tr className="transition-colors" style={{backgroundColor: '#f5f9fc'}}>
                                        <td className="border px-6 py-3 text-sm md:text-base" style={{borderColor: '#d1e8df'}}>JPHACKS2025 AwardDay</td>
                                        <td className="border px-6 py-3 text-sm md:text-base font-medium" style={{borderColor: '#d1e8df'}}>Cyber Agent賞</td>
                                    </tr>
                                    <tr className="transition-colors" style={{backgroundColor: '#f5f9fc'}}>
                                        <td className="border px-6 py-3 text-sm md:text-base" style={{borderColor: '#d1e8df'}}>JPHACKS2025 AwardDay</td>
                                        <td className="border px-6 py-3 text-sm md:text-base font-medium" style={{borderColor: '#d1e8df'}}>How Television賞</td>
                                    </tr>
                                    <tr className="transition-colors" style={{backgroundColor: '#f5f9fc'}}>
                                        <td className="border px-6 py-3 text-sm md:text-base" style={{borderColor: '#d1e8df'}}>技育博2025</td>
                                        <td className="border px-6 py-3 text-sm md:text-base font-medium" style={{borderColor: '#d1e8df'}}>Carta Holdings賞</td>
                                    </tr>
                                    <tr className="transition-colors" style={{backgroundColor: '#f5f9fc'}}>
                                        <td className="border px-6 py-3 text-sm md:text-base" style={{borderColor: '#d1e8df'}}>技育博2025</td>
                                        <td className="border px-6 py-3 text-sm md:text-base font-medium" style={{borderColor: '#d1e8df'}}>WingArc 1st賞</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="mt-20 z-10 max-w-5xl items-center font-mono text-sm text-center md:text-left">
                    <h1 className="flex justify-center text-4xl md:text-6xl font-bold text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(to right, #7DB8A7, #344FA1)'}}>-数学動画ジェネレーター SUDO-</h1><br></br>
                </div>
                {/* <h1 className="mt-10 flex justify-center"></h1> */}
                <div className="flex justify-center my-10">
                    <a href="https://youtu.be/iyhTQFKciaY" target="_blank" rel="noopener noreferrer" className="text-white rounded-md px-4 py-2 mx-2" style={{backgroundColor: '#7DB8A7'}}>デモ動画へ→</a>
                    <a href="https://jphacks.com/information/result-report2025/" target="_blank" rel="noopener noreferrer" className="text-white rounded-md px-4 py-2 mx-2" style={{backgroundColor: '#344FA1'}}>JPHACKS2025公式ページへ→</a>
                </div>
                <div className="my-20 flex-col place-items-center">
                    <h1 className="flex justify-center my-10 text-2xl md:text-4xl font-semibold">生徒に数式の&quot;動き&quot;を伝える</h1>
                    <div className="text-sm md:text-base">　<strong>SUDO</strong>は、数学講師が「自分らしい解説」をするための<strong>数学動画ジェネレーター</strong>です。<br/><br/>
                        塾の数学講師をしている中で、数式の意味を教えたいのに生徒が数式の意味を丸暗記してしまい、式の意味を理解できずに苦手になってしまう生徒をたくさん見てきました。<br/><br/>
                        <div className="flex flex-col items-center">
                            <img src="/sudo_kadai1.png" alt="数式の意味を理解していない生徒" width={600} height={300} className="my-4 rounded-md"/>
                            <img src="/sudo_kadai2.png" alt="複雑な紙面" width={600} height={300} className="my-4 rounded-md"/>
                        </div><br/>
                        <br/>
                        そこで<strong>学校や塾で「自分らしい解説」を動画で手軽に届けたい数学講師</strong>が簡単に副教材としてのアニメーションを作れるアプリケーションを作りました。<br/><br/>
                        手元の数式や板書イメージをテキストで入力すれば、<strong>AI×manimが解説意図に沿った理想の数学動画を即自動生成</strong>します。
                        先生自身の&quot;教えたい順序&quot;&quot;強調したいポイント&quot;&quot;生徒のつまずきや質問&quot;を、自然な日本語で柔軟に動画へ反映できます。
                        <div className="flex justify-center my-4">
                            <img src="/sudo_video.gif" alt="SUDO動画生成デモ" className="rounded-md max-w-full h-auto" />
                        </div>
                    </div>
                    <div className="flex justify-center my-20">
                        <a href="https://youtu.be/iyhTQFKciaY" target="_blank" rel="noopener noreferrer" className="text-white rounded-md px-4 py-2 mx-2" style={{backgroundColor: '#7DB8A7'}}>デモ動画へ→</a>
                        <a href="https://www.youtube.com/watch?v=lA9EluZugD8" target="_blank" rel="noopener noreferrer" className="text-white rounded-md px-4 py-2 mx-2" style={{backgroundColor: '#344FA1'}}>JPHACKS2025公式ページへ→</a>
                    </div>
                    <h2 className="flex justify-center my-10 text-2xl md:text-4xl mt-20 font-semibold">独自技術のポイント</h2>
                    <div className="text-sm md:text-base space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">🤖 Manim動画生成AIエージェント</h3>
                            <p>LangGraphベースのAIエージェントにより動画を生成。コード生成やエラー処理、実行を頂点に持ち、コードやエラー内容を状態として保持することで、manimコードの生成から実行の一連の流れを管理しやすくしました。</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">🔍 検索機能</h3>
                            <p>既存動画の説明文を埋め込みベクトル化してベクトルDBに保存し、ユーザー入力に意味的に近い動画を高速に検索。あるユーザーが編集を重ねて作った分かりやすい動画を他のユーザーも再利用できるようにしました。</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">⚡ コードの差分更新</h3>
                            <p>編集時やエラー処理時に Unified Diff 形式の差分更新を適用し、出力トークン削減による低コスト化と高速化を実現しました。</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">🛠️ Manim専用linter</h3>
                            <p>Manim 0.19.0で使用できないクラス／メソッド／引数の有無を静的解析で確認する自作のlinterを開発しました。</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">🔒 セキュリティ対策</h3>
                            <p>プロンプトインジェクション対策として、Manim コード実行前に危険なコードでないかを静的解析により確認。HTTPS 化・Docker 利用・GitHub コードレビューの厳格化により、安全なコード実行環境を整備しました。</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
