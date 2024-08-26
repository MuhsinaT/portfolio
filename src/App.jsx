import { useState } from 'react'
import './App.css'
import './bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header'
import Home from './Home/Home'
import About from './About/About'
// import Skills from './Skills/Skills';
import Education from './Education/Education';
import Works from './Works/Works';
import Contact from './Contact/Contact';

function App() {

  return (
    <>
      <Header/>
      <Home/>
      <About/>
      {/* <Skills/> */}
      <Education/>
      <Works/>
      <Contact/>
      {/* <Footer/> */}
    </>
  )
}

export default App
