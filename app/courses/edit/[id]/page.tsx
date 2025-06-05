'use client'
import { useRouter, useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Editcourse() {
  const router = useRouter()
  const params = useParams()
  const [course, setcourse] = useState({ title: '', description: '', teacherId: '', image: '' })
  const [newImage, setNewImage] = useState<File | null>(null)
  const [teachers, setTeachers] = useState([])
  useEffect(() => {
    fetch('/api/courses/' + params.id)
      .then(res => res.json())
      .then(data => setcourse({ ...data }))
  }, [params.id])

  useEffect(() => {
    fetch('/api/teachers') // your API endpoint
      .then(res => res.json())
      .then(data => setTeachers(data))
  }, [])

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('title', course.title)
    formData.append('description', course.description)
    formData.append('teacherId', course.teacherId)
    if (newImage) {
      formData.append('image', newImage)
    }

    await fetch('/api/courses/' + params.id, {
      method: 'PUT',
      body: formData,
    })

    router.push('/courses')
  }

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4">Edit course</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">title</label>
          <input
            className="form-control"
            value={course.title}
            onChange={e => setcourse({ ...course, title: e.target.value })}
            required
          />
        </div>
       <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            placeholder="Description"
            value={course.description || ''} // ensures controlled input
            onChange={e => setcourse({ ...course, description: e.target.value })}
            required
          />
        </div>
       <div className="mb-3">
          <label className="form-label">Teacher</label>
          <select
            className="form-select"
            value={course.teacherId}
            onChange={e => setcourse({ ...course, teacherId: e.target.value })}
            required
          >
            <option value="">Select a teacher</option>
            {teachers.map((teacher: any) => (
              <option key={teacher.id} value={teacher.id}>
                {teacher.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Current Image</label><br />
          <img src={course.image || '/uploads/course_avatar.png'} alt="course" width={100} />
        </div>
        <div className="mb-3">
          <label className="form-label">New Image (optional)</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={e => setNewImage(e.target.files?.[0] || null)}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Update
        </button>
      </form>
    </div>
  )
}
