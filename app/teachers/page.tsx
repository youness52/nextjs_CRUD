'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import DataTable from 'react-data-table-component'

export default function TeacherList() {
  const [teachers, setTeachers] = useState([])
  const [filteredTeachers, setFilteredTeachers] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('/api/teachers')
      .then(res => res.json())
      .then(data => {
        setTeachers(data)
        setFilteredTeachers(data)
      })
  }, [])

  useEffect(() => {
    const result = teachers.filter(t =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.email.toLowerCase().includes(search.toLowerCase()) ||
      t.special.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredTeachers(result)
  }, [search, teachers])

  const handleDelete = async (id: number) => {
    await fetch('/api/teachers/' + id, { method: 'DELETE' })
    const updated = teachers.filter(t => t.id !== id)
    setTeachers(updated)
    setFilteredTeachers(updated)
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
      name: 'Special',
      selector: (row: any) => row.special,
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row: any) => (
        <>
          <Link href={`/teachers/edit/${row.id}`} className="btn btn-sm btn-warning me-2">
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
        <h1>Teachers</h1>
        <Link href="/teachers/create" className="btn btn-primary">
          Add Teacher
        </Link>
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name, email or special..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <DataTable
        columns={columns}
        data={filteredTeachers}
        pagination
        highlightOnHover
        responsive
        striped
        noDataComponent="No teachers found."
      />
    </div>
  )
}
