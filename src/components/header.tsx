import NextLink from 'next/link'

type Page = {
    page: string,
};

const Header: React.FC<Page> = (props) => {
    let page: string = props.page
    let list_component: JSX.Element | undefined
    if (page === "top") {
        list_component = (
            <ul className="flex gap-6">
                <li className="text-white"><NextLink href="../top">Top</NextLink></li>
                <li><NextLink href="../about">About</NextLink></li>
                <li><NextLink href="../skill">Skill</NextLink></li>
                <li><NextLink href="../work">Work</NextLink></li>
                <li><NextLink href="../blog">Blog</NextLink></li>
            </ul>
        )
    } else if (page === "about") {
        list_component = (
            <ul className="flex gap-6">
                <li><NextLink href="../top">Top</NextLink></li>
                <li className="text-white"><NextLink href="../about">About</NextLink></li>
                <li><NextLink href="../skill">Skill</NextLink></li>
                <li><NextLink href="../work">Work</NextLink></li>
                <li><NextLink href="../blog">Blog</NextLink></li>
            </ul>
        )
    } else if (page === "skill") {
        list_component = (
            <ul className="flex gap-6">
                <li><NextLink href="../top">Top</NextLink></li>
                <li><NextLink href="../about">About</NextLink></li>
                <li className="text-white"><NextLink href="../skill">Skill</NextLink></li>
                <li><NextLink href="../work">Work</NextLink></li>
                <li><NextLink href="../blog">Blog</NextLink></li>
            </ul>
        )
    } else if (page === "work") {
        list_component = (
            <ul className="flex gap-6">
                <li><NextLink href="../top">Top</NextLink></li>
                <li><NextLink href="../about">About</NextLink></li>
                <li><NextLink href="../skill">Skill</NextLink></li>
                <li className="text-white"><NextLink href="../work">Work</NextLink></li>
                <li><NextLink href="../blog">Blog</NextLink></li>
            </ul>
        )
    } else if (page === "blog") {
        list_component = (
            <ul className="flex gap-6">
                <li><NextLink href="../top">Top</NextLink></li>
                <li><NextLink href="../about">About</NextLink></li>
                <li><NextLink href="../skill">Skill</NextLink></li>
                <li><NextLink href="../work">Work</NextLink></li>
                <li className="text-white"><NextLink href="../blog">Blog</NextLink></li>
            </ul>
        )
    }
    return (
        <header className="w-full flex items-center justify-between p-4 text-blue-800">
            <h1 className="text-2xl font-bold">TITLE</h1>
            <nav>
                {list_component}
            </nav>
        </header>
    )
}

export default Header;