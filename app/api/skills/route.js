import mongoConnect from "@/libs/mongodb"
import Skill from "@/models/skill"
import { NextResponse } from "next/server"

export async function POST(req) {
    const { name, experience, image, progress } = await req.json()
    await mongoConnect()
    await Skill.create({ name, experience, image, progress })
    return NextResponse.json({ message: "Skill created" }, { status: 201 })
}

export async function GET() {
    await mongoConnect()
    const skills = await Skill.find()
    return NextResponse.json({ skills })
}

export async function DELETE(req) {
    const id = req.nextUrl.searchParams.get("id")
    await mongoConnect()
    await Skill.findByIdAndDelete(id)
    return NextResponse.json({ message: "Skill deleted" }, { status: 200 })
}
