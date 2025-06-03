import { PrismaClient } from '@prisma/client'
import { writeFile } from 'fs/promises'
import { join } from 'path'
import { NextRequest, NextResponse } from 'next/server'
import formidable from 'formidable'

export const config = {
  api: {
    bodyParser: false,
  },
}

const prisma = new PrismaClient()

export async function GET() {
  const students = await prisma.student.findMany()
  return NextResponse.json(students)
}

export async function POST(req: NextRequest) {
  const formData = await req.formData()

  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const age = parseInt(formData.get('age') as string)
  const file = formData.get('image') as File

  if (!file || !file.name) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  const fileName = `${Date.now()}-${file.name}`
  const filePath = join(process.cwd(), 'public/uploads', fileName)

  await writeFile(filePath, buffer)

  const student = await prisma.student.create({
    data: {
      name,
      email,
      age,
      image: `/uploads/${fileName}`,
    },
  })

  return NextResponse.json(student)
}

