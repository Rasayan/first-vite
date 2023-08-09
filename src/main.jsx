import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar.jsx'
import MainBody from './MainBody.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Contact from './Contact.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <MainBody />
    <About />
    <Skills />
    <Contact />
  </React.StrictMode>,
)
