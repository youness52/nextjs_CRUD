import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(_, { params }) {
  const teacher = await prisma.teacher.findUnique({
    where: { id: parseInt(params.id) }
  })
  return Response.json(teacher)
}

export async function PUT(req, { params }) {
  const data = await req.json()
  const updated = await prisma.teacher.update({
    where: { id: parseInt(params.id) },
    data
  })
  return Response.json(updated)
}

export async function DELETE(_, { params }) {
  await prisma.teacher.delete({
    where: { id: parseInt(params.id) }
  })
  return Response.json({ deleted: true })
}
