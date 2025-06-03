import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '@/components/Navbar'
import ClientBootstrap from '@/components/ClientBootstrap'

export const metadata = {
  title: 'School Manager',
  description: 'School Management System',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body>
        <ClientBootstrap />
        <Navbar session={session} />
        {children}
      </body>
    </html>
  )
}