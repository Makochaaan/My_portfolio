import Image from "next/image";
import Header from "../../../components/header";
import NextLink from 'next/link'
import WorkTab from "../../../components/workTab";
import Footer from "../../../components/footer";

export default function Work() { 

return (
        <main className="flex flex-col items-center px-60">
            <Header page="work" lang="pt-BR"/>
            <div className="mt-20 flex-col min-h-screen">
                <h1 className="text-xl font-bold flex justify-center text-center text-blue-800">WORK of APPLICATION</h1>
                <div className="text-center relative 
                               before:absolute before:left-1/2 before:bt-0 before:width-0 before:border-b-2 before:border-blue-800 before:transform before:-translate-x-1/2 before:animate-line-from-center"
                ></div>
                <h2 className="mt-2 mb-10 font-bold flex justify-center text-center text-blue-700">There are apps which I made. You click and check the detail.</h2>
                <div className="grid text-center lg:mb-10 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left lg:gap-10">
  
                    <WorkTab route="https://yorimichizu.up.railway.app" image="/yorimichizu.png" title="Yorimichizu" year="2023/10" target="1"/>
                    <WorkTab route="https://unityroom.com/games/my_new_gear" image="/mynewgear.png" title="My New Gear" year="2023/02" target="1"/>
                    <WorkTab route="https://sc.coop.nagoya-u.ac.jp/nusc/sinkan2023/" image="/shinkanweb2024.png" title="Nagoya Univ. Coop Web2024" year="2024/04" target="1"/>
                    <WorkTab route="https://sc.coop.nagoya-u.ac.jp/nusc/sinkan2024/" image="/shinkanweb2023.png" title="Nagoya Univ. Coop Web2023" year="2023/04" target="1"/>
                
                </div>
            </div>
            <div className="mt-20 flex-col min-h-screen">
                <h1 className="text-xl font-bold flex justify-center text-center text-blue-800">WORK of MUSIC</h1>
                <div className="text-center relative 
                               before:absolute before:left-1/2 before:bt-0 before:width-0 before:border-b-2 before:border-blue-800 before:transform before:-translate-x-1/2 before:animate-line-from-center"
                ></div>
                <h2 className="mt-2 mb-10 font-bold flex justify-center text-center text-blue-700">There are music works which I made and arranged. You click and move to Youtube.</h2>
                <div className="grid text-center lg:mb-10 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left lg:gap-10">

                    {/* <WorkTab route="https://youtu.be/HQ415pI4BWg" image="/cory.png" title="Cory Wong(Cover)" year="2024/03" target="1"/> */}
                    <WorkTab route="https://youtu.be/9XzOiYEOj20" image="/salvia.png" title="SALVIA BLUE SENSATION(Original)" year="2023/12" target="1"/>
                    <WorkTab route="https://youtu.be/mfP6LYeyysI" image="/mario.png" title="MARIO KART Wii(Arrange)" year="2022/04" target="1"/>
                </div>
            </div>
            <Footer />
        </main>
    );
}