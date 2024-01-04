import { useEffect } from 'react'
import '@/styles/app.scss'
import AOS from 'aos'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init()
  })
  return <Component {...pageProps} />
}
