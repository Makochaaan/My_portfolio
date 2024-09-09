import Image from "next/image";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import { SlideAnimationLeft, SlideAnimationRight } from "../../../animation/slideAnimation";
import NextLink from 'next/link'


export default function Top() { 

    return (
            <main className="flex flex-col items-center px-60">
                <Header page="top" lang="en"/>
                <div className="mt-60 z-10 max-w-5xl items-center font-mono text-sm ">
                    <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 inline-block text-transparent bg-clip-text">DEPONTES</h1><br></br>
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 inline-block text-transparent bg-clip-text">MAKOTO</h1>
                </div>
                <div className="relative mt-40 z-10 flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
                    {/* <p>↓</p> */}
                    <div className="absolute left-1/2 bottom-1
                    after:absolute after:top-0 after:width-[3px] after:height-[60px] bg-blue-400 animate-line-flow opacity-0"></div>
                </div>
                <div className="divide-y divide-blue-400">
                    <div className="mt-80 mb-20 z-10 flex place-items-center relative">
                        <SlideAnimationLeft>
                            <Image
                                className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert scale-75 rounded-md"
                                src="/myPhoto.jpg"
                                alt="Next.js Logo"
                                width={420}
                                height={420}
                                priority
                            />
                        </SlideAnimationLeft>
                        <SlideAnimationRight>
                        <div className="flex-col ml-12 text-center animate-slide-from-right">
                            <h2 className="text-center font-bold text-xl">I'm...</h2>
                            <h1 className="font-extrabold mb-8 text-5xl text-blue-800">{process.env.NAME}</h1>
                            {/* <p className="text-16 mb-8">{process.env.NAME}</p> */}
                            <p className="mb-8">{process.env.BELONG_EN}</p>
                            <p className="mb-16"></p>
                            <NextLink href="../about" className="bg-gray-300 hover:bg-gray-200 rounded-xl p-5 text-blue-800 font-bold hover:text-blue-400 hover:duration-500 border border-blue-800 hover:border-blue-400">ABOUT ME →</NextLink>
                        </div>
                        </SlideAnimationRight>
                    </div>

                    <div className="pt-20 mb-20 flex-col">
                        <h1 className="mb-10 font-bold text-3xl text-center">WORKS</h1>
                        <div className="grid text-center lg:mb-10 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left lg:gap-10">
                            <div className="relative group">
                                <a href="./work/Yorimichizu" rel="noopener noreferrer">
                                    <img src="/yorimichizu.png" className="rounded-md border-2 border-indigo-600" />
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="flex items-center absolute bottom-0 right-0 bg-indigo-500/70 flex-col px-16 py-2 rounded-tl-lg rounded-br-lg text-white">
                                            <p>Yorimichizu</p>
                                            <p>At 2023/10</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="relative group">
                                <a href="./work/My-new-gear" rel="noopener noreferrer">
                                    <img src="/mynewgear.png" className="rounded-md border-2 border-indigo-600" />
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="flex items-center absolute bottom-0 right-0 bg-indigo-500/70 flex-col px-16 py-2 rounded-tl-lg rounded-br-lg text-white">
                                            <p>My New Gear</p>
                                            <p>At 2023/04</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <NextLink href="../work" className="bg-indigo-600 text-white rounded-md px-4 py-2">Watch More →</NextLink>
                        </div>
                    </div>
                    <div className="pt-20 mb-20 flex flex-col items-center">
                        <h1 className="mb-10 font-bold text-3xl">CONTACT</h1>
                        <div className="flex flex-col items-center">
                            <a href={process.env.LINKEDIN} target="_blank" className="mt-10 bg-gray-300 hover:bg-gray-400 hover:duration-500 text-gray-800 font-bold py-5 px-40 w-full inline-flex items-center rounded-full">
                            <img className="fill-current w-7 h-6 mr-2" src="/LI-In-mark.png" alt="LinkedIn Logo" />
                                <span>LinkedIn</span>
                            </a><br></br>
                            <a href={process.env.GITHUB} target="_blank" className="mt-2 bg-gray-300 hover:bg-gray-400 hover:duration-500 text-gray-800 font-bold py-5 px-40 w-full rounded-full inline-flex items-center">
                                <img className="fill-current w-6 h-6 mr-2" src="/github-mark.svg" alt="Github Logo" />
                                <span>Github</span>
                            </a><br></br>
                            <a href={process.env.INSTAGRAM} target="_blank" className="mt-2 bg-gray-300 hover:bg-gray-400 hover:duration-500 text-gray-800 font-bold py-5 px-40 w-full rounded-full inline-flex items-center">
                            <img className="fill-current w-6 h-6 mr-2" src="/Instagram_mark.svg" alt="Instagram Logo" />
                                <span>Instagram</span>
                            </a><br></br>
                            <a href={process.env.JACK} target="_blank" className="mt-2 bg-gray-300 hover:bg-gray-400 hover:duration-500 text-gray-800 font-bold py-5 px-40 w-full rounded-full inline-flex items-center">
                            <img className="fill-current w-6 h-6 mr-2 rounded-md" src="/jack_mark.png" alt="jack Logo" />
                                <span>jack</span>
                            </a><br></br>
                        </div>
                    </div>
                </div>
                
                <Footer />
            </main>
        );
}