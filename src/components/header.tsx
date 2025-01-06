import NextLink from 'next/link'
import { NextRequest } from 'next/server';

type Page = {
    page: string,
    lang?: string
};

const Header: React.FC<Page> = (props) => {
    let page: string = props.page
    let lang: string | undefined = props.lang
    if (lang === undefined) {lang = "ja"}
    let list_component: JSX.Element | undefined

    if (page === "top") {
        list_component = (
            <ul className="flex gap-6">
                <li className="text-white"><NextLink href={`../${lang}/top`}>Top</NextLink></li>
                <li><NextLink href={`../${lang}/about`}>About</NextLink></li>
                <li><NextLink href={`../${lang}/skill`}>Skill</NextLink></li>
                <li><NextLink href={`../${lang}/work`}>Work</NextLink></li>
                <li><NextLink href="https://www.jackapp.jp/blog/writer/%E3%81%BE%E3%81%93%E3%81%A1%E3%82%83%E3%83%BC%E3%82%93" target="_blank">Blog</NextLink></li>
                <li><NextLink className="hover:text-blue-500 duration-100" href="../ja">JP</NextLink> / <NextLink  className="hover:text-blue-500 duration-100" href="../en">EN</NextLink> / <NextLink  className="hover:text-blue-500 duration-100" href="../pt-BR">PR</NextLink></li>
            </ul>
        )
    } else if (page === "about") {
        list_component = (
            <ul className="flex gap-6">
                <li><NextLink href={`../${lang}/top`}>Top</NextLink></li>
                <li className="text-white"><NextLink href={`../${lang}/about`}>About</NextLink></li>
                <li><NextLink href={`../${lang}/skill`}>Skill</NextLink></li>
                <li><NextLink href={`../${lang}/work`}>Work</NextLink></li>
                <li><NextLink href="https://www.jackapp.jp/blog/writer/%E3%81%BE%E3%81%93%E3%81%A1%E3%82%83%E3%83%BC%E3%82%93" target="_blank">Blog</NextLink></li>
                <li><NextLink className="hover:text-blue-500 duration-100" href="../ja">JP</NextLink> / <NextLink  className="hover:text-blue-500 duration-100" href="../en">EN</NextLink> / <NextLink  className="hover:text-blue-500 duration-100"  href="../pt-BR">PR</NextLink></li>
            </ul>
        )
    } else if (page === "skill") {
        list_component = (
            <ul className="flex gap-6">
                <li><NextLink href={`../${lang}/top`}>Top</NextLink></li>
                <li><NextLink href={`../${lang}/about`}>About</NextLink></li>
                <li className="text-white"><NextLink href={`../${lang}/skill`}>Skill</NextLink></li>
                <li><NextLink href={`../${lang}/work`}>Work</NextLink></li>
                <li><NextLink href="https://www.jackapp.jp/blog/writer/%E3%81%BE%E3%81%93%E3%81%A1%E3%82%83%E3%83%BC%E3%82%93" target="_blank">Blog</NextLink></li>
                <li><NextLink className="hover:text-blue-500 duration-100" href="../ja">JP</NextLink> / <NextLink  className="hover:text-blue-500 duration-100" href="../en">EN</NextLink> / <NextLink className="hover:text-blue-500 duration-100" href="../pt-BR">PR</NextLink></li>
            </ul>
        )
    } else if (page === "work") {
        list_component = (
            <ul className="flex gap-6">
                <li><NextLink href={`../${lang}/top`}>Top</NextLink></li>
                <li><NextLink href={`../${lang}/about`}>About</NextLink></li>
                <li><NextLink href={`../${lang}/skill`}>Skill</NextLink></li>
                <li className="text-white"><NextLink href={`../${lang}/work`}>Work</NextLink></li>
                <li><NextLink href="https://www.jackapp.jp/blog/writer/%E3%81%BE%E3%81%93%E3%81%A1%E3%82%83%E3%83%BC%E3%82%93" target="_blank">Blog</NextLink></li>
                <li><NextLink className="hover:text-blue-500 duration-100" href="../ja">JP</NextLink> / <NextLink href="../en">EN</NextLink> / <NextLink className="hover:text-blue-500 duration-100" href="../pt-BR">PR</NextLink></li>
            </ul>
        )
    } else if (page === "work-detail") {
        list_component = (
            <ul className="flex gap-6">
                <li><NextLink href={`../../${lang}/top`}>Top</NextLink></li>
                <li><NextLink href={`../../${lang}/about`}>About</NextLink></li>
                <li><NextLink href={`../../${lang}/skill`}>Skill</NextLink></li>
                <li className="text-white"><NextLink href={`../${lang}/work`}>Work</NextLink></li>
                <li><NextLink href="https://www.jackapp.jp/blog/writer/%E3%81%BE%E3%81%93%E3%81%A1%E3%82%83%E3%83%BC%E3%82%93" target="_blank">Blog</NextLink></li>
                <li><NextLink className="hover:text-blue-500 duration-100" href="../ja">JP</NextLink> / <NextLink href="../en">EN</NextLink> / <NextLink className="hover:text-blue-500 duration-100" href="../pt-BR">PR</NextLink></li>
            </ul>
        )
    }
    return (
        <header className="w-full flex items-center justify-between p-4 text-blue-800">
            <h1 className="text-2xl font-bold">DEPONTES&#39; PORTFOLIO</h1>
            <nav>
                {list_component}
            </nav>
        </header>
    )
}

export default Header;