
import './App.css'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Project } from './components/Project'
import { Service } from './components/Services'
import { Skills } from './components/Skills'
import { Testimonials } from './components/Testimonials'


function App() {

  return (
    <>
      <Hero />
      <About />
      <Service />
      <Project />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
