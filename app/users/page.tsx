'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import DataTable from 'react-data-table-component'
import { useSearchParams } from 'next/navigation';


export default function UserList() {
  const [Users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [search, setSearch] = useState('')

  const searchParams = useSearchParams();
  const message = searchParams.get('message');

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setFilteredUsers(data)
      })
  }, [])

  useEffect(() => {
    const result = Users.filter(t =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.email.toLowerCase().includes(search.toLowerCase()) ||
      t.password.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredUsers(result)
  }, [search, Users])

  const handleDelete = async (id: number) => {
    await fetch('/api/users/' + id, { method: 'DELETE' })
    const updated = Users.filter(t => t.id !== id)
    setUsers(updated)
    setFilteredUsers(updated)
  }

  const columns = [
    {
      name: 'ID',
      selector: (row: any) => row.id,
      sortable: true,
    },
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
      name: 'Actions',
      cell: (row: any) => (
        <>
          <Link href={`/users/edit/${row.id}`} className="btn btn-sm btn-warning me-2">
            Edit
          </Link>
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to delete this user ?")) {
                handleDelete(row.id);
              }
            }}
            className="btn btn-sm btn-danger"
          >
            Delete
          </button>
        </>
      ),
    },
  ]

  return (
    <div className="container mt-5">
      {message && (
        <div className="alert alert-success alert-dismissible">
          <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
          {message}
        </div>
      )}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Users</h1>
        <Link href="/users/create" className="btn btn-primary">
          Add User
        </Link>
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name, email or ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <DataTable
        columns={columns}
        data={filteredUsers}
        pagination
        highlightOnHover
        responsive
        striped
        noDataComponent="No Users found."
      />
    </div>
  )
}
