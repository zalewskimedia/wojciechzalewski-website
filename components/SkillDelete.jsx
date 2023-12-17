"use client"

import { CiTrash } from "react-icons/ci"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

const SkillDelete = ({ id }) => {
    const { status } = useSession()
    const router = useRouter()
    const removeSkill = async () => {
        const confirmed = confirm("Na pewno?")

        if (confirmed) {
            const res = await fetch(
                `http://localhost:3000/api/skills?id=${id}`,
                { method: "DELETE" }
            )

            if (res.ok) {
                router.refresh()
            }
        }
    }
    if (status === "authenticated") {
        return (
            <button onClick={removeSkill}>
                <CiTrash size={24} />
            </button>
        )
    }
}
export default SkillDelete
