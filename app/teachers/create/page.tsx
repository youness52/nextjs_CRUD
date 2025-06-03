'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function CreateTeacher() {
  const router = useRouter()
  const [Teacher, setStudent] = useState({ name: '', email: '', special: '' })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await fetch('/api/teachers', {
      method: 'POST',
      body: JSON.stringify({ ...Teacher }),
    })
    router.push('/teachers')
  }

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4">Add Teacher</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            placeholder="Name"
            value={Teacher.name}
            onChange={e => setStudent({ ...Teacher, name: e.target.value })}
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
            onChange={e => setStudent({ ...Teacher, email: e.target.value })}
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
            onChange={e => setStudent({ ...Teacher, special: e.target.value })}
            required
            
          />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Add
        </button>
      </form>
    </div>
  )
}
