import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
  const teachers = await prisma.teacher.findMany()
  return Response.json(teachers)
}

export async function POST(req: Request) {
  const data = await req.json()
  const teacher = await prisma.teacher.create({ data })
  return Response.json(teacher)
}
