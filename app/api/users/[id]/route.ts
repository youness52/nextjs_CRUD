import { PrismaClient } from "@prisma/client"
import { hash } from "bcryptjs"

const prisma = new PrismaClient()

export async function GET(_, { params }) {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) }
  })
  return Response.json(user)
}

export async function PUT(req, { params }) {
  const { name, email, password } = await req.json();

  const data = { name, email };

  if (password && password.trim() !== "") {
    data.password = await hash(password, 10);
  }

  const updated = await prisma.user.update({
    where: { id: parseInt(params.id) },
    data,
  });

  return Response.json(updated);
}

export async function DELETE(_, { params }) {
  await prisma.user.delete({
    where: { id: parseInt(params.id) }
  })
  return Response.json({ deleted: true })
}
