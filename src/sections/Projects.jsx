import React from 'react'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/ProjectsData.js';

const Projects = ({ projectsRef }) => {
  return (
    <section id="proyectos" ref={projectsRef} className=" py-20 px-6 md:px-20 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" data-aos="fade-up">Projects</h2>

      <div className="grid md:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
