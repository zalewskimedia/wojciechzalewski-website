"use client"

import Link from "next/link"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import { CiSquarePlus } from "react-icons/ci"

const AdminBar = () => {
    const { data: session, status } = useSession()
    if (status === "authenticated") {
        return (
            <div className="bg-zinc-800 text-white py-2 text-sm z-30">
                <div className="container mx-auto px-8 flex justify-between items-center">
                    <p>Cześć {session?.user?.name || "Adnim"}!</p>
                    <nav className="flex gap-8">
                        <Link
                            href="/add-skill"
                            className="flex items-center gap-2 hover:text-accent">
                            <CiSquarePlus size={20} />
                            Dodaj skill
                        </Link>
                        <Link
                            href="/project/add"
                            className="flex items-center gap-2 hover:text-accent">
                            <CiSquarePlus size={20} />
                            Dodaj projekt
                        </Link>
                        <Link
                            href="/blog/add"
                            className="flex items-center gap-2 hover:text-accent">
                            <CiSquarePlus size={20} />
                            Dodaj Post
                        </Link>
                        <button
                            onClick={() => signOut()}
                            className="hover:underline hover:underline-offset-4 hover:text-accent">
                            Wyloguj
                        </button>
                    </nav>
                </div>
            </div>
        )
    }
}
export default AdminBar
