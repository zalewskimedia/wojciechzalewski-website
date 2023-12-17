import Link from "next/link"

const NavBar = () => {
    return (
        <header className="py-8 sticky top-0 z-30">
            <div className="container mx-auto px-8 flex justify-between items-center">
                <Link href="." className="font-bold text-2xl text-white">
                    Wojciech Zalewski
                </Link>
                <nav className="hidden lg:flex justify-end items-center text-white tracking-widest">
                    <ul className="flex justify-end items-center gap-10">
                        <li className="group flex flex-col">
                            <Link
                                href="/o-mnie"
                                className="group-hover:text-accent duration-300">
                                O mnie
                            </Link>
                            <span className="h-[1px] mt-2 w-0 bg-accent group-hover:w-full duration-300"></span>
                        </li>
                        <li className="group flex flex-col">
                            <Link
                                href="/projekty"
                                className="group-hover:text-accent duration-300">
                                Projekty
                            </Link>
                            <span className="h-[1px] mt-2 w-0 bg-accent group-hover:w-full duration-300"></span>
                        </li>
                        <li className="group flex flex-col">
                            <Link
                                href="/blog"
                                className="group-hover:text-accent duration-300">
                                Blog
                            </Link>
                            <span className="h-[1px] mt-2 w-0 bg-accent group-hover:w-full duration-300"></span>
                        </li>
                        <li className="group flex flex-col">
                            <Link
                                href="/kontakt"
                                className="group-hover:text-accent duration-300">
                                Kontakt
                            </Link>
                            <span className="h-[1px] mt-2 w-0 bg-accent group-hover:w-full duration-300"></span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default NavBar
