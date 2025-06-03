'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function CreateStudent() {
  const router = useRouter()
  const [student, setStudent] = useState({ name: '', email: '', age: '' })
  const [image, setImage] = useState<File | null>(null)

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('name', student.name)
    formData.append('email', student.email)
    formData.append('age', student.age)
    if (image) {
      formData.append('image', image)
    }

    await fetch('/api/students', {
      method: 'POST',
      body: formData,
    })

    router.push('/students')
  }

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4">Add Student</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            placeholder="Name"
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
            placeholder="Email"
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
            placeholder="Age"
            value={student.age}
            onChange={e => setStudent({ ...student, age: e.target.value })}
            required
            min={0}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Profile Image</label>
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
