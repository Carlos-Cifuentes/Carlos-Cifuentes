import React from 'react'
import profileImage from '../assets/perfil.png'


const About = ({ aboutRef }) => {
  return (
    <section ref={aboutRef} id="sobre-mi" className=" text-white py-20 px-6 md:px-20 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Lado izquierdo - texto */}
        <div className="flex justify-center "></div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-left">About Me</h2>
          <p className="mb-4" data-aos="fade-left">
            ¡Hola! Soy un desarrollador full-stack apasionado por crear experiencias web intuitivas y funcionales.
            Me especializo en React, Node.js y diseño responsivo. Disfruto construir soluciones digitales que
            impacten positivamente a las personas y a los negocios.
          </p>
          <p data-aos="fade-left">
            Tengo experiencia trabajando en proyectos desde cero, así como en la mejora de sistemas existentes.
            Me encanta colaborar, aprender constantemente y aplicar buenas prácticas de desarrollo.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
