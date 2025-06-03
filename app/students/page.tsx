'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function StudentList() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch('/api/students')
      .then(res => res.json())
      .then(data => setStudents(data))
  }, [])

  const handleDelete = async (id: number) => {
    await fetch('/api/students/' + id, { method: 'DELETE' })
    setStudents(students.filter(s => s.id !== id))
  }

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Students</h1>
        <Link href="/students/create" className="btn btn-primary">
          Add Student
        </Link>
      </div>

      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s: any) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.age}</td>
                <td>
                  <Link href={`/students/edit/${s.id}`} className="btn btn-sm btn-warning me-2">
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
