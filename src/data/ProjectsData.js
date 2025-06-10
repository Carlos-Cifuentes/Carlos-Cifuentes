import enarmImg from '../assets/enarm.png'
import guanajuatoImg from '../assets/guanajuatotooling.png'
import costenaImg from '../assets/costenatravel.png'
import osscImg from '../assets/ossc2.png'
import tusofoImg from '../assets/tusofo.png'
import ctsImg from '../assets/cts.png'
import crmImg from '../assets/crm.png'

const projects = [
    {
      id: 1,
      slug: "enarm",
      title: 'ENARM',
      description: 'Plataforma educativa orientada al ENARM, con cuestionarios y contenido especializado para aspirantes a residencias médicas.',
      objective:'Desarrollar una plataforma web especializada en la evaluación y preparación de aspirantes al ENARM, mediante la implementación de encuestas interactivas tipo test, casos clínicos y análisis de resultados. ',
      image: enarmImg,
      company: "Nautilus 360",
      location: "Guadalajara, Jalisco",
      website: 'https://enarm.com.mx/',
      technologies: ['javascript', 'php', 'mysql', 'phpmailer','paypal', 'seo'],
      aos: 'fade-right'
    },
    {
      id: 2,
      slug: "costena-travel",
      title: 'Costeña Travel',
      description: 'Plataforma turístico con panel administrativo, gestión dinámica de destinos y comunicación directa vía WhatsApp.',
      objective:'Desarrollar una plataforma web especializada en la promoción y reserva de tours turísticos en Cartagena de Indias, permitiendo a los usuarios explorar experiencias de viaje y reservar de forma directa a través de WhatsApp y correo electrónico. La arquitectura del sitio permite escalar fácilmente para colaborar con agencias de viajes en Colombia.',
      image: costenaImg,
      company: "Nautilus 360",
      location: "Guadalajara, Jalisco",
      website: 'https://costenatravel.com/',
      technologies: ['javascript', 'php', 'mysql', 'phpmailer','wompi'],
      aos: 'fade-up'
    },
    {
      id: 3,
      slug: "ossc",
      title: 'OSSC Software de Nómina y Capital',
      description: 'Plataforma informativa enfocada en seguridad social complementaria, con recursos descargables y estructura accesible.',
      objective: 'Desarrollar una plataforma integral que ofrezca la gestión del capital humano, la automatización y optimización de los procesos clave relacionados con la administración de personal en empresas de cualquier tamaño o giro.',
      image: osscImg,
      company: "Nautilus 360",
      location: "Guadalajara, Jalisco",
      website: 'https://360-n.com/OSSC/',
      technologies: ['javascript', 'php', 'mysql'],
      aos: 'fade-left'
    },
    {
      id: 4,
      slug: "guanajuato-tooling",
      title: 'Guanajuato Tooling',
      description: 'Sitio web empresarial con catálogo de productos industriales para su venta, desarrollo y servicios para sectores públicos y privados.',
      objective: 'Desarrollar una plataforma web informativa y profesional para Guanajuato Tooling, enfocada en presentar sus servicios especializados en la venta, desarrollo, construcción y mantenimiento de maquinaria, herramientas y prototipos para los sectores automotriz, aeronáutico, industrial y público/privado. ',
      image: guanajuatoImg,
      company: "Nautilus 360",
      location: "Guadalajara, Jalisco",
      website: 'https://guanajuatotooling.com.mx/',
      technologies: ['javascript', 'php', 'mysql', 'lazyload'],
      aos: 'fade-right'
    },
    {
      id: 5,
      slug: "tusofo",
      title: 'TuSofo',
      description: 'Página institucional moderna para una SOFOM, con información clara sobre servicios financieros, contacto y enlaces clave.',
      image: tusofoImg,
      company: "Nautilus 360",
      location: "Guadalajara, Jalisco",
      website: 'https://360-n.com/tusofo/',
      technologies: ['javascript', 'php', 'mysql'],
      aos: 'fade-up'
    },
    {
      id: 6,
      slug: "sistema-integral-servicios-medicos",
      title: 'Sistema Integral de Servicios Médicos',
      description: 'Diseño y desarrollo de una plataforma web médica con múltiples funciones para atención prehospitalaria y gestión clínica.',
      image: crmImg,
      company: "Cruz Roja",
      location: "Huejutla, Hidalgo",
      website: 'https://publica-pagina-cruz-roja.vercel.app/',
      technologies: ['javascript', 'sqlserver','apirest','typescript','github','vercel', 'paypal'],
      aos: 'fade-left'
    }
];

export default projects;