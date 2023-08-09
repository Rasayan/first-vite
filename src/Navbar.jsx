import { useState } from 'react'
import './App.css'

function Navbar() {

  return (
    <div className='nav'>
    <div className="navHead">
      <h1 className='headName'>rasayan</h1>
    </div>
    <div className="list">
      <ul className="navList">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
      </ul>
    </div>
    <div className="contactMe">
      <button className='glow-on-hover'><a href="#contact">Contact Me</a></button>
    </div>
  </div>
  )
}

export default Navbar
