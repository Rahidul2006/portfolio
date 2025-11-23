import Header from './components/Header'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Availability from './components/Availability'
import Contact from './components/Contact'
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Expertise />
      {/* <Milestones /> */}
      <Projects />
      <About />
      <Skills />
      <Certifications />
      <Availability />
      <Contact />
    </>
  )
}
