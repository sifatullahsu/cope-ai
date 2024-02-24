import { useLogin } from 'react-facebook'

const Login = () => {
  const { login, status, isLoading, error } = useLogin()
  const appScope = process.env.NEXT_PUBLIC_FB_SCOPE

  async function handleLogin() {
    try {
      const response = await login({
        scope: appScope
      })

      console.log(response)
    } catch (error: any) {
      console.log(error)
    }
  }

  return (
    <div>
      <button onClick={handleLogin} disabled={isLoading} className="btn">
        Authenticate Facebook
      </button>

      <div className="mt-10">Please look at in the console.</div>
    </div>
  )
}

export default Login
