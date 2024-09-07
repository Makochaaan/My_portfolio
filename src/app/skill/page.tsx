import Image from "next/image";
import Header from "../../components/header";
import NextLink from 'next/link'
import WorkTab from "../../components/workTab";
import Footer from "../../components/footer";

export default function Work() { 

return (
        <div>
            <div className="mt-20 flex-col min-h-screen">
                <h1 className="text-xl font-bold flex justify-center text-center text-blue-800">プログラミング言語</h1>
                <div className="text-center relative 
                               before:absolute before:left-1/2 before:bt-0 before:width-0 before:border-b-2 before:border-blue-800 before:transform before:-translate-x-1/2 before:animate-line-from-center"
                ></div>
                <div className="grid text-center lg:mb-10 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left lg:gap-10 mt-5">
  
                    <div className="bg-gray-300 flex-col">
                        <div className="flex justify-center mt-5">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert scale-75 rounded-md "
                            src="/python.png"
                            alt="python"
                            width={150}
                            height={150}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-xl">Python</h1>
                        <p className="font-medium text-center my-5">Web開発のバックエンドや、機械学習などに利用しています。最もよく使っている言語です。</p>
                    </div>
                    <div className="bg-gray-300 flex-col">
                        <div className="flex justify-center mt-5">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert scale-75 rounded-md "
                            src="/python.png"
                            alt="python"
                            width={150}
                            height={150}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-xl">TypeScript(JavaScript)</h1>
                        <p className="font-medium text-center my-5">Webフロント開発によく使っています。Javascriptと違い型付けができ、役割を明示化できるのが好きなところです。</p>
                    </div>
                    <div className="bg-gray-300 flex-col rounded-lg">
                        <div className="flex justify-center mt-5">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert scale-75  "
                            src="/python.png"
                            alt="python"
                            width={150}
                            height={150}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-xl">Java</h1>
                        <p className="font-medium text-center my-5">僕が一番最初に勉強した言語です。しっかりとした静的型付けであり、Java仮想マシン上で環境差なく開発できる点がとても気に入っています。</p>
                    </div>
                </div>
            </div>

            <div className="mt-20 flex-col min-h-screen">
                <h1 className="text-xl font-bold flex justify-center text-center text-blue-800">API, フレームワーク</h1>
                <div className="text-center relative 
                               before:absolute before:left-1/2 before:bt-0 before:width-0 before:border-b-2 before:border-blue-800 before:transform before:-translate-x-1/2 before:animate-line-from-center"
                ></div>
                <div className="grid text-center lg:mb-10 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left lg:gap-10 mt-5">
  
                    <div className="bg-gray-300 flex-col">
                        <div className="flex justify-center mt-5">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert scale-75 rounded-md "
                            src="/python.png"
                            alt="python"
                            width={150}
                            height={150}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-xl">Flask</h1>
                        <p className="font-medium text-center my-5">Pythonでバックエンド処理をする時に一番使うAPIです。Pythonを介することで、様々なAPIとの連携を取りやすくなり、Pythonの簡潔さを活かし処理を</p>
                    </div>
                    <div className="bg-gray-300 flex-col">
                        <div className="flex justify-center mt-5">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert scale-75 rounded-md "
                            src="/python.png"
                            alt="python"
                            width={150}
                            height={150}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-xl">React</h1>
                        <p className="font-medium text-center my-5">Webフロント開発によく使っています。Javascriptと違い型付けができ、役割を明示化できるのが好きなところです。</p>
                    </div>
                    <div className="bg-gray-300 flex-col rounded-lg">
                        <div className="flex justify-center mt-5">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert scale-75  "
                            src="/python.png"
                            alt="python"
                            width={150}
                            height={150}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-xl">Flutter</h1>
                        <p className="font-medium text-center my-5">僕が一番最初に勉強した言語です。しっかりとした静的型付けであり、Java仮想マシン上で環境差なく開発できる点がとても気に入っています。</p>
                    </div>
                    <div className="bg-gray-300 flex-col rounded-lg">
                        <div className="flex justify-center mt-5">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert scale-75  "
                            src="/python.png"
                            alt="python"
                            width={150}
                            height={150}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-xl">Unity</h1>
                        <p className="font-medium text-center my-5">僕が一番最初に勉強した言語です。しっかりとした静的型付けであり、Java仮想マシン上で環境差なく開発できる点がとても気に入っています。</p>
                    </div>
                </div>
            </div>
            <div className="mt-20 flex-col min-h-screen">
                <h1 className="text-xl font-bold flex justify-center text-center text-blue-800">音楽作品</h1>
                <div className="text-center relative 
                               before:absolute before:left-1/2 before:bt-0 before:width-0 before:border-b-2 before:border-blue-800 before:transform before:-translate-x-1/2 before:animate-line-from-center"
                ></div>
                <h2 className="mt-2 mb-10 font-bold flex justify-center text-center text-blue-700">自分で作曲・アレンジをした音楽作品です。クリックでライブ映像(Youtube)に飛べます。</h2>
                <div className="grid text-center lg:mb-10 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left lg:gap-10">

                    {/* <WorkTab route="https://youtu.be/HQ415pI4BWg" image="/cory.png" title="Cory Wong(Cover)" year="2024/03" target="1"/> */}
                    <WorkTab route="https://youtu.be/9XzOiYEOj20" image="/salvia.png" title="SALVIA BLUE SENSATION(Original)" year="2023/12" target="1"/>
                    <WorkTab route="https://youtu.be/mfP6LYeyysI" image="/mario.png" title="MARIO KART Wii(Arrange)" year="2022/04" target="1"/>
                </div>
            </div>
        </div>
    );
}
