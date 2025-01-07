import Image from "next/image";
import Header from "../../../components/header";
import Footer from "../../../components/footer";

export default function Work() { 

return (
        <main className="flex flex-col items-center px-4 md:px-60">
            <Header page="skill" lang="en"/>
            <div className="mt-20 flex-col min-h-screen">
                <h1 className="text-xl font-bold flex justify-center text-center text-blue-800">Programming Languages</h1>
                <div className="text-center relative 
                               before:absolute before:left-1/2 before:bt-0 before:width-0 before:border-b-2 before:border-blue-800 before:transform before:-translate-x-1/2 before:animate-line-from-center"
                ></div>
                <div className="grid text-center lg:mb-10 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left lg:gap-10 mt-5">
  
                    <div className="bg-gray-300 flex-col p-4 rounded-lg my-4 md:my-0">
                        <div className="flex justify-center mt-5 h-1/2">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]  scale-75 rounded-md "
                            src="/python.png"
                            alt="python"
                            width={150}
                            height={150}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-lg md:text-xl">Python</h1>
                        <p className="font-medium text-center my-5 text-sm md:text-base">I use it for backend web development and machine learning. It is the language I use the most. I can write code independently while referring to the documentation.</p>
                    </div>
                    <div className="bg-gray-300 flex-col p-4 rounded-lg my-4 md:my-0">
                        <div className="flex justify-center mt-5 h-1/2">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]  scale-75 rounded-md "
                            src="/typescript.svg"
                            alt="typescript logo"
                            width={150}
                            height={150}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-lg md:text-xl">TypeScript(JavaScript)</h1>
                        <p className="font-medium text-center my-5 text-sm md:text-base">I often use it for web frontend development. Unlike JavaScript, it allows for type annotations, which I like because it clarifies roles. I can write code independently while referring to the documentation.</p>
                    </div>
                    <div className="bg-gray-300 flex-col p-4 rounded-lg my-4 md:my-0">
                        <div className="flex justify-center mt-5 h-1/2">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]  scale-75  "
                            src="/java.svg"
                            alt="java logo"
                            width={150}
                            height={150}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-lg md:text-xl">Java</h1>
                        <p className="font-medium text-center my-5 text-sm md:text-base">It is the first language I learned. I like its strong static typing and the ability to develop without environmental differences on the Java Virtual Machine. I can write a certain amount of code independently while referring to the documentation.</p>
                    </div>
                </div>
            </div>

            <div className="mt-20 flex-col min-h-screen">
                <h1 className="text-xl font-bold flex justify-center text-center text-blue-800">APIs, Frameworks</h1>
                <div className="text-center relative 
                               before:absolute before:left-1/2 before:bt-0 before:width-0 before:border-b-2 before:border-blue-800 before:transform before:-translate-x-1/2 before:animate-line-from-center"
                ></div>
                <div className="grid text-center lg:mb-10 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left lg:gap-10 mt-5">
  
                    <div className="bg-gray-300 flex-col p-4 rounded-lg my-4 md:my-0">
                        <div className="flex justify-center mt-5 h-1/2">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]  scale-75 rounded-md "
                            src="/flask.svg"
                            alt="flask logo"
                            width={150}
                            height={150}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-lg md:text-xl">Flask</h1>
                        <p className="font-medium text-center my-5 text-sm md:text-base">It is the API I use most often for backend processing in Python. By using Python, it becomes easier to collaborate with various APIs, and I feel that the simplicity of Python can be utilized to write processes. I can write a certain amount of code independently while referring to the documentation.</p>
                    </div>
                    <div className="bg-gray-300 flex-col p-4 rounded-lg my-4 md:my-0">
                        <div className="flex justify-center mt-5 h-1/2">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]  scale-75 rounded-md "
                            src="/react.svg"
                            alt="react logo"
                            width={150}
                            height={150}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-lg md:text-xl">React</h1>
                        <p className="font-medium text-center my-5 text-sm md:text-base">I use React for router processing with JavaScript. It has a rich library that makes it easy to write, and I adopt it when focusing on dynamic site generation rather than Flask. I can write a certain amount of code independently while referring to the documentation, but I still encounter obstacles at times.</p>
                    </div>
                    <div className="bg-gray-300 flex-col p-4 rounded-lg my-4 md:my-0">
                        <div className="flex justify-center mt-5 h-1/2">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]  scale-75  "
                            src="/flutter.svg"
                            alt="flutter logo"
                            width={150}
                            height={150}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-lg md:text-xl">Flutter</h1>
                        <p className="font-medium text-center my-5 text-sm md:text-base">I use it when creating mobile apps. I like its simple UI and the fact that it can be relatively easily shaped. I can write a certain amount of code independently while referring to the documentation.</p>
                    </div>
                    <div className="bg-gray-300 flex-col p-4 rounded-lg my-4 md:my-0">
                        <div className="flex justify-center mt-5 h-1/2">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]  scale-75"
                            src="/unity.svg"
                            alt="unity logo"
                            width={150}
                            height={150}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-lg md:text-xl">Unity</h1>
                        <p className="font-medium text-center my-5 text-sm md:text-base">It is the first language I learned. I like its strong static typing and the ability to develop without environmental differences on the Java Virtual Machine. I can write code independently while referring to the documentation.</p>
                    </div>
                </div>
            </div>

            <div className="relative mt-20 z-10 flex place-items-center ">
                    {/* <p>↓</p> */}
                    <div className="absolute left-1/2 bottom-1
                    after:absolute after:top-0 after:width-[3px] after:height-[60px] bg-blue-400 animate-line-flow opacity-0"></div>
            </div>

            <div className="mt-80 flex-col min-h-screen mb-20">
                <h1 className="text-xl font-bold flex justify-center text-center text-blue-800">Bonus: Natural Languages</h1>
                <div className="text-center relative 
                               before:absolute before:left-1/2 before:bt-0 before:width-0 before:border-b-2 before:border-blue-800 before:transform before:-translate-x-1/2 before:animate-line-from-center"
                ></div>
                <div className="grid text-center lg:mb-10 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left lg:gap-10 mt-5">
  
                    <div className="bg-gray-300 flex-col p-4 rounded-lg my-4 md:my-0">
                        <div className="flex justify-center mt-5 h-1/2">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]  scale-75 rounded-md "
                            src="/japan.png"
                            alt="japan"
                            width={320}
                            height={160}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-lg md:text-xl">Japanese</h1>
                        <h2 className="font-semibold text-center text-sm md:text-base">Skill Level: Native</h2>
                        <p className="font-medium text-center my-5 text-sm md:text-base">It is my mother tongue. I am good at expressing myself in Japanese, and I am often praised by others for being clear and expressive.</p>
                    </div>
                    <div className="bg-gray-300 flex-col p-4 rounded-lg my-4 md:my-0">
                        <div className="flex justify-center mt-5 h-1/2">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]  scale-75 rounded-md "
                            src="/english.jpg"
                            alt="english"
                            width={320}
                            height={160}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-lg md:text-xl">English</h1>
                        <h2 className="font-semibold text-center text-sm md:text-base">Skill Level: Business/Academic Conversation Level</h2>
                        <p className="font-medium text-center my-5 text-sm md:text-base">I can communicate in daily conversations and academic settings abroad. I am often praised by international students for my proficiency.</p>
                    </div>
                    <div className="bg-gray-300 flex-col p-4 rounded-lg my-4 md:my-0">
                        <div className="flex justify-center mt-5 h-1/2">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]  scale-75  "
                            src="/brazil.jpg"
                            alt="brazil"
                            width={320}
                            height={160}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-lg md:text-xl">Portuguese</h1>
                        <h2 className="font-semibold text-center text-sm md:text-base">Skill Level: Daily Conversation Level</h2>
                        <p className="font-medium text-center my-5 text-sm md:text-base">I can talk in daily conversations. It&#39;s my father&#39;s mother tongue.</p>
                    </div>
                    <div className="bg-gray-300 flex-col p-4 rounded-lg my-4 md:my-0">
                        <div className="flex justify-center mt-5 h-1/2">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]  scale-75"
                            src="/italia.png"
                            alt="italia"
                            width={320}
                            height={160}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-lg md:text-xl">Italian</h1>
                        <h2 className="font-semibold text-center text-sm md:text-base">Skill Level: A2-Pre Intermediate</h2>
                        <p className="font-medium text-center my-5 text-sm md:text-base">I can read and talk a little. I love Maneskin and that&#39;s why I learn.</p>
                    </div>
                    <div className="bg-gray-300 flex-col p-4 rounded-lg my-4 md:my-0">
                        <div className="flex justify-center mt-5 h-1/2">
                            <Image
                            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]  scale-75"
                            src="/korea.jpg"
                            alt="korea"
                            width={320}
                            height={160}
                            priority
                            />
                        </div>
                        <h1 className="font-bold text-center text-lg md:text-xl">Korean</h1>
                        <h2 className="font-semibold text-center text-sm md:text-base">Skill Level: A1-Beginner</h2>
                        <p className="font-medium text-center my-5 text-sm md:text-base">I can read a little. continue studying now.</p>
                    </div>
                    <div className="bg-gray-300 flex-col p-4 rounded-lg my-4 md:my-0 h-full">
                        <div className="flex justify-center mt-5 h-1/2">
                        </div>
                        <h1 className="font-bold text-center text-lg md:text-xl">Continue studying...</h1>
                    </div>
                    
                </div>
            </div>
            
            <Footer />
        </main>
    );
}
