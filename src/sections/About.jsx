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
            Soy un desarrollador full-stack con experiencia en la creación de aplicaciones web modernas, intuitivas y funcionales, lo que me permite abordar proyectos de forma integral, desde la interfaz de usuario hasta la lógica del servidor.
          </p>
          <p className="mb-4" data-aos="fade-left">
            He trabajado tanto en el desarrollo de proyectos desde cero como en la optimización y mejora de sistemas existentes, aplicando buenas prácticas de programación y diseño responsivo.
          </p>
          <p data-aos="fade-left">
            Disfruto colaborar con equipos multidisciplinarios, aportar soluciones eficientes y aprender continuamente para mantenerme al día con las tendencias tecnológicas.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
