import react from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function skill() {

    return (
        <main className="flex flex-col items-center px-60">
            <Header page="skill"/>
            <div className="mt-20 flex-col min-h-screen">
                <h1 className="text-xl font-bold flex justify-center text-center text-blue-800">出来ること</h1>
                <div className="text-center relative 
                               before:absolute before:left-1/2 before:bt-0 before:width-0 before:border-b-2 before:border-blue-800 before:transform before:-translate-x-1/2 before:animate-line-from-center"
                ></div>
                <div className="grid text-center lg:mb-10 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left lg:gap-10">
                
                </div>
            </div>
            <div className="mt-20 flex-col min-h-screen">
                <h1 className="text-xl font-bold flex justify-center text-center text-blue-800">音楽作品</h1>
                <div className="text-center relative 
                               before:absolute before:left-1/2 before:bt-0 before:width-0 before:border-b-2 before:border-blue-800 before:transform before:-translate-x-1/2 before:animate-line-from-center"
                ></div>
                <h2 className="mt-2 mb-10 font-bold flex justify-center text-center text-blue-700">自分で作曲・アレンジをした音楽作品です。クリックでライブ映像(Youtube)に飛べます。</h2>
                <div className="grid text-center lg:mb-10 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left lg:gap-10">

                </div>
            </div>
            <Footer />
        </main>
    );


}
