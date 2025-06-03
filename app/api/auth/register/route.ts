import { PrismaClient } from "@prisma/client"
import { hash } from "bcryptjs"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const { name, email, password } = await req.json()
  const exists = await prisma.user.findUnique({ where: { email } })
  if (exists) return Response.json({ error: "User already exists" }, { status: 400 })

  const hashed = await hash(password, 10)
  const user = await prisma.user.create({
    data: { name, email, password: hashed },
  })

  return Response.json({ user })
}
