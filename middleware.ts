import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
  const { pathname } = req.nextUrl

  const isAuthPage = pathname.startsWith('/login') || pathname.startsWith('/register')

  // Redirect '/' to '/dashboard'
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/students/:path*', '/teachers/:path*', '/dashboard/:path*', '/login', '/register'],
}
