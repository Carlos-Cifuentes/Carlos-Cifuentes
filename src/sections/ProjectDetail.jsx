import React from 'react'
import { useParams } from 'react-router-dom'
import projects from '../data/ProjectsData.js';
import Technologies from '../components/Technologies';
import ButtonBack from '../components/ButtonBack.jsx';

const ProjectDetail = () => {
    const { id: slug  } = useParams();
    const project = projects.find(p => p.slug === slug);

    if (!project) return <p className="text-white p-10">Proyecto no encontrado</p>;

  return (
    <div className="p-10">
      {/* Columna izquierda: imagen */}
      <div >
        <ButtonBack/>
      </div>
      
      <div className=" text-white grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden">
        {/* Columna izquierda: imagen */}
        <div>
          <img src={project.image} alt={project.title} className="w-full rounded-lg shadow-lg" />
        </div>

        {/* Columna derecha: título y descripción */}
        <div>
          <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
          <div className="flex flex-wrap gap-4">
            {/* Bloque: Compañía */}
            <div className="mb-4 border-l-2 border-l-green-400 pl-2" >
              <p className="text-sm text-gray-400">Company:</p>
              <p className="text-sm font-semibold" data-aos="fade-left">{project.company}</p>
            </div>

            {/* Bloque: Ubicación */}
            <div className="mb-4 border-l-2 border-l-green-400 pl-2" >
              <p className="text-sm text-gray-400">Location:</p>
              <p className="text-sm font-semibold" data-aos="fade-left">{project.location}</p>
            </div>

            {/* Bloque: Sitio web */}
            <div className="mb-4 border-l-2 border-l-green-400 pl-2" >
              <p className="text-sm text-gray-400">Website:</p>
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-blue-400 hover:underline"
                data-aos="fade-left"
              >
                {project.website}
              </a>
            </div>
          </div>
          <p className="text-sm text-gray-400">Objective:</p>
          <p className="text-lg leading-relaxed mb-4" data-aos="fade-left">{project.objective}</p>
          <Technologies techList={project.technologies}/>
        </div>
      </div>
    </div>
    
  )
}

export default ProjectDetail
