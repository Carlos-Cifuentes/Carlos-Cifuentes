import React from 'react';
import styled from 'styled-components';
import { FaPhp,FaBootstrap } from 'react-icons/fa';
import { SiPhp,SiCss3 } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import Button from './Button';
  
  const ProjectCard = ({ slug, image, title, description, aos }) => {

    return (
        <StyledWrapper>
        <div className="card" data-aos={aos} data-aos-offset="300" data-aos-duration="900">
            <div
                className="card-image"
                style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <p className="card-title">{title}</p>
            {/*<p className="card-body">{description}</p>
            
            <div className="tecnologias">
                <a className="socialContainer containerOne" href="#">
                <FaBootstrap className="socialSvg linkdinSvg"/>
                </a>
                <a className="socialContainer containerTwo" href="#">
                <SiCss3 className="socialSvg linkdinSvg"/>            
                </a>
                <a className="socialContainer containerThree" href="#">
                <RiJavascriptFill className="socialSvg linkdinSvg"/>
                </a>
                <a className="socialContainer containerFour" href="#">
                <SiPhp className="socialSvg linkdinSvg"/>
                </a>
            </div>*/}
            <div className="mt-2 text-center">
                <Button link={`/project/${slug}`}/>
            </div>
        </div>
      </StyledWrapper>
    );
  };
  
  const StyledWrapper = styled.div`
  .card {
    padding: 15px;
    width: 100%;
    min-height: 300px;
    border-radius: 25px;
    background: rgba(65, 65, 65, 0.308);
    transition: 0.4s;
  }

  .card:hover {
    transform: translateY(-10px);
  }

  .card-title {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    margin: 10px 0 0 10px;
    text-align:center;
  }

  .card-image {
    min-height: 170px;
    border-radius: 15px;
    background-color: #c9c9c9;
  }

  .card-body {
    margin: 13px 0 0 10px;
    color: #c9c9c9;
    font-size: 15px;
  }

  .footer {
    float: right;
    margin: 28px 0 0 18px;
    font-size: 13px;
    color: #636363;
  }

  .by-name {
    font-weight: 700;
  }

  .tecnologias {
    width: 100%;
    height: 80px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px 25px;
    gap: 10px;
  }

  /* for all social containers*/
  .socialContainer {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: rgb(44, 44, 44);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition-duration: .3s;
  }
  /* instagram*/
  .containerOne:hover {
    background-color: #8338ec;
    transition-duration: .3s;
  }
  /* twitter*/
  .containerTwo:hover {
    background-color: #3a86ff;
    transition-duration: .3s;
  }
  /* linkdin*/
  .containerThree:hover {
    background-color: #ffd60a;
    transition-duration: .3s;
  }
  /* Whatsapp*/
  .containerFour:hover {
    background-color: #7678ed;
    transition-duration: .3s;
  }

  .socialContainer:active {
    transform: scale(0.9);
    transition-duration: .3s;
  }

  .socialSvg {
    width: 17px;
  }

  .socialSvg path {
    fill: rgb(255, 255, 255);
  }

  .socialContainer:hover .socialSvg {
    animation: slide-in-top 0.3s both;
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export default ProjectCard;
  