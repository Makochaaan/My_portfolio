import NextLink from 'next/link'

export default function Header() {
    return (
        <header className="w-full flex items-center justify-between p-4 text-blue-800">
            <h1 className="text-2xl font-bold">DEPONTES</h1>
            <nav>
                <ul className="flex gap-6">
                    <li><NextLink href="../top">Top</NextLink></li>
                    <li><NextLink href="../about">About</NextLink></li>
                    <li><NextLink href="../skill">Skill</NextLink></li>
                    <li><NextLink href="../work">Work</NextLink></li>
                    <li><NextLink href="../blog">Blog</NextLink></li>
                </ul>
            </nav>
        </header>
    )
}