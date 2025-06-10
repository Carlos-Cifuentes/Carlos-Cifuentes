import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar'
import About from './sections/About'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Cubo from './components/Cubo';
import Footer from './sections/Footer';

function HomePage() {
  const [ubicacionCubo, setUbicacionCubo] = useState('hero');
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);


  useEffect(() => {
    AOS.init({
    });

    const handleScroll = () => {
      if (aboutRef.current && projectsRef.current) {
        const aboutTop = aboutRef.current.getBoundingClientRect().top;
        const projectsTop = projectsRef.current.getBoundingClientRect().top;

        if (projectsTop <= window.innerHeight / 2) {
          setUbicacionCubo('hidden'); // Ocultar cuando entras a Projects
        } else if (aboutTop <= window.innerHeight / 2) {
          setUbicacionCubo('about'); // Entre Hero y About
        } else {
          setUbicacionCubo('hero'); // En Hero
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="app-container pt-14">
        <Navbar />
        <Cubo ubicacion={ubicacionCubo}/>
        <Hero/>
        <About aboutRef={aboutRef}/>
        <Projects projectsRef={projectsRef}/>
        <Skills/>
        <Footer/>
      </div>
    </>
  )
}

export default HomePage
