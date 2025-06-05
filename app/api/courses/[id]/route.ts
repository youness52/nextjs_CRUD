import { PrismaClient } from '@prisma/client'
import { writeFile } from 'fs/promises'
import { join } from 'path'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(_, { params }) {
  const course = await prisma.course.findUnique({
    where: { id: parseInt(params.id) }
  })
  return Response.json(course)
}



export async function PUT(req, { params }) {
  const formData = await req.formData()

  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const teacherId = parseInt(formData.get('teacherId') as string)
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
    title,
    description,
    teacherId,
  }

  if (imagePath) {
    dataToUpdate.image = imagePath
  }

  const updated = await prisma.course.update({
    where: { id: parseInt(params.id) },
    data: dataToUpdate,
  })

  return NextResponse.json(updated)
}


export async function DELETE(_, { params }) {
  await prisma.course.delete({
    where: { id: parseInt(params.id) }
  })
  return Response.json({ deleted: true })
}
