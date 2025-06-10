import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
  const { pathname } = req.nextUrl

  const isAuthPage = pathname.startsWith('/login') 
  const publicPaths = ['/client'] // Add your public pages here
  const isPublicPath = publicPaths.some(path => pathname.startsWith(path))

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  if (isPublicPath) {
    return NextResponse.next()
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
  matcher: ['/', '/students/:path*', '/teachers/:path*', '/dashboard/:path*', '/profile/:path*', '/users/:path*', '/courses/:path*','/login', '/register'],
}
