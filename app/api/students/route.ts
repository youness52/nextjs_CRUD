import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
  const students = await prisma.student.findMany()
  return Response.json(students)
}

export async function POST(req: Request) {
  const data = await req.json()
  const student = await prisma.student.create({ data })
  return Response.json(student)
}
