'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

export default function Dashboard() {
  const [studentCount, setStudentCount] = useState(0)
  const [teacherCount, setTeacherCount] = useState(0)

  useEffect(() => {
    fetch('/api/students/count')
      .then(res => res.json())
      .then(data => setStudentCount(data.count))
  }, [])

  useEffect(() => {
    fetch('/api/teachers/count')
      .then(res => res.json())
      .then(data => setTeacherCount(data.count))
  }, [])

  const handleLogout = () => {
    signOut({ callbackUrl: '/login' })
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Dashboard</h1>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Students</h5>
              <p className="card-text">Total: {studentCount}</p>
              <Link href="/students" className="btn btn-primary">
                Manage Students
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Teachers</h5>
              <p className="card-text">Total: {teacherCount}</p>
              <Link href="/teachers" className="btn btn-primary">
                Manage Teachers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
