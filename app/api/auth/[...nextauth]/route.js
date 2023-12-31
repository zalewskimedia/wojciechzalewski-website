import mongoConnect from "@/libs/mongodb"
import User from "@/models/user"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const { email, password } = credentials

                try {
                    await mongoConnect()
                    const user = await User.findOne({ email })

                    if (!user) {
                        return null
                    }

                    const passwordsMatch = await bcrypt.compare(
                        password,
                        user.password
                    )

                    if (!passwordsMatch) {
                        return null
                    }

                    return user
                } catch (error) {
                    console.log(error)
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/admin-login",
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
