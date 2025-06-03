'use client'
import { useRouter, useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function EditStudent() {
  const router = useRouter()
  const params = useParams()
  const [student, setStudent] = useState({ name: '', email: '', age: '', image: '' })
  const [newImage, setNewImage] = useState<File | null>(null)

  useEffect(() => {
    fetch('/api/students/' + params.id)
      .then(res => res.json())
      .then(data => setStudent({ ...data, age: data.age.toString() }))
  }, [params.id])

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('name', student.name)
    formData.append('email', student.email)
    formData.append('age', student.age)
    if (newImage) {
      formData.append('image', newImage)
    }

    await fetch('/api/students/' + params.id, {
      method: 'PUT',
      body: formData,
    })

    router.push('/students')
  }

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4">Edit Student</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            value={student.name}
            onChange={e => setStudent({ ...student, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={student.email}
            onChange={e => setStudent({ ...student, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            value={student.age}
            onChange={e => setStudent({ ...student, age: e.target.value })}
            required
            min={0}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Current Image</label><br />
          <img src={student.image || '/uploads/graduated.png'} alt="Student" width={100} />
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
