import mongoose, { Schema, models } from "mongoose"

const skillSchema = new Schema(
    {
        name: String,
        experience: Number,
        image: String,
        progress: Number,
    },
    {
        timestamps: true,
    }
)

const Skill = models.Skill || mongoose.model("Skill", skillSchema)

export default Skill
