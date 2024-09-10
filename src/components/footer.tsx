import NextLink from 'next/link'

export default function Footer() {
    return (
        <footer className="py-10 px-80 w-full flex items-center justify-between text-blue-800 border-t border-blue-400">
            <div className="flex-col items-center justify-center">
                <p>2024 {process.env.NEXT_PUBLIC_NAME}..</p>
                <p>Made with React, Next.js</p>
            </div>
        </footer>
    )
}
