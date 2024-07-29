import NextLink from 'next/link'

type Page = {
    route: string,
    image: string,
    title: string,
    year: string,
    target: string
};

const WorkTab: React.FC<Page> = ({route, image, title, year, target = 0}) => {
    if (target == "1") {
        return (
            <div className="rounded-lg border-2 border-indigo-600">
                <NextLink href={route} target="_blank">
                    <div className="relative group">
                        <img src={image} className={"rounded-md"} />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center absolute bottom-0 right-0 bg-indigo-500/70 text-white flex-col px-16 py-2 rounded-tl-lg">
                                <p>{title}</p>
                                <p>{year}</p>
                            </div>
                        </div>
                    </div>
                </NextLink>
            </div>
        )
    } else {
        return (
            <div className="rounded-lg border-2 border-indigo-600">
                <NextLink href={route}>
                    <div className="relative group">
                        <img src={image} className={"rounded-md"} />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center absolute bottom-0 right-0 bg-indigo-500/70 text-white flex-col px-16 py-2 rounded-tl-lg">
                                <p>{title}</p>
                                <p>{year}</p>
                            </div>
                        </div>
                    </div>
                </NextLink>
            </div>
        )
    }
    
}

export default WorkTab;