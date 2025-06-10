import React from 'react'
import logo from '../assets/ccc.png'

const Navbar = () => {
  return (
    <nav className="bg-[#000000] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-18 py-3 flex justify-between items-center">
        <a href="#inicio">
          <img src={logo} alt="Logo" className="h-10 md:h-12 w-auto" />
        </a>
        <ul className="hidden md:flex space-x-6 font-medium menu">
          <li><a href="#inicio" className="nav-link" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" >Home</a></li>
          <li><a href="#sobre-mi" className="nav-link" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">About Me</a></li>
          <li><a href="#proyectos" className="nav-link" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">Projects</a></li>
          <li><a href="#habilidades" className="nav-link" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">Skills</a></li>
        </ul>
      </div>
    </nav>
  )
}



export default Navbar
