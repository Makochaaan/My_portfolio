import Image from "next/image";
import Header from "../../../components/header";
import NextLink from 'next/link'

export default function Yorimichizu() { 

return (
        <main className="flex flex-col items-center px-60">
            <Header page="work"/>
            <div className="mt-20 flex-col min-h-screen">
                <img src="/mynewgear.png" className="w-full rounded-md" />
                <h1 className="mt-10 flex justify-center">My New Gear</h1>
                <div className="flex justify-center my-10">
                    <a href="https://unityroom.com/games/my_new_gear" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white rounded-md px-4 py-2">クリックして触ってみる→</a>
                </div>
                <div className="mt-20 flex-col place-items-center ">
                    <h1 className="flex justify-center my-5">普段の道をより面白く...</h1>
                    <p>　「よりみちず」は，出発地と目的地を最短でつなぐ既存の地図アプリとは違い，あえて「寄り道」を提案します．<br></br>
                       　普段の道も，思いがけない場所の再発見で，より面白いものになるのではないか．そう考えて2022年6月にサークルメンバー4人で開発したものが始まりです．<br></br>
                       　その後，2023年10月に私が1年間眠っていたプログラムを引き受け，UIと機能を拡充し，11月にリリースしました．</p>
                    <h2 className="flex justify-center my-5">使い方</h2>
                    <p>例えば，少し早い学校からの帰り道に．例えば，散歩の目的地に．例えば，旅先での移動途中に．出発地と目的地を入力し、詳細検索から場所のジャンルを選択する．そうして検索を押し，結果をお待ちください．<br></br>
                       　ただ早く移動するだけ，そんな生活に飽きてしまった時にぜひお使いください．</p>
                    <div className="flex justify-center my-10">
                        <a href="https://unityroom.com/games/my_new_gear" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white rounded-md px-4 py-2">クリックして触ってみる→</a>
                    </div>
                    <h2 className="flex justify-center my-5">ポイント</h2>
                    <li>Google Map APIを活用し，マップの表示，店情報の取得，オートコンプリート，詳細指定，経路表示を実装しました．</li>
                    <li>デザインはオレンジを基調として暖色とし，シンプルで見やすい配色としました．</li>
                    <li>出発地の指定に現在地情報を利用できるようにしました．</li>
                    <li></li>

                </div>
            </div>
        </main>
    );
}