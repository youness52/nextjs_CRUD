import { PrismaClient } from '@prisma/client'
import { writeFile } from 'fs/promises'
import { join } from 'path'
import { NextRequest, NextResponse } from 'next/server'


export const config = {
  api: {
    bodyParser: false,
  },
}

const prisma = new PrismaClient()

export async function GET() {
  const courses = await prisma.course.findMany({
    include: {
      teacher: {
        select: {
          name: true,
        },
      },
    },
  });

  return NextResponse.json(courses);
}
export async function POST(req: NextRequest) {
  const formData = await req.formData()

  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const file = formData.get('image') as File
 const teacherId = parseInt(formData.get('teacherId') as string, 10);


  if (!file || !file.name) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  const fileName = `${Date.now()}-${file.name}`
  const filePath = join(process.cwd(), 'public/uploads', fileName)

  await writeFile(filePath, buffer)

  const course = await prisma.course.create({
    data: {
      title,
      description,
      image: `/uploads/${fileName}`,
      teacherId,
    },
  })

  return NextResponse.json(course)
}

