import React from 'react'
import styled from 'styled-components'
import htmlImg from '../assets/html.png'
import cssImg from '../assets/css-3.png'
import jsImg from '../assets/js.png'
import reactImg from '../assets/React.png'
import bootstrapImg from '../assets/Bootstrap_logo.png'
import tailwindImg from '../assets/tailwind_css.png'
import materialImg from '../assets/Material-UI.png'
import viteImg from '../assets/vitejs.svg'
import figmaImg from '../assets/figma.png'
import csharpImg from '../assets/Csharp.png'
import nodeImg from '../assets/nodejs.png'
import expressImg from '../assets/Express.png'
import mysqlImg from '../assets/mysql.png'
import serverImg from '../assets/sql-server.png'
import mongoImg from '../assets/mongodb.png'
import phpImg from '../assets/php.png'
import jwtImg from '../assets/jwt.png'
import gitImg from '../assets/git.png'
import githubImg from '../assets/github.jpg'
import typescriptImg from '../assets/typescript.png'
import vercelImg from '../assets/vercel.png'
import apirestfulImg from '../assets/rest-api.png'

const backendSkills = [
  { img: nodeImg, alt: 'Node.js', position: 1 },
  { img: expressImg, alt: 'Express.js', position: 2 },
  { img: mysqlImg, alt: 'MySQL', position: 3 },
  { img: serverImg, alt: 'SQL Server', position: 4 },
  { img: mongoImg, alt: 'MongoDB', position: 5 },
  { img: phpImg, alt: 'PHP', position: 6 },
  { img: apirestfulImg, alt: 'Restful APIs', position: 7 },
  { img: jwtImg, alt: 'JWT', position: 8 },
  { img: gitImg, alt: 'Git', position: 9 },
  { img: githubImg, alt: 'GitHub', position: 10 },
  { img: vercelImg, alt: 'Vercel', position: 11 }
];

const skills = [
  { img: htmlImg, alt: 'HTML', position: 1 },
  { img: cssImg, alt: 'CSS', position: 2 },
  { img: jsImg, alt: 'JS', position: 3 },
  { img: reactImg, alt: 'React', position: 4 },
  { img: typescriptImg, alt: 'TypeScript', position: 5 },
  { img: csharpImg, alt: 'C#', position: 6 },
  { img: bootstrapImg, alt: 'Bootstrap', position: 7 },
  { img: tailwindImg, alt: 'Tailwind CSS', position: 8 },
  { img: materialImg, alt: 'Material UI', position: 9 },
  { img: viteImg, alt: 'Vite', position: 10 },
  { img: figmaImg, alt: 'Figma', position: 11 }
];

const Skills = () => {
  return (
    <section id="habilidades" className=" text-white py-20  ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Skills</h2>

      <StyledWrapper>
        <div className="slider " style={{'--width': '100px', '--height': '100px', '--quantity': 11}}>
          <div className="list">
            {skills.map((skill, index) => (
                  <div key={index} className="item" style={{ '--position': skill.position }}>
                    <div className="card">
                      <img src={skill.img} alt={skill.alt} />
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </StyledWrapper>

      <h3 className="text-xl font-semibold text-center mt-10 mb-6"></h3>
<StyledWrapper reverse>
  <div className="slider" reverse="true" style={{ '--width': '100px', '--height': '100px', '--quantity': backendSkills.length }}>
    <div className="list">
      {backendSkills.map((skill, index) => (
        <div key={index} className="item" style={{ '--position': skill.position }}>
          <div className="card">
            <img src={skill.img} alt={skill.alt} />
          </div>
        </div>
      ))}
    </div>
  </div>
</StyledWrapper>
    </section>
  )
}

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: 100%;
    padding: 15px;
    border-radius: 8px;
    background: #056bfa27;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    color: white;
    text-align: center;
  }

  .card p {
    font-size: 14px;
    color: white;
  }

  .slider {
    width: 100%;
    height: var(--height);
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
  }
  .slider .list {
    display: flex;
    width: 100%;
    min-width: calc(var(--width) * var(--quantity));
    position: relative;
  }
  .slider .list .item {
    width: var(--width);
    height: var(--height);
    position: absolute;
    left: 100%;
    animation: autoRun 10s linear infinite;
    transition: filter 0.5s;
    animation-delay: calc(
      (10s / var(--quantity)) * (var(--position) - 1) - 10s
    ) !important;
  }
  .slider .list .item img {
    width: 100%;
  }
  @keyframes autoRun {
    from {
      left: 100%;
    }
    to {
      left: calc(var(--width) * -1);
    }
  }
  
  .slider[reverse="true"] .item {
    animation: reversePlay 10s linear infinite;
  }
  @keyframes reversePlay {
    from {
      left: calc(var(--width) * -1);
    }
    to {
      left: 100%;
    }

  .slider[reverse="true"] .item {
    animation: reversePlay 10s linear infinite;
  }

  @keyframes reversePlay {
    from {
      left: calc(var(--width) * -1);
    }
    to {
      left: 100%;
    }
  }

  }`;


export default Skills
