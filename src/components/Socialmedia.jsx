import { FaLinkedin,FaWhatsapp} from 'react-icons/fa';
import styled from 'styled-components';
import socialLinks from '../data/SocialLinks';

const Socialmedia = () => {
  const whatsappURL = `https://wa.me/${socialLinks.whatsapp.number}?text=${encodeURIComponent(socialLinks.whatsapp.message)}`;

  return (
    <StyledWrapper>
        <div className="tecnologias" 
        data-aos="fade-up"
        data-aos-duration="3000">
          <a className="socialContainer containerOne" 
            href={whatsappURL} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="socialSvg"/>
          </a>
          <a className="socialContainer containerTwo" 
            href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="socialSvg"/>            
          </a>
        </div>
    </StyledWrapper>
    
  )
}

const StyledWrapper = styled.div`
  .tecnologias {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px 10px;
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
    background-color: #25d366;
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

export default Socialmedia
