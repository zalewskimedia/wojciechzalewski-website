"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const SkillForm = () => {
    const router = useRouter()

    const [name, setName] = useState("")
    const [experience, setExperience] = useState(0)
    const [image, setImage] = useState("")
    const [progress, setProgress] = useState(0)

    const handleSubmit = async e => {
        e.preventDefault()

        if (!name || !experience || !image || !progress) {
            alert("Wszystkie pola są wymagane!")
            return
        }

        try {
            const res = await fetch("http://localhost:3000/api/skills", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ name, experience, image, progress }),
            })

            if (res.ok) {
                router.push("/")
                router.refresh()
            } else {
                throw new Error("Something went wrong")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form className="w-full" onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nazwa"
                        className="w-full p-2 mb-8 rounded-md bg-slate-600 focus:outline-none"
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                </label>
                <label htmlFor="experience">
                    <input
                        type="number"
                        name="experience"
                        id="experience"
                        placeholder="Doświadczenie"
                        className="w-full p-2 mb-8 rounded-md bg-slate-600 focus:outline-none"
                        onChange={e => setExperience(e.target.value)}
                        value={experience}
                    />
                </label>
                <label htmlFor="imgae">
                    <input
                        type="text"
                        name="image"
                        id="image"
                        placeholder="Logo Link"
                        className="w-full p-2 mb-8 rounded-md bg-slate-600 focus:outline-none"
                        onChange={e => setImage(e.target.value)}
                        value={image}
                    />
                </label>
                <label htmlFor="progress">
                    <input
                        type="number"
                        name="progress"
                        id="progress"
                        placeholder="Postęp"
                        className="w-full p-2 mb-8 rounded-md bg-slate-600 focus:outline-none"
                        onChange={e => setProgress(e.target.value)}
                        value={progress}
                    />
                </label>
                <button type="submit">Dodaj</button>
            </form>
        </div>
    )
}
export default SkillForm
