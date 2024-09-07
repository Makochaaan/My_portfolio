import Image from "next/image";
import Header from "../../components/header";
import NextLink from 'next/link'
import WorkTab from "../../components/workTab";
import Footer from "../../components/footer";

export default function Work() { 

return (
        <main className="flex flex-col items-center px-60">
            <Header page="skill"/>
            <div className="mt-20 flex-col min-h-screen">
                <h1 className="text-xl font-bold flex justify-center text-center text-blue-800">プログラミング言語</h1>
                <div className="text-center relative 
                               before:absolute before:left-1/2 before:bt-0 before:width-0 before:border-b-2 before:border-blue-800 before:transform before:-translate-x-1/2 before:animate-line-from-center"
                ></div>
                <div className="grid text-center lg:mb-10 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left lg:gap-10 mt-5">
  
                    <div className="bg-gray-300 flex-col p-4 rounded-lg">
                        <div className="flex justify-center mt-5 h-1/2">
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
                    <div className="bg-gray-300 flex-col p-4 rounded-lg">
                        <div className="flex justify-center mt-5 h-1/2">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert scale-75 rounded-md "
                            src="/typescript.svg"
                            alt="typescript logo"
                            width={150}
                            height={150}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-xl">TypeScript(JavaScript)</h1>
                        <p className="font-medium text-center my-5">Webフロント開発によく使っています。Javascriptと違い型付けができ、役割を明示化できるのが好きなところです。</p>
                    </div>
                    <div className="bg-gray-300 flex-col p-4 rounded-lg">
                        <div className="flex justify-center mt-5 h-1/2">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert scale-75  "
                            src="/java.svg"
                            alt="java logo"
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
  
                    <div className="bg-gray-300 flex-col p-4 rounded-lg">
                        <div className="flex justify-center mt-5 h-1/2">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert scale-75 rounded-md "
                            src="/flask.svg"
                            alt="flask logo"
                            width={150}
                            height={150}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-xl">Flask</h1>
                        <p className="font-medium text-center my-5">Pythonでバックエンド処理をする時に一番使うAPIです。Pythonを介することで、様々なAPIとの連携を取りやすくなり、Pythonの簡潔さを活かし処理を記載できるのが利点だと感じています。</p>
                    </div>
                    <div className="bg-gray-300 flex-col p-4 rounded-lg">
                        <div className="flex justify-center mt-5 h-1/2">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert scale-75 rounded-md "
                            src="/react.svg"
                            alt="react logo"
                            width={150}
                            height={150}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-xl">React</h1>
                        <p className="font-medium text-center my-5">Webフロント開発によく使っています。Javascriptと違い型付けができ、役割を明示化できるのが好きなところです。</p>
                    </div>
                    <div className="bg-gray-300 flex-col p-4 rounded-lg">
                        <div className="flex justify-center mt-5 h-1/2">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert scale-75  "
                            src="/flutter.svg"
                            alt="flutter logo"
                            width={150}
                            height={150}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-xl">Flutter</h1>
                        <p className="font-medium text-center my-5">僕が一番最初に勉強した言語です。しっかりとした静的型付けであり、Java仮想マシン上で環境差なく開発できる点がとても気に入っています。</p>
                    </div>
                    <div className="bg-gray-300 flex-col p-4 rounded-lg">
                        <div className="flex justify-center mt-5 h-1/2">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert scale-75"
                            src="/unity.svg"
                            alt="unity logo"
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

            <div className="relative mt-20 z-10 flex place-items-center ">
                    {/* <p>↓</p> */}
                    <div className="absolute left-1/2 bottom-1
                    after:absolute after:top-0 after:width-[3px] after:height-[60px] bg-blue-400 animate-line-flow opacity-0"></div>
            </div>

            <div className="mt-80 flex-col min-h-screen">
                <h1 className="text-xl font-bold flex justify-center text-center text-blue-800">おまけ：自然言語</h1>
                <div className="text-center relative 
                               before:absolute before:left-1/2 before:bt-0 before:width-0 before:border-b-2 before:border-blue-800 before:transform before:-translate-x-1/2 before:animate-line-from-center"
                ></div>
                <div className="grid text-center lg:mb-10 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left lg:gap-10 mt-5">
  
                    <div className="bg-gray-300 flex-col p-4 rounded-lg">
                        <div className="flex justify-center mt-5 h-1/2">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert scale-75 rounded-md "
                            src="/japan.png"
                            alt="japan"
                            width={320}
                            height={160}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-xl">日本語</h1>
                        <h2 className="font-semibold text-center">技能レベル：ネイティブ</h2>
                        <p className="font-medium text-center my-5">母語です。日本語での言葉の表現は得意で、よくわかりやすい、深くまで表現できると他人から評価してもらっています。</p>
                    </div>
                    <div className="bg-gray-300 flex-col p-4 rounded-lg">
                        <div className="flex justify-center mt-5 h-1/2">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert scale-75 rounded-md "
                            src="/english.jpg"
                            alt="english"
                            width={320}
                            height={160}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-xl">英語</h1>
                        <h2 className="font-semibold text-center">技能レベル：ビジネス・アカデミック会話レベル</h2>
                        <p className="font-medium text-center my-5">海外での日常会話や、アカデミックな場でのコミュニケーションができます。留学生の人によく上手だと褒めてもらっています。</p>
                    </div>
                    <div className="bg-gray-300 flex-col p-4 rounded-lg">
                        <div className="flex justify-center mt-5 h-1/2">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert scale-75  "
                            src="/brazil.jpg"
                            alt="brazil"
                            width={320}
                            height={160}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-xl">ポルトガル語</h1>
                        <h2 className="font-semibold text-center">技能レベル：日常会話レベル</h2>
                        <p className="font-medium text-center my-5">父方の言語で、高校生の時から習得を始めました。親戚との会話や、地域のブラジル人コミュニティでの交流で使っています。</p>
                    </div>
                    <div className="bg-gray-300 flex-col p-4 rounded-lg">
                        <div className="flex justify-center mt-5 h-1/2">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert scale-75"
                            src="/italia.png"
                            alt="italia"
                            width={320}
                            height={160}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-xl">イタリア語</h1>
                        <h2 className="font-semibold text-center">技能レベル：読解レベル</h2>
                        <p className="font-medium text-center my-5">大学2年生のころに学びました。イタリア語アーティストが好きなので、そのアーティストのカバーのために始めましたが、今は言語の響きそのものが気に入って続けています。</p>
                    </div>
                    <div className="bg-gray-300 flex-col p-4 rounded-lg">
                        <div className="flex justify-center mt-5 h-1/2">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert scale-75"
                            src="/korea.jpg"
                            alt="korea"
                            width={320}
                            height={160}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-xl">韓国語</h1>
                        <h2 className="font-semibold text-center">技能レベル：読解レベル</h2>
                        <p className="font-medium text-center my-5">大学2年生の秋学期に学びました。音の響きとハングルの形状が好きで、今でもK-popの歌詞を通じて少しづつ勉強しています。</p>
                    </div>
                    
                </div>
            </div>
            
            <Footer />
        </main>
    );
}
