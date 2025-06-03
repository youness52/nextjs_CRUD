import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
  const count = await prisma.student.count()
  return Response.json({ count })
}
