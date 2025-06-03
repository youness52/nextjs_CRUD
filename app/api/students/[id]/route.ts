import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(_, { params }) {
  const student = await prisma.student.findUnique({
    where: { id: parseInt(params.id) }
  })
  return Response.json(student)
}

export async function PUT(req, { params }) {
  const data = await req.json()
  const updated = await prisma.student.update({
    where: { id: parseInt(params.id) },
    data
  })
  return Response.json(updated)
}

export async function DELETE(_, { params }) {
  await prisma.student.delete({
    where: { id: parseInt(params.id) }
  })
  return Response.json({ deleted: true })
}
