import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Skills from './components/Skills'
import Honors from './components/Honors'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && (
        <div className="loading-screen">
          <div className="relative">
            <div className="w-8 h-8 border-2 border-ink-muted/20 border-t-accent-500 rounded-full animate-spin" />
          </div>
        </div>
      )}

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Publications />
      <Skills />
      <Honors />
      <Contact />
      <Footer />
    </>
  )
}
