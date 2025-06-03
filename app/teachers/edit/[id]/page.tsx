'use client'
import { useRouter, useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function EditStudent() {
  const router = useRouter()
  const params = useParams()
  const [Teacher, setTeacher] = useState({ name: '', email: '', special: '' })

  useEffect(() => {
    fetch('/api/teachers/' + params.id)
      .then(res => res.json())
      .then(data => setTeacher({ ...data }))
  }, [params.id])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await fetch('/api/teachers/' + params.id, {
      method: 'PUT',
      body: JSON.stringify({ ...Teacher }),
    })
    router.push('/teachers')
  }

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4">Edit Teacher</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            placeholder="Name"
            value={Teacher.name}
            onChange={e => setTeacher({ ...Teacher, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={Teacher.email}
            onChange={e => setTeacher({ ...Teacher, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">special</label>
          <input
            type="text"
            className="form-control"
            placeholder="special"
            value={Teacher.special}
            onChange={e => setTeacher({ ...Teacher, special: e.target.value })}
            required
           
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Update
        </button>
      </form>
    </div>
  )
}
