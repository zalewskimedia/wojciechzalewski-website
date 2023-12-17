import mongoConnect from "@/libs/mongodb"
import Skill from "@/models/skill"
import { NextResponse } from "next/server"

export async function PUT(req, { params }) {
    const { id } = params
    const {
        newName: name,
        newExperience: experience,
        newImage: image,
        newProgress: progress,
    } = await req.json()
    await mongoConnect()
    await Skill.findByIdAndUpdate(id, { name, experience, image, progress })
    return NextResponse.json({ message: "Skill updated" }, { status: 200 })
}

export async function GET(req, { params }) {
    const { id } = params
    await mongoConnect()
    const skill = await Skill.findOne({ _id: id })
    return NextResponse.json({ skill }, { status: 200 })
}
