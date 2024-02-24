import Login from '@/components/Login'
import { FacebookProvider } from 'react-facebook'

const TestingPage = () => {
  const appId = process.env.NEXT_PUBLIC_FB_AUTH_ID

  return (
    <div className="space-y-5 p-10">
      <div>Testing</div>

      <FacebookProvider appId={appId as string}>
        <Login />
      </FacebookProvider>
    </div>
  )
}

export default TestingPage
