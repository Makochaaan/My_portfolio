"use client";
import Top from "../ja/top/page";
import GlobalStyle from "../../components/GlobalStyles";
import {LoadAnimation, LoadStrAnimation} from "../../animation/loadAnimation";

export default function Home() {
  return (
    <div>
      <GlobalStyle />
      <LoadStrAnimation >
          <h1 className="text-white text-2xl md:text-8xl font-bold">こんにちは</h1>
      </LoadStrAnimation>
      <LoadAnimation classContent="absolute inset-0 z-20 bg-gradient-to-l from-blue-800 to-blue-500"></LoadAnimation>
      
      <Top />
    </div>
  );
}
