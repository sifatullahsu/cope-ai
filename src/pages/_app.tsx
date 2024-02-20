import { primaryFont } from '@/fonts'
import '@/styles/globals.css'
import { AppPropsWithLayout } from '@/types'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const { session, ...otherProps } = pageProps
  const getLayout = Component.getLayout ?? (page => page)

  return (
    <div>
      <style jsx global>{`
        :root {
          --font-familjen_grotesk: ${primaryFont.style.fontFamily};
        }
      `}</style>
      {getLayout(<Component {...otherProps} />)}
    </div>
  )
}
