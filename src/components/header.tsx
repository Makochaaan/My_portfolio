"use client";

import NextLink from 'next/link'
import { NextRequest } from 'next/server';
import { useState } from 'react';

type Page = {
    page: string,
    lang?: string
};

const Header: React.FC<Page> = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    let page: string = props.page
    let lang: string | undefined = props.lang
    if (lang === undefined) {lang = "ja"}
    let list_component: JSX.Element | undefined

    if (page === "top") {
        list_component = (
            <ul className="flex flex-col md:flex-row gap-6">
                <li className="text-white"><NextLink href={`../${lang}/top`}>Top</NextLink></li>
                <li><NextLink href={`../${lang}/about`}>About</NextLink></li>
                <li><NextLink href={`../${lang}/skill`}>Skill</NextLink></li>
                <li><NextLink href={`../${lang}/work`}>Work</NextLink></li>
                <li><NextLink href="https://www.jackapp.jp/blog/writer/%E3%81%BE%E3%81%93%E3%81%A1%E3%82%83%E3%83%BC%E3%82%93" target="_blank">Blog</NextLink></li>
                {/* <li><NextLink className="hover:text-blue-500 duration-100" href="../ja">JP</NextLink> / <NextLink  className="hover:text-blue-500 duration-100" href="../en">EN</NextLink> / <NextLink  className="hover:text-blue-500 duration-100" href="../pt-BR">PR</NextLink></li> */}
                <li><NextLink className="hover:text-blue-500 duration-100" href="../ja">JP</NextLink> / <NextLink  className="hover:text-blue-500 duration-100" href="../en">EN</NextLink></li>
            </ul>
        )
    } else if (page === "about") {
        list_component = (
            <ul className="flex flex-col md:flex-row gap-6">
                <li><NextLink href={`../${lang}/top`}>Top</NextLink></li>
                <li className="text-white"><NextLink href={`../${lang}/about`}>About</NextLink></li>
                <li><NextLink href={`../${lang}/skill`}>Skill</NextLink></li>
                <li><NextLink href={`../${lang}/work`}>Work</NextLink></li>
                <li><NextLink href="https://www.jackapp.jp/blog/writer/%E3%81%BE%E3%81%93%E3%81%A1%E3%82%83%E3%83%BC%E3%82%93" target="_blank">Blog</NextLink></li>
                {/* <li><NextLink className="hover:text-blue-500 duration-100" href="../ja">JP</NextLink> / <NextLink  className="hover:text-blue-500 duration-100" href="../en">EN</NextLink> / <NextLink  className="hover:text-blue-500 duration-100"  href="../pt-BR">PR</NextLink></li> */}
                <li><NextLink className="hover:text-blue-500 duration-100" href="../ja">JP</NextLink> / <NextLink  className="hover:text-blue-500 duration-100" href="../en">EN</NextLink></li>
            </ul>
        )
    } else if (page === "skill") {
        list_component = (
            <ul className="flex flex-col md:flex-row gap-6">
                <li><NextLink href={`../${lang}/top`}>Top</NextLink></li>
                <li><NextLink href={`../${lang}/about`}>About</NextLink></li>
                <li className="text-white"><NextLink href={`../${lang}/skill`}>Skill</NextLink></li>
                <li><NextLink href={`../${lang}/work`}>Work</NextLink></li>
                <li><NextLink href="https://www.jackapp.jp/blog/writer/%E3%81%BE%E3%81%93%E3%81%A1%E3%82%83%E3%83%BC%E3%82%93" target="_blank">Blog</NextLink></li>
                {/* <li><NextLink className="hover:text-blue-500 duration-100" href="../ja">JP</NextLink> / <NextLink  className="hover:text-blue-500 duration-100" href="../en">EN</NextLink> / <NextLink className="hover:text-blue-500 duration-100" href="../pt-BR">PR</NextLink></li> */}
                <li><NextLink className="hover:text-blue-500 duration-100" href="../ja">JP</NextLink> / <NextLink  className="hover:text-blue-500 duration-100" href="../en">EN</NextLink></li>
            </ul>
        )
    } else if (page === "work") {
        list_component = (
            <ul className="flex flex-col md:flex-row gap-6">
                <li><NextLink href={`../${lang}/top`}>Top</NextLink></li>
                <li><NextLink href={`../${lang}/about`}>About</NextLink></li>
                <li><NextLink href={`../${lang}/skill`}>Skill</NextLink></li>
                <li className="text-white"><NextLink href={`../${lang}/work`}>Work</NextLink></li>
                <li><NextLink href="https://www.jackapp.jp/blog/writer/%E3%81%BE%E3%81%93%E3%81%A1%E3%82%83%E3%83%BC%E3%82%93" target="_blank">Blog</NextLink></li>
                {/* <li><NextLink className="hover:text-blue-500 duration-100" href="../ja">JP</NextLink> / <NextLink className="hover:text-blue-500 duration-100" href="../en">EN</NextLink> / <NextLink className="hover:text-blue-500 duration-100" href="../pt-BR">PR</NextLink></li> */}
                <li><NextLink className="hover:text-blue-500 duration-100" href="../ja">JP</NextLink> / <NextLink className="hover:text-blue-500 duration-100" href="../en">EN</NextLink></li>
            </ul>
        )
    } else if (page === "work-detail") {
        list_component = (
            <ul className="flex flex-col md:flex-row gap-6">
                <li><NextLink href={`../../${lang}/top`}>Top</NextLink></li>
                <li><NextLink href={`../../${lang}/about`}>About</NextLink></li>
                <li><NextLink href={`../../${lang}/skill`}>Skill</NextLink></li>
                <li className="text-white"><NextLink href={`../../${lang}/work`}>Work</NextLink></li>
                <li><NextLink href="https://www.jackapp.jp/blog/writer/%E3%81%BE%E3%81%93%E3%81%A1%E3%82%83%E3%83%BC%E3%82%93" target="_blank">Blog</NextLink></li>
                {/* <li><NextLink className="hover:text-blue-500 duration-100" href="../../ja">JP</NextLink> / <NextLink className="hover:text-blue-500 duration-100" href="../../en">EN</NextLink> / <NextLink className="hover:text-blue-500 duration-100" href="../../pt-BR">PR</NextLink></li> */}
                <li><NextLink className="hover:text-blue-500 duration-100" href="../../ja">JP</NextLink> / <NextLink className="hover:text-blue-500 duration-100" href="../../en">EN</NextLink></li>
            </ul>
        )
    }
    return (
        <header className="w-full flex flex-col md:flex-row items-center justify-between p-4 text-blue-800">
            <div className="flex justify-between w-full md:w-auto">
                <h1 className="text-2xl font-bold mb-4 md:mb-0">DEPONTES&#39; PORTFOLIO</h1>
                <button className="md:hidden" onClick={toggleMenu}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            <nav className={`${isOpen ? 'block' : 'hidden'} md:block`}>
                {list_component}
            </nav>
        </header>
    )
}

export default Header;