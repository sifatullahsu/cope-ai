import { signIn, useSession } from 'next-auth/react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import toast from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession()

  console.log(session)

  const loginHandler = async () => {
    const res = await signIn('credentials', {
      email: 'personal.sifat@gmail.com',
      password: '12345',
      redirect: false,
      callbackUrl: ''
    })

    if (res?.ok) {
      toast.success('Login successfull.')
    } else {
      toast.error('Somthing is wrong. Try again.')
    }
  }

  return (
    <div className="space-y-5 p-10">
      <h1>Home Page</h1>
      <div>
        <button className="btn" onClick={loginHandler}>
          Click Here to Login
        </button>
      </div>
      <div>
        <Link href="/dashboard" className="btn">
          Dashboard
        </Link>
      </div>
    </div>
  )
}
