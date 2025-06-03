'use client'
import { useEffect } from 'react'

export default function ClientBootstrap() {
  useEffect(() => {
    // Dynamically import Bootstrap JavaScript
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  return null
}