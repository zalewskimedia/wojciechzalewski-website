"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const router = useRouter()

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            })

            if (res.error) {
                setError("Dane logowania nieprawidłowe")
                return
            }

            router.replace("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="w-1/3 mx-auto p-16 shadow-xl rounded-lg bg-zinc-900 border-t-4 border-accent">
            <h1 className="text-center mb-8">Logowanie</h1>
            {error && (
                <p className="mb-6 bg-red-600/50 text-white px-4 py-2 rounded-lg">
                    {error}
                </p>
            )}

            <form className="w-full" onSubmit={handleSubmit}>
                <label htmlFor="email">
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="w-full rounded-lg py-2 px-4 bg-zinc-950 text-white focus:outline-none"
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>
                <label htmlFor="password">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Hasło"
                        className="w-full rounded-lg py-2 px-4 bg-zinc-950 text-white focus:outline-none mt-6"
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>
                <div className="text-center mt-8">
                    <button
                        type="submit"
                        className="bg-zinc-700 px-16 py-2 rounded-lg hover:bg-zinc-800 transition-colors duration-300">
                        Zaloguj
                    </button>
                </div>
            </form>
        </div>
    )
}
export default LoginForm
