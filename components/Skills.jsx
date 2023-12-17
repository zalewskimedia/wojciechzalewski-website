import Image from "next/image"
import Link from "next/link"
import SkillDelete from "./SkillDelete"

const getData = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/skills", {
            cache: "no-store",
        })
        if (!res.ok) {
            throw new Error("Failed")
        }
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

const Skills = async () => {
    const { skills } = await getData()
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-8 grid gap-10 lg:grid-cols-4">
                {skills.map(skill => (
                    <article key={skill._id}>
                        <div className="flex justify-start items-start gap-4 mb-4">
                            <h4 className="text-4xl font-bold text-white">
                                {skill.name}
                            </h4>
                            <Image
                                src={skill.image}
                                width={38}
                                height={38}
                                alt={skill.name}
                            />
                            <SkillDelete id={skill._id} />
                        </div>
                        <p>
                            Doświadczenie w latach:{" "}
                            <strong>{skill.experience}</strong>
                        </p>
                    </article>
                ))}
            </div>
            <Image
                src="/bg-yellow-item.svg"
                width={530}
                height={129}
                alt="Element tła"
                className="absolute bottom-10 -right-64"
            />
        </section>
    )
}
export default Skills
