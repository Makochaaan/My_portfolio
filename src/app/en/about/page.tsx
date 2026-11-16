import Image from "next/image";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Timeline from "../../../components/Timeline";
import { FadeinAnimation } from "../../../animation/fadeAnimation";

export default function About() {
  return (
    <main className="flex flex-col items-center px-4 md:px-60">
      <Header page="about" lang="en"/>
      <div className="z-10 w-full max-w-5xl items-center font-medium lg:flex-col">
        
            <FadeinAnimation>
              <div className="mt-20 z-10 flex flex-col md:flex-row place-items-center relative">
                <Image
                    className="dark:drop-shadow-[0_0_0.3rem_#ffffff70]  scale-75 rounded-md"
                    src="/myPhoto.jpg"
                    alt="myPhoto"
                    width={420}
                    height={420}
                    priority
                />
                <div className="flex-col ml-0 md:ml-12 text-center md:text-left">
                    <h1 className="font-extrabold mb-8 text-4xl md:text-7xl text-blue-800">ABOUT ME</h1>
                    <p className="text-xl md:text-2xl mb-8">{process.env.NEXT_PUBLIC_NAME}</p>
                    <p className="text-lg md:text-xl mb-8">{process.env.NEXT_PUBLIC_BIRTHDAY}, Born in Japan</p>
                    <p className="text-lg md:text-xl mb-4">{process.env.NEXT_PUBLIC_BELONG_EN}</p>
                    <p className="text-lg md:text-xl mb-4">Total GPA: 3.86</p>
                </div>
              </div>
            </FadeinAnimation>
        <FadeinAnimation>
        <div className="mt-10 flex-col place-items-center ">
            <h1 className="text-xl md:text-2xl mb-4 font-semibold">INTRODUCE</h1>
            <p className="text-sm md:text-base">　Thank you for visiting my portfolio. My name is {process.env.NEXT_PUBLIC_NAME}, and I&#39;m Brazilian-Japanese. I&#39;m a first-year master&#39;s student at Toda Lab, Department of Intelligent Systems, Graduate School of Informatics, Nagoya University. My research focuses on audio signal processing, especially the sound of electric guitars and the effect pedals that shape it.</p>
            <p className="text-sm md:text-base">　As a hobby, I take my time building apps that I wish existed. Alongside app development, I&#39;m also involved in music.</p>
            <p className="text-sm md:text-base">　Please check out my apps and music on the WORK page.</p>
        </div>
        </FadeinAnimation>

        <div className="mt-10 z-10 flex-col place-items-center">
            <FadeinAnimation>
            <h1 className="text-xl md:text-2xl my-4 font-semibold">MY HISTORY</h1>
            </FadeinAnimation>
            <Timeline lang="en" />
        </div>

        <h1 className="mt-10 text-xl md:text-2xl mb-4 font-semibold">ACCOUNT</h1>
        <p className="my-4 text-sm md:text-md">　If you want to contact me, please send messages to accounts below, or to the e-mail( {process.env.NEXT_PUBLIC_MAIL} ).</p>
        <div className="mb-20 flex flex-col items-center">
                    
                    <div className="flex flex-col items-center">
                        <a href={process.env.NEXT_PUBLIC_LINKEDIN|| '#'} target="_blank" className="mt-10 bg-gray-300 hover:bg-gray-400 hover:duration-500 text-gray-800 font-bold py-5 px-20 md:px-40 w-full inline-flex items-center rounded-full">
                        <img className="fill-current w-7 h-6 mr-2" src="/LI-In-mark.png" alt="LinkedIn Logo" />
                            <span>LinkedIn</span>
                        </a><br></br>
                        <a href={process.env.NEXT_PUBLIC_GITHUB|| '#'} target="_blank" className="mt-2 bg-gray-300 hover:bg-gray-400 hover:duration-500 text-gray-800 font-bold py-5 px-20 md:px-40 w-full rounded-full inline-flex items-center">
                            <img className="fill-current w-6 h-6 mr-2" src="/github-mark.svg" alt="Github Logo" />
                            <span>Github</span>
                        </a><br></br>
                        <a href={process.env.NEXT_PUBLIC_INSTAGRAM|| '#'} target="_blank" className="mt-2 bg-gray-300 hover:bg-gray-400 hover:duration-500 text-gray-800 font-bold py-5 px-20 md:px-40 w-full rounded-full inline-flex items-center">
                        <img className="fill-current w-6 h-6 mr-2" src="/Instagram_mark.svg" alt="Instagram Logo" />
                            <span>Instagram</span>
                        </a><br></br>
                    </div>
          </div>
      </div>
      <Footer />
    </main>
  );
}
