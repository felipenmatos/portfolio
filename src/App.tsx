
import './App.css'
import { About } from './components/About'
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
    </>
  )
}

export default App
