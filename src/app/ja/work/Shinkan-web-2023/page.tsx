import Image from "next/image";
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";

export default function ShinkanWeb2023() { 

return (
        <main className="flex flex-col items-center px-4 md:px-60">
            <Header page="work-detail"/>
                <div className="mt-20 flex-col min-h-screen">
                    <img src="/shinkanweb2023.png" className="w-full rounded-md" />
                    <div className="flex justify-center my-10">
                        <div className="flex justify-center mx-5"><p className="text-xl font-bold">使用技術</p></div>
                        <div className="flex justify-center mx-5"><img src="/HTML5.svg" className="h-6"></img><p className="text-xl">HTML</p></div>
                        <div className="flex justify-center mx-5"><img src="/css.svg" className="h-6"></img><p className="text-xl">CSS</p></div>
                        <div className="flex justify-center mx-5"><img src="/JavaScript.png" className="h-6"></img><p className="text-xl">JavaScript</p></div>
                    </div>
                    <div className="mt-20 z-10 max-w-5xl items-center font-mono text-sm text-center md:text-left">
                    <h1 className="flex justify-center text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-pink-700 text-transparent bg-clip-text">--しんかんWeb2023--</h1>
                </div>
                {/* <h1 className="mt-10 flex justify-center"></h1> */}
                <div className="flex justify-center my-10">
                    <a href="https://sc.coop.nagoya-u.ac.jp/nusc/sinkan2023/" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white rounded-md px-4 py-2">クリックして見てみる→</a>
                </div>
                <div className="my-20 flex-col place-items-center">
                    <h1 className="flex justify-center my-10 text-2xl md:text-4xl font-semibold">入学したての1年生にとって分かりやすいサイトを</h1>
                    <p className="text-sm md:text-base">　しんかんWebは，毎年名古屋大学生協学生委員会が作成しているサイトで，新入生向けの情報発信やイベント運営を行っています．この度は，このサイト開発に携わらせてもらい、そこでトップページの作成を担当しました．<br></br>
                       　自身も新入生の時期にこのサイトにお世話になったので，その時に感じたことをもとに，サイト作りは初ではありましたが，より見やすいサイト作りを頑張りました．</p>
                    <div className="flex justify-center my-20">
                        <a href="https://sc.coop.nagoya-u.ac.jp/nusc/sinkan2023/" target="_blank" rel="noopener noreferrer" className="bg-pink-600 text-white rounded-md px-4 py-2">クリックして触ってみる→</a>
                    </div>
                    <h2 className="flex justify-center my-10 text-2xl md:text-4xl mt-20 font-semibold">ポイント</h2>
                    <ul className="list-disc list-inside text-sm md:text-base">
                        <li>サイドバー，スライドショー，本文中に各企画リンクへの誘導を散りばめ，情報へユーザーがアクセスしやすいようにしました．</li>
                        <li>ボタンのサイドや文章の間にマスコットを配置し，そのマスコットの視点を利用してユーザーの視線がボタンや見せたい部分に向くようにしました．</li>
                        <li>スマートフォンサイズにも対応し，その際はヘッダーが常に画面上部に来てページ移動がしやすいようにしました．</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </main>
    );
}