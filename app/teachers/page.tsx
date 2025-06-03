'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function TeacherList() {
  const [teachers, setTeacher] = useState([])

  useEffect(() => {
    fetch('/api/teachers')
      .then(res => res.json())
      .then(data => setTeacher(data))
  }, [])

  const handleDelete = async (id: number) => {
    await fetch('/api/teachers/' + id, { method: 'DELETE' })
    setTeacher(teachers.filter(s => s.id !== id))
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>teachers</h1>
        <Link href="/teachers/create" className="btn btn-primary">
          Add Teacher
        </Link>
      </div>

      {teachers.length === 0 ? (
        <p>No teachers found.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Special</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((s: any) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.special}</td>
                <td>
                  <Link href={`/teachers/edit/${s.id}`} className="btn btn-sm btn-warning me-2">
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(s.id)} className="btn btn-sm btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
