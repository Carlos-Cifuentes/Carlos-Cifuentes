import React from 'react'
import styled from 'styled-components'
import htmlImg from '../assets/html.png'
import cssImg from '../assets/css-3.png'
import phpImg from '../assets/php.png'
import jsImg from '../assets/js.png'
import mysqlImg from '../assets/mysql.png'
import reactImg from '../assets/React.png'
import serverImg from '../assets/sql-server.png'
import bootstrapImg from '../assets/Bootstrap_logo.png'
import tailwindImg from '../assets/tailwind_css.png'
import materialImg from '../assets/Material-UI.png'
import viteImg from '../assets/vitejs.svg'
import figmaImg from '../assets/figma.png'

const skills = [
  { img: htmlImg, alt: 'HTML', position: 1 },
  { img: cssImg, alt: 'CSS', position: 2 },
  { img: jsImg, alt: 'JS', position: 3 },
  { img: reactImg, alt: 'React', position: 4 },
  { img: bootstrapImg, alt: 'Bootstrap', position: 5 },
  { img: tailwindImg, alt: 'Tailwind CSS', position: 6 },
  { img: materialImg, alt: 'Material UI', position: 7 },
  { img: viteImg, alt: 'Vite', position: 8 },
  { img: figmaImg, alt: 'Figma', position: 9 }
];

const Skills = () => {
  return (
    <section id="habilidades" className=" text-white py-20  ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Skills</h2>

      <StyledWrapper>
        <div className="slider " style={{'--width': '140px', '--height': '140px', '--quantity': 9}}>
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
    </section>
  )
}

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: 100%;
    padding: 15px;
    border-radius: 8px;
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
  .slider:hover .item {
    animation-play-state: paused !important;
    filter: grayscale(1);
  }
  .slider .item:hover {
    filter: grayscale(0);
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
  }`;

export default Skills
