'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Createcourse() {
  const router = useRouter()
  const [course, setcourse] = useState({ title: '', description: '', teacherId: '' })
  const [teachers, setTeachers] = useState([])
  const [image, setImage] = useState<File | null>(null)

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
    if (image) {
      formData.append('image', image)
    }

    await fetch('/api/courses', {
      method: 'POST',
      body: formData,
    })

    router.push('/courses')
  }

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4">Add course</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            className="form-control"
            placeholder="Title"
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
          <label className="form-label">Course Image</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={e => setImage(e.target.files?.[0] || null)}
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Add
        </button>
      </form>
    </div>
  )
}
