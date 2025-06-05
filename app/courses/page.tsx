'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import DataTable from 'react-data-table-component'

export default function courseList() {
  const [courses, setcourses] = useState([])

  useEffect(() => {
    fetch('/api/courses')
      .then(res => res.json())
      .then(data => setcourses(data))
  
  }, [])

  const handleDelete = async (id: number) => {
    await fetch('/api/courses/' + id, { method: 'DELETE' })
    setcourses(courses.filter(s => s.id !== id))
  }

  const columns = [
    {
      name: '#',
      selector: (row: any) => row.id,
      sortable: true,
    },
    {
      name: 'Title',
      selector: (row: any) => row.title,
      sortable: true,
    },
    {
      name: 'Description',
      selector: (row: any) => row.description,
      sortable: true,
    },
    {
      name: 'Teacher',
      selector: (row: any) => row.teacherId + ' - ' +row.teacher.name,
      sortable: true,
    },
    {
      name: 'Image',
      cell: (row: any) => (
        <img
          src={row.image || '/uploads/course_avatar.png'}
          alt={row.title}
          width="40"
          height="40"
          className=" border"
          style={{ objectFit: 'cover' }}
        />
      ),
    },
    {
      name: 'Actions',
      cell: (row: any) => (
        <>
          <Link href={`/courses/edit/${row.id}`} className="btn btn-sm btn-warning me-2">
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
        <h1>courses</h1>
        <Link href="/courses/create" className="btn btn-primary">
          Add course
        </Link>
      </div>

      <DataTable
        columns={columns}
        data={courses}
        pagination
        highlightOnHover
        responsive
        striped
        noDataComponent="No courses found."
      />
    </div>
  )
}
