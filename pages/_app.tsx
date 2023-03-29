import '@/styles/globals.css'
import { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return (
    <div style={{ visibility: !mounted ? 'hidden' : 'visible' }}>
      <Component {...pageProps} />
      </div>
  )
}
