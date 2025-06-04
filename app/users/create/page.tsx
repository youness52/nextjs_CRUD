'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react'

export default function CreateUser() {
  const router = useRouter()
  const [User, setUser] = useState({ name: '', email: '', password: '' })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ ...User }),
    })
   router.push('/users?message=User%20created%20successfully');


  }

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4">Add User</h2>
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
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="password"
            value={User.password}
            onChange={e => setUser({ ...User, password: e.target.value })}
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
