import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      _id: string
      name: string
      email: string
      scheduleHour: number
      accessToken: string
    }
  }
}
