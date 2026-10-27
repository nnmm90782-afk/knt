import Header    from './components/Header/Header'
import Hero       from './components/sections/Hero/Hero'
import About      from './components/sections/About/About'
import Skills     from './components/sections/Skills/Skills'
import WorkFormat from './components/sections/WorkFormat/WorkFormat'
import Contact    from './components/sections/Contact/Contact'
import Footer     from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Header />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <WorkFormat />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
