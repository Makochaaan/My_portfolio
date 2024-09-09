import Header from "../../../../components/header";
import Footer from "../../../../components/footer";

export default function ShinkanWeb2024() { 

return (
        <main className="flex flex-col items-center px-60">
            <Header page="work" lang="en"/>
                <div className="mt-20 flex-col min-h-screen">
                    <img src="/yorimichizu.png" className="w-full rounded-md" />
                    <div className="mt-20 z-10 max-w-5xl items-center font-mono text-sm ">
                    <h1 className="flex justify-center text-6xl font-bold bg-gradient-to-r from-pink-500 to-pink-700 text-transparent bg-clip-text">--しんかんWeb2024--</h1><br></br>
                </div>
                {/* <h1 className="mt-10 flex justify-center"></h1> */}
                <div className="flex justify-center my-10">
                    <a href="https://sc.coop.nagoya-u.ac.jp/nusc/sinkan2024/" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white rounded-md px-4 py-2">クリックして見てみる→</a>
                </div>
                <div className="my-20 flex-col place-items-center ">
                    <h1 className="flex justify-center my-10 text-4xl font-semibold">再び分かりやすいサイトを目指して</h1>
                    <p>　2023年版しんかんWeb作成を学生委員会様に評価してもらい，再び開発をさせて頂ける運びとなりました．<br></br>
                    　今回は，トップページの作成に加え，他サイトを作成するメンバーのマネジメント，アドバイザー及び分担前の全ページ共通規格の準備を担当しました．沢山の責任が伴う作業は初めてでしたが，2023年版の反省を活かし，より見やすく，使いやすいサイトを目指しました．
                       </p>
                    <div className="flex justify-center my-20">
                        <a href="https://sc.coop.nagoya-u.ac.jp/nusc/sinkan2024/" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white rounded-md px-4 py-2">クリックして触ってみる→</a>
                    </div>
                    <h2 className="flex justify-center my-10 text-4xl mt-20 font-semibold">ポイント</h2>
                    <li>色彩を暗桃色に統一し，そしてアクセントとして補色となる色を部分的に用いるなどして，色彩の見やすさを追求しました．</li>
                    <li>スライドショー</li>
                    <li>ヘッダーの項目にハンバーガーメニューを付け加え，より詳細なページに各ページから飛べるようにしました．</li>
                    <li>前回，余白が多く発生してしまいあまり綺麗でなく見づらかったので，各項目の大きさを大きくした上で余白をテーマ色のピンクに変更し，文字の見やすさ，ページレイアウトの視線の動かしやすさを向上させました．</li>
                    <li>他メンバーの作成したコードのレビューを行い，より見やすいコード及びデザインを追求できるようにアシストしました．</li>
                </div>
            </div>
            <Footer />
        </main>
    );
}