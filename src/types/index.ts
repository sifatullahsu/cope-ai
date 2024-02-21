import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

export type NextLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextLayout
}

export type TChildren = {
  children: ReactNode
}

export type TContent = {
  _id: string
  title: string
  description: string
  image: string
  type: 'image' | 'article'
  status: 'scheduled' | 'success' | 'failed'
  user: string
  scheduleHour: number
  scheduleAt: Date
}
