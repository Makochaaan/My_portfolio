import Image from "next/image";
import Header from "../../components/header";
import NextLink from 'next/link'

export default function Top() { 

return (
        <main className="flex flex-col items-center px-60">
            <Header page="top"/>
            <div className="mt-80 z-10 max-w-5xl items-center font-mono text-sm ">
                <p>左から音の波に乗って名前出したい</p>
            </div>
            <div className="mt-80 z-10 flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
                <p>↓</p>
            </div>
            <div className="mt-80 z-10 flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/myPhoto.jpg"
                    alt="Next.js Logo"
                    width={420}
                    height={420}
                    priority
                />
                <div className="flex-col m-16 text-center">
                <h1>About Me</h1>
                <p className="text-16">{process.env.NAME}</p>
                <p>{process.env.BELONG}</p>
                <NextLink href="../about">もっと見る→</NextLink>
                </div>
            </div>

            <div className="mt-60 flex-col min-h-screen">
                <h1 className="mb-10">Work</h1>
                <div className="grid text-center lg:mb-10 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left lg:gap-10">
                    <div className="relative group">
                        <a href="https://yorimichizu.up.railway.app" target="_blank" rel="noopener noreferrer">
                            <img src="/yorimichizu.png" className="rounded-md border-2 border-indigo-600" />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 right-0 bg-indigo-500/70 flex-col px-16 py-2 rounded-tl-lg rounded-br-lg">
                                    <p>よりみちず</p>
                                    <p>2023/10</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="relative group">
                        <a href="https://unityroom.com/games/my_new_gear" target="_blank" rel="noopener noreferrer">
                            <img src="/mynewgear.png" className="rounded-md border-2 border-indigo-600" />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 right-0 bg-indigo-500/70 flex-col px-16 py-2 rounded-tl-lg rounded-br-lg">
                                    <p>My New Gear</p>
                                    <p>2023/04</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <NextLink href="../work" className="bg-indigo-600 text-white rounded-md px-4 py-2">もっと見る→</NextLink>
                </div>
            </div>
        </main>
    );
}