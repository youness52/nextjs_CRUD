
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function Profile() {
   const session = await getServerSession(authOptions)
  return (
    <div className="container mt-5">
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Profile</h5>
              <p className="card-text"><strong>Name:</strong> {session.user?.name}</p>
              <p className="card-text"><strong>Email:</strong> {session.user?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
