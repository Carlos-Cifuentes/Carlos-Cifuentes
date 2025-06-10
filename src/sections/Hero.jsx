import styled from 'styled-components';
import Cubo from '../components/Cubo';
import ButtonCV from '../components/ButtonCV';
import Socialmedia from '../components/Socialmedia';

const Hero = () => {
  return (
    <section id="inicio" className=" text-white min-h-screen flex items-center px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">
        <div >
          <StyledWrapper>
            <div className="loader">
              <span>&lt;</span>
              <span>DEVELOPER</span>
              <span>/&gt;</span>
            </div>
          </StyledWrapper>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight" data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="600"
            data-aos-offset="0">
            Carlos Cifuentes
          </h1>
          <p className="text-gray-300 mb-6" data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="600"
            data-aos-offset="0">
            Full-stack developer <br />
            Transformo ideas en productos digitales funcionales.
          </p>
          <div className="flex items-center w-full">
            <ButtonCV />
            <Socialmedia/>
          </div>
        </div>

        <div className="w-full flex items-center justify-center overflow-hidden">
          {/* Lado derecho 
          <div className="max-w-[400px] max-h-[400px] w-full h-full flex items-center justify-center">
            <Cubo/>
          </div>*/}
        </div>
      </div>
    </section>
  )
}

const StyledWrapper = styled.div`
  .loader {
    font-size: 2em;
    font-weight: 900;
  }
  .loader > * {
    color: #00FF00;
  }
  .loader span {
    display: inline-flex;
  }
  .loader span:nth-child(2) {
    letter-spacing: -1em;
    overflow: hidden;
    animation: reveal 1s cubic-bezier(0.645, 0.045, 0.355, 1); 
    animation-fill-mode: forwards;
  }
  @keyframes reveal {
    0% {
      opacity: 0.5;
      letter-spacing: -1em;
    }
    100% {
      opacity: 1;
      letter-spacing: 0em;
    }
  }`;

export default Hero
