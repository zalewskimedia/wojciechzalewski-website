import Link from "next/link"
import Image from "next/image"
import ParticlesBg from "./Particles"

const Hero = () => {
    return (
        <section className="relative">
            <ParticlesBg />
            <div className="container mx-auto px-8 flex flex-col lg:flex-row justify-between items-center gap-16 min-h-[75vh] relative">
                <div className="w-full order-2 lg:order-1">
                    <h1 className="font-bold text-4xl text-center lg:text-start lg:text-7xl text-white">
                        Hello World! <br />
                        Great to{" "}
                        <span className="underline underline-offset-[1rem] decoration-accent">
                            meet you.
                        </span>
                    </h1>
                    <p className="mt-8 mb-8 text-center lg:text-start">
                        Based in Poland, I’m a front-end developer passionate
                        about building accessible web apps that users love.
                    </p>
                    <div className="group w-fit mx-auto lg:mx-0 mb-16 lg:mb-0">
                        <Link
                            href="/kontakt"
                            className="uppercase tracking-widest text-accent">
                            Napisz do mnie
                        </Link>
                        <div className="bg-accent h-[1px] mt-2 w-full group-hover:w-4 duration-300"></div>
                    </div>
                </div>
                <div className="w-full flex justify-center order-1 lg:order-2">
                    <Image
                        src="/wz-logo.png"
                        width={326}
                        height={344}
                        alt="Wojciech Zalewski"
                    />
                </div>
                <div className="w-full h-[1px] bg-light-text absolute bottom-0 left-0"></div>
            </div>
        </section>
    )
}
export default Hero
