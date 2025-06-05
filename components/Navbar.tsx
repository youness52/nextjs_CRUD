'use client'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation' // 👈 New import


export default function Navbar({ session }: { session: any }) {
  const pathname = usePathname() // 👈 Current route
  const isActive = (path: string) => pathname.startsWith(path) ? 'nav-link active' : 'nav-link'

  useEffect(() => {
    // Ensure Bootstrap JavaScript is loaded for dropdown functionality
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">School Manager</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {session ? (
            <>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link href="/dashboard" className={isActive('/dashboard')}>Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link href="/students" className={isActive('/students')}>Students</Link>
                </li>
                <li className="nav-item">
                  <Link href="/teachers" className={isActive('/teachers')}>Teachers</Link>
                </li>
                 <li className="nav-item">
                  <Link href="/courses" className={isActive('/courses')}>Courses</Link>
                </li>
                <li className="nav-item">
                  <Link href="/users" className={isActive('/users')}>Users</Link>
                </li>
              </ul>

              <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown">
                  <button
                    className="nav-link dropdown-toggle btn btn-link text-decoration-none"
                    type="button"
                    id="userDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      border: 'none',
                      background: 'transparent',
                      color: 'rgba(255, 255, 255, 0.75)',
                      padding: '0.5rem 1rem'
                    }}
                  >
                    {session.user?.name || session.user?.email || 'User'}
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                    <li>
                      <Link href="/profile" className="dropdown-item">
                        Profile
                      </Link>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button
                        className="dropdown-item"
                        type="button"
                        onClick={() => signOut({ callbackUrl: '/login' })}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </>
          ) : (
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link href="/register" className="nav-link">Register</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  )
}