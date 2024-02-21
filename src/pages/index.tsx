import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  const { data: session } = useSession()
  const { push } = useRouter()

  console.log(session)

  const loginHandler = async () => {
    await signIn('credentials', {
      email: 'personal.sifat@gmail.com',
      password: '12345',
      redirect: true,
      callbackUrl: '/dashboard'
    })
  }

  const logoutHandler = async () => {
    await signOut({ redirect: true, callbackUrl: '/' })
  }

  return (
    <div className="space-y-5 p-10">
      <h1>Home Page</h1>
      <div>
        {!session ? (
          <button className="btn" onClick={loginHandler}>
            Click Here to Login
          </button>
        ) : (
          <button className="btn" onClick={logoutHandler}>
            Logout
          </button>
        )}
      </div>
      <div>
        <Link href="/dashboard" className="btn">
          Dashboard
        </Link>
      </div>
    </div>
  )
}
