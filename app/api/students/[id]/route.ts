import { PrismaClient } from '@prisma/client'
import { writeFile } from 'fs/promises'
import { join } from 'path'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(_, { params }) {
  const student = await prisma.student.findUnique({
    where: { id: parseInt(params.id) }
  })
  return Response.json(student)
}



export async function PUT(req, { params }) {
  const formData = await req.formData()

  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const age = parseInt(formData.get('age') as string)
  const file = formData.get('image') as File

  let imagePath = undefined

  if (file && file.name) {
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const fileName = `${Date.now()}-${file.name}`
    const filePath = join(process.cwd(), 'public/uploads', fileName)
    await writeFile(filePath, buffer)
    imagePath = `/uploads/${fileName}`
  }

  const dataToUpdate: any = {
    name,
    email,
    age,
  }

  if (imagePath) {
    dataToUpdate.image = imagePath
  }

  const updated = await prisma.student.update({
    where: { id: parseInt(params.id) },
    data: dataToUpdate,
  })

  return NextResponse.json(updated)
}


export async function DELETE(_, { params }) {
  await prisma.student.delete({
    where: { id: parseInt(params.id) }
  })
  return Response.json({ deleted: true })
}
