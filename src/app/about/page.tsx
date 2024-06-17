import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function About() {
  return (
    <main className="flex flex-col items-center px-60">
      <Header page="about"/>
      <div className="z-10 w-full max-w-5xl items-center font-mono text-sm lg:flex-col">
        
        <div className=" z-10 flex place-items-center min-h-screen before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
            <Image //TODO 自分の写真
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
            </div>
        </div>
        <div className="mt-20 z-10 flex-col place-items-center ">
            <h1>自己紹介</h1>
            <p>・</p>
            <p>・</p>
            <p>・</p>
            <p>・</p>
            <p>・</p>
        </div>
        <div className="mt-20 z-10 flex-col place-items-center ">
            <h1>Links and Contacts</h1>
            <p>Github:</p>
            <p>Mail:</p>
            <p>Blog:</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
