'use client'
import { useRouter, useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function EditStudent() {
  const router = useRouter()
  const params = useParams()
  const [student, setStudent] = useState({ name: '', email: '', age: '' })

  useEffect(() => {
    fetch('/api/students/' + params.id)
      .then(res => res.json())
      .then(data => setStudent({ ...data, age: data.age.toString() }))
  }, [params.id])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await fetch('/api/students/' + params.id, {
      method: 'PUT',
      body: JSON.stringify({ ...student, age: parseInt(student.age) }),
    })
    router.push('/students')
  }

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4">Edit Student</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="btn btn-primary w-100">
          Update
        </button>
      </form>
    </div>
  )
}
