import Image from "next/image";
import Header from "../../../../components/header";
import NextLink from 'next/link'
import Footer from "../../../../components/footer";

export default function MyNewGear() { 

return (
        <main className="flex flex-col items-center px-60">
            <Header page="work-detail"/>
                <div className="mt-20 flex-col min-h-screen">
                    <img src="/mynewgear.png" className="w-full rounded-md" />
                    <div className="mt-20 z-10 max-w-5xl items-center font-mono text-sm ">
                    <h1 className="flex justify-center text-6xl font-bold bg-gradient-to-r from-blue-700 to-blue-950 text-transparent bg-clip-text">--My New GEAR--</h1><br></br>
                </div>
                {/* <h1 className="mt-10 flex justify-center"></h1> */}
                <div className="flex justify-center my-10">
                    <a href="https://unityroom.com/games/my_new_gear" target="_blank" rel="noopener noreferrer" className="bg-blue-800 text-white rounded-md px-4 py-2">クリックして触ってみる→</a>
                </div>
                <div className="my-20 flex-col place-items-center ">
                    <h1 className="flex justify-center my-10 text-4xl font-semibold">ちょっと違った3Dシューティングゲーム</h1>
                    <p>　3Dゲームを作ってみたい、そんな思いを持ってた中、当時4年生の先輩がUnityチュートリアルとして3Dシューティングゲーム作成を立ち上げてくれました．<br></br>
                       　そこから，Unity制作未経験のメンバー6人とともに，その先輩の元で教えてもらいながら一歩づつ作成し，2023年4月にリリースしました．<br></br>
                       　このゲームでは，落下している装備を獲得して強くなりながら射撃を行っていくゲームとなっており、従来のFPSゲームと違って装備した銃を複数同時に射撃できるところがポイントです．
                       自分は，自機キャラクターの操作周りと，当時未経験だったBlenderを使用した武器等3Dモデルの作成に携わりました．この作成を通じて，Unityでのプロダクト作成のイロハを学ぶことが出来ました．</p>
                   <div className="flex justify-center my-20">
                        <a href="https://unityroom.com/games/my_new_gear" target="_blank" rel="noopener noreferrer" className="bg-blue-800 text-white rounded-md px-4 py-2">クリックして触ってみる→</a>
                    </div>
                    <h2 className="flex justify-center my-10 text-4xl mt-20 font-semibold">ポイント</h2>
                    <li>視点の移動とキャラクターの移動方向を関連させ，モンスターハンターさんのような操作感を実現しました．</li>
                    <li>立体感を持たせた方形3D武器モデル，射撃ターゲットを作成しました．</li>
                    <li>射撃武器を４つまで装備でき，装備するごとに射線が増えるようにする一方，武器を重ねて強化することも可能にして，増やすか強化するかを選択できるゲーム性を持たせました．</li>
                </div>
            </div>
            <Footer />
        </main>
    );
}