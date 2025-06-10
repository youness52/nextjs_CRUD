'use client'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e: any) => {
    e.preventDefault()
    setError('') // Reset previous error

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })

    if (res?.error) {
      setError('Email or password is incorrect.')
    } else {
       window.location.href = '/dashboard' //router.push('/dashboard')
    }
  }

  return (
   <div className="container d-flex justify-content-center align-items-center vh-100">
  <form onSubmit={handleLogin} className="border p-4 rounded shadow" style={{ width: '100%', maxWidth: '400px' }}>
    <h2 className="text-center mb-4">Admin Login</h2>

    {error && <div className="alert alert-danger">{error}</div>}

    <div className="mb-3">
      <label className="form-label">Email</label>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
    </div>
    <div className="mb-3">
      <label className="form-label">Password</label>
      <input
        type="password"
        className="form-control"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
    </div>
    <button type="submit" className="btn btn-primary w-100">Login</button>

    {/* Register Link */}
  
  </form>
</div>

  )
}
