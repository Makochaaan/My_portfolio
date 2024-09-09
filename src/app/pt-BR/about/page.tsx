import Image from "next/image";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Timeline from "../../../components/Timeline";
import { FadeinAnimation } from "../../../animation/fadeAnimation";
import React, { useEffect } from 'react';

export default function About() {
  return (
    <main className="flex flex-col items-center px-60">
      <Header page="about" lang="pt-BR"/>
      <div className="z-10 w-full max-w-5xl items-center font-medium lg:flex-col">
        
            <FadeinAnimation>
              <div className="mt-20 z-10 flex place-items-center relative">
                <Image
                    className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert scale-75 rounded-md"
                    src="/myPhoto.jpg"
                    alt="myPhoto"
                    width={420}
                    height={420}
                    priority
                />
                <div className="flex-col ml-12 text-center">
                    <h1 className="font-extrabold mb-8 text-7xl text-blue-800">ABOUT ME</h1>
                    <p className="text-2xl mb-8">{process.env.NEXT_PUBLIC_NAME}</p>
                    <p className="text-xl mb-8">{process.env.NEXT_PUBLIC_BIRTHDAY}, Born in Japan</p>
                    <p className="text-xl mb-8">{process.env.NEXT_PUBLIC_BELONG_EN}</p>
                    <p className="text-xl mb-8">Total GPA: 3.86</p>
                </div>
              </div>
            </FadeinAnimation>
        <FadeinAnimation>
        <div className="mt-10 flex-col place-items-center ">
            <h1 className="text-2xl mb-4 font-semibold">INTRODUCE</h1>
            <p >　Thank you for watching this page. My name is {process.env.NEXT_PUBLIC_NAME}. I&#39;m Brazilian-Japanese. I&#39;m a 3rd year student of Nagoya University, faculty of Informatics. I&#39;ve been specializing at signal analysis, especially as for electric insturments, and effectors.</p>
            <p>　I&#39;m a member of application development circle &#34;jack&#34; and make some application. Also, I play bass and sing at a band circle.</p>
            <p>　I&#39;m glad you to watch my masterpieces from &#34;WORK&#34; page. If you want to contact me, please send messages to accounts below.</p>
        </div>
        </FadeinAnimation>
        
        <div className="mt-10 z-10 flex-col place-items-center ">
            <FadeinAnimation>
            <h1 className="text-2xl my-4 font-semibold">MY HISTORY</h1>
            </FadeinAnimation>
            <FadeinAnimation>
            <div className="flex items-center bg-gray-300 rounded-md my-20">
              <p className="pl-10 pr-5 indent-2">In 2020: when I was 17 and was high school student, the Pandemic hit the world. All events were cancelled and we&#39;re in a kind of &#34;panic&#34;, so there&#39;re a lot of problems. <br></br>
              　As a member of the high school, I cannot ignore these problems. So, I ran for election and became a school comittee president. I led my school and changed several &#34;ridiculous&#34; rules which was not matched to post-pandemic society. That&#39;s the time I started my career as a &#34;leader&#34;.</p>
              <img src="/kita.jpg" className="w-1/2 rounded-r-md" />
            </div>
            </FadeinAnimation>
            <FadeinAnimation>
            <div className="flex items-center bg-gray-300 rounded-md mt-40">
              <div className="rounded-l-md flex-col"><img src="/pc.jpg" /><img src="/nagoyaUniv.png"  /></div>
              <p className="pl-10 pr-5 indent-2">In 2022, I enrolled in Nagoya University, faculty of Informatics: where my life has been dynamically changed. I join band circle and application development circle, and I was deeply attracted.<br></br>
              　As for jack, I became a president in 2023, and vice-president in 2024. Using the experiences at school comittee, I led jack. As a result, jack now has many cooperation with other circles and organizations.<br></br>
              　Of course, in classes, I study hard in order to become a AI engineer with deep recognitions. </p>
            </div>
            </FadeinAnimation>
            <FadeinAnimation>
            <div className="flex items-center bg-gray-300 rounded-md mt-40">
              <p className="pl-10 pr-5 indent-2">Since I join jack, I&#39;ve developed a lot of applications. As of 31/08/2024, I&#39;ve developed 9 applications, and 4 applications are released on web. Please check these 4 applications on WORK page.</p>
              <div className="grid grid-cols-2"><img src="/yorimichizu.png"/><img src="/mynewgear.png" className="rounded-tr-md"/><img src="/shinkanweb2023.png"/><img src="/shinkanweb2024.png" className="rounded-br-md"/></div>
            </div>
            </FadeinAnimation>
            <FadeinAnimation>
            <div className=" bg-gray-300 rounded-md mt-40 grid grid-cols-2 items-center">
              <img src="/matsuriba.jpg" /><p className="pl-10 pr-5 indent-2">As an university student, I&#39;ve joined a lot of events held at the outside of universtity. In 2023, I and my friends of other universities started an event in Nagoya called &#34;Matsuriba&#34;. Matsuriba is the event to gather student engineers and make collaborations. I believe that led Nagoya to be full of innovations.</p>
              <p className="pl-10 pr-5 indent-2">In 2024, I flew to Singapore and studied at NUS for 2 weeks. In Singapore, I visited the Singapore office of Google, Microsoft, AWS, and Toyota-Tusho. I studied not only IT skills, but also entreprenuership and management through this 2-week-stay. That was precious experience, I think.<br></br>
              　To join these events makes me more sensitive and gives me deep understandings and precious connections, I think. That&#39;s why I actively join many envents.</p><img src="/google.jpg"  />
            </div>
            </FadeinAnimation>
        </div>
        
        <h1 className="mt-10 text-2xl mb-4 font-semibold">ACCOUNT</h1>
        <p className="my-4 text-md">　If you want to contact me, please send messages to accounts below, or to the e-mail( {process.env.NEXT_PUBLIC_MAIL} ).</p>
        <div className="mb-20 flex flex-col items-center">
                    
                    <div className="flex flex-col items-center">
                        <a href={process.env.NEXT_PUBLIC_LINKEDIN|| '#'} target="_blank" className="mt-10 bg-gray-300 hover:bg-gray-400 hover:duration-500 text-gray-800 font-bold py-5 px-40 w-full inline-flex items-center rounded-full">
                        <img className="fill-current w-7 h-6 mr-2" src="/LI-In-mark.png" alt="LinkedIn Logo" />
                            <span>LinkedIn</span>
                        </a><br></br>
                        <a href={process.env.NEXT_PUBLIC_GITHUB|| '#'} target="_blank" className="mt-2 bg-gray-300 hover:bg-gray-400 hover:duration-500 text-gray-800 font-bold py-5 px-40 w-full rounded-full inline-flex items-center">
                            <img className="fill-current w-6 h-6 mr-2" src="/github-mark.svg" alt="Github Logo" />
                            <span>Github</span>
                        </a><br></br>
                        <a href={process.env.NEXT_PUBLIC_INSTAGRAM|| '#'} target="_blank" className="mt-2 bg-gray-300 hover:bg-gray-400 hover:duration-500 text-gray-800 font-bold py-5 px-40 w-full rounded-full inline-flex items-center">
                        <img className="fill-current w-6 h-6 mr-2" src="/Instagram_mark.svg" alt="Instagram Logo" />
                            <span>Instagram</span>
                        </a><br></br>
                        <a href={process.env.NEXT_PUBLIC_JACK|| '#'} target="_blank" className="mt-2 bg-gray-300 hover:bg-gray-400 hover:duration-500 text-gray-800 font-bold py-5 px-40 w-full rounded-full inline-flex items-center">
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
