'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  const register = async (e: any) => {
    e.preventDefault()
    await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(form),
    })
    router.push('/login')
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form onSubmit={register} className="border p-4 rounded shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Register</h2>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            placeholder="Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">Register</button>
        <div className="text-center mt-3">
  <small>
    Already have an account?{' '}
    <a href="/login" className="text-decoration-none">Login</a>
  </small>
</div>
      </form>
    </div>
  )
}
