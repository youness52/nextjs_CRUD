'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import DataTable from 'react-data-table-component'

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

  const columns = [
    {
      name: 'Name',
      selector: (row: any) => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row: any) => row.email,
      sortable: true,
    },
    {
      name: 'Age',
      selector: (row: any) => row.age,
      sortable: true,
    },
    {
      name: 'Image',
      cell: (row: any) => (
        <img
          src={row.image || '/uploads/graduated.png'}
          alt={row.name}
          width="40"
          height="40"
          className="rounded-circle border"
          style={{ objectFit: 'cover' }}
        />
      ),
    },
    {
      name: 'Actions',
      cell: (row: any) => (
        <>
          <Link href={`/students/edit/${row.id}`} className="btn btn-sm btn-warning me-2">
            Edit
          </Link>
          <button onClick={() => handleDelete(row.id)} className="btn btn-sm btn-danger">
            Delete
          </button>
        </>
      ),
    },
  ]

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Students</h1>
        <Link href="/students/create" className="btn btn-primary">
          Add Student
        </Link>
      </div>

      <DataTable
        columns={columns}
        data={students}
        pagination
        highlightOnHover
        responsive
        striped
        noDataComponent="No students found."
      />
    </div>
  )
}
