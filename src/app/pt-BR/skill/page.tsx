import Image from "next/image";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

export default function Work() { 

return (
        <main className="flex flex-col items-center px-60">
            <Header page="skill" lang="pt-BR"/>
            <div className="mt-20 flex-col min-h-screen">
                <h1 className="text-xl font-bold flex justify-center text-center text-blue-800">MY SKILL: Programming</h1>
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
                        <p className="font-medium text-center my-5">Most used language: for machine learning and backend of web application. I can write any processing by myself watching documents.</p>
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
                        <p className="font-medium text-center my-5">I use for frontend of web application. I can write any processing by myself watching documents.</p>
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
                        <p className="font-medium text-center my-5">I sometimes use. It's one of the my favorite languages. I can write almost processing watching documents, but sometimes get in trouble.</p>
                    </div>
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
                        <p className="font-medium text-center my-5">When I write backend using Python, I mostly use this Framework. I can write any processing watching documents.</p>
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
                        <p className="font-medium text-center my-5">When I make route processings, I use it rather than Flask. However sometimes I still face difficulties.</p>
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
                        <p className="font-medium text-center my-5">I made smartphone application using this framework. That's my favorite. I can write almost processing watching documents, but sometimes get in trouble.</p>
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
                        <p className="font-medium text-center my-5">I make 3D games using that. I also can write shader graph in Unity. I can write any processing watching documents.</p>
                    </div>
                </div>
            </div>

            <div className="relative mt-20 z-10 flex place-items-center ">
                    {/* <p>↓</p> */}
                    <div className="absolute left-1/2 bottom-1
                    after:absolute after:top-0 after:width-[3px] after:height-[60px] bg-blue-400 animate-line-flow opacity-0"></div>
            </div>

            <div className="mt-80 flex-col min-h-screen mb-20">
                <h1 className="text-xl font-bold flex justify-center text-center text-blue-800">MY SKILL: Language</h1>
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
                        <h1 className="font-bold text-center text-xl">Japanese</h1>
                        <h2 className="font-semibold text-center">Level: Native</h2>
                        <p className="font-medium text-center my-5">Mother tongue.</p>
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
                        <h1 className="font-bold text-center text-xl">English</h1>
                        <h2 className="font-semibold text-center">Level: C1-Advanced</h2>
                        <p className="font-medium text-center my-5">I can tell my opinion steadly whatever topics is it.</p>
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
                        <h1 className="font-bold text-center text-xl">Portuguese</h1>
                        <h2 className="font-semibold text-center">Level: B1-Intermediate</h2>
                        <p className="font-medium text-center my-5">I can talk in daily conversations. It's my father's mother tongue.</p>
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
                        <h1 className="font-bold text-center text-xl">Italian</h1>
                        <h2 className="font-semibold text-center">Level: A2-Pre Intermediate</h2>
                        <p className="font-medium text-center my-5">I can read and talk a little. I love Maneskin and that's why I learn.</p>
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
                        <h1 className="font-bold text-center text-xl">Korean</h1>
                        <h2 className="font-semibold text-center">Level: A1-Beginner</h2>
                        <p className="font-medium text-center my-5">I can read a little. continue studying now.</p>
                    </div>
                    <div className="bg-gray-300 flex-col p-4 rounded-lg">
                        <div className="flex justify-center mt-5 h-1/2">
                        </div>
                        <h1 className="font-bold text-center text-xl">Continue studying...</h1>
                    </div>
                    
                </div>
            </div>
            
            <Footer />
        </main>
    );
}
