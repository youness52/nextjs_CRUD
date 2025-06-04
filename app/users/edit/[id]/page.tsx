'use client'
import { useRouter, useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function EditStudent() {
  const router = useRouter()
  const params = useParams()
  const [User, setUser] = useState({ name: '', email: '', password: '' })

  useEffect(() => {
    fetch('/api/users/' + params.id)
      .then(res => res.json())
      .then(data =>
        setUser({
          name: data.name,
          email: data.email,
          password: '', // Leave password blank for security and conditional update
        })
      )
  }, [params.id])

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const payload: any = {
      name: User.name,
      email: User.email,
    }

    if (User.password.trim() !== '') {
      payload.password = User.password
    }

    await fetch('/api/users/' + params.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    router.push('/users?message=User%20updated%20successfully');
  }

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4">Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            placeholder="Name"
            value={User.name}
            onChange={e => setUser({ ...User, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={User.email}
            onChange={e => setUser({ ...User, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password (leave empty for no change)</label>
          <input
            type="text"
            className="form-control"
            placeholder="Password"
            value={User.password}
            onChange={e => setUser({ ...User, password: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Update
        </button>
      </form>
    </div>
  )
}
