import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Component {...pageProps} />
      <footer>
        <Footer />
      </footer>
    </>
  )
}
