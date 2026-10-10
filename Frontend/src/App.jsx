import { useState } from 'react'
import './App.css'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Navbar from './Component/Navbar'
import ProjectCard from './Component/ProjectCard'
import SectionTitle from './Component/SectionTitle'
import SkillCard from './Component/SkillCard'
import SocialLinks from './Component/SocialLinks'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Journey from './sections/Journey'
import Contact from './sections/Contact'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Journey/>
    <Contact/>
    <Footer/>
  
    </>
  )
}
export default App;