import mongoConnect from "@/libs/mongodb"
import User from "@/models/user"
import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"

export async function POST(req) {
    try {
        const { name, email, password } = await req.json()
        const hashedPassword = await bcrypt.hash(password, 10)

        await mongoConnect()
        await User.create({ name, email, password: hashedPassword })

        return NextResponse.json({ message: "User created" }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Someting went wrong" })
    }
}
