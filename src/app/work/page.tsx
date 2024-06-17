import Image from "next/image";
import Header from "../../components/header";
import NextLink from 'next/link'

export default function Work() { 

return (
        <main className="flex flex-col items-center px-60">
            <Header page="work"/>
            <div className="mt-20 flex-col min-h-screen">
                <h1 className="mb-10">Work</h1>
                <div className="grid text-center lg:mb-10 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left lg:gap-10">
                    <div className="relative group">
                        <NextLink href="./work/Yorimichizu">
                            <img src="/yorimichizu.png" className="rounded-md border-2 border-indigo-600" />
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 right-0 bg-indigo-500/70 flex-col px-16 py-2 rounded-tl-lg rounded-br-lg">
                                    <p>よりみちず</p>
                                    <p>2023/10</p>
                                </div>
                            </div>
                        </NextLink>
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