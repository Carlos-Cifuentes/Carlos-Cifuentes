import React from 'react'
import styled from 'styled-components';

const Cubo = ({ ubicacion }) => {
  return (
    <StyledWrapper className={`${ubicacion === 'about' ? 'en-about' : ''} ${ubicacion === 'hidden' ? 'hidden' : ''}`}>
        <div className="spinner">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="spinner2">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  /*position: relative;
  width: 300px;
  height: 300px;
  margin: auto;
  */

  position: fixed;
  top: 50%;
  left: 75%;
  transition: all 0.8s ease;
  z-index: 100;
  opacity: 1;
  pointer-events: auto;

  &.en-about {
    right: auto;
    left: 25%;
    top: 50%;
    transform: scale(1) rotate(20deg);
  }

  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
  .spinner, .spinner2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
    transform: translate(-50%, -50%);
  }

  .spinner{
    width: 80px;
    height: 80px;
    animation: spinner-y0fdc1 15s forwards infinite ease;
    }

    .spinner > div {
    height: 100%;
    position: absolute;
    width: 100%;
    border: 2px solid #f8c828;
  }

  .spinner div:nth-of-type(1) {
    transform: translateZ(-40px) rotateY(180deg);
  }

  .spinner div:nth-of-type(2) {
    transform: rotateY(-270deg) translateX(50%);
    transform-origin: top right;
  }

  .spinner div:nth-of-type(3) {
    transform: rotateY(270deg) translateX(-50%);
    transform-origin: center left;
  }

  .spinner div:nth-of-type(4) {
    transform: rotateX(90deg) translateY(-50%);
    transform-origin: top center;
  }

  .spinner div:nth-of-type(5) {
    transform: rotateX(-90deg) translateY(50%);
    transform-origin: bottom center;
  }

  .spinner div:nth-of-type(6) {
    transform: translateZ(40px);
  }

  .spinner2 {
    width: 160px;
    height: 160px;
    animation: spinner-y0fdc2 15s forwards infinite ease;
  }

  .spinner2 > div {
    height: 100%;
    position: absolute;
    width: 100%;
    border: 2px solid #ffffff;
  }

  .spinner2 div:nth-of-type(1) {
    transform: translateZ(-80px) rotateY(180deg);
  }

  .spinner2 div:nth-of-type(2) {
    transform: rotateY(-270deg) translateX(50%);
    transform-origin: top right;
  }

  .spinner2 div:nth-of-type(3) {
    transform: rotateY(270deg) translateX(-50%);
    transform-origin: center left;
  }

  .spinner2 div:nth-of-type(4) {
    transform: rotateX(90deg) translateY(-50%);
    transform-origin: top center;
  }

  .spinner2 div:nth-of-type(5) {
    transform: rotateX(-90deg) translateY(50%);
    transform-origin: bottom center;
  }

  .spinner2 div:nth-of-type(6) {
    transform: translateZ(80px);
  }

  @keyframes spinner-y0fdc1 {
    0% {
      transform: translate(-50%, -50%) rotate(0deg) rotateX(0deg) rotateY(0deg);
    }
    24% {
      transform: translate(-50%, -50%) rotate(0deg) rotateX(360deg) rotateY(360deg);
      width: 80px;
      height: 80px;
    }
    25% {
      transform: translate(-50%, -50%) rotate(0deg) rotateX(360deg) rotateY(360deg);
      width: 176px;
      height: 176px;
    }
    50% {
      transform: translate(-50%, -50%) rotate(225deg) rotateX(360deg) rotateY(360deg);
      width: 176px;
      height: 176px;
    }
    75% {
      transform: translate(-50%, -50%) rotate(0deg) rotateX(360deg) rotateY(360deg);
      width: 176px;
      height: 176px;
    }
    76% {
      transform: translate(-50%, -50%) rotate(0deg) rotateX(360deg) rotateY(360deg);
      width: 80px;
      height: 80px;
    }
    96% {
      transform: translate(-50%, -50%) rotate(0deg) rotateX(0deg) rotateY(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(0deg) rotateX(0deg) rotateY(0deg);
    }
  }

  @keyframes spinner-y0fdc2 {
    0% {
      transform: translate(-50%, -50%) rotate(45deg) rotateX(0deg) rotateY(0deg);
    }
    24% {
      transform: translate(-50%, -50%) rotate(45deg) rotateX(-360deg) rotateY(-360deg);
      width: 160px;
      height: 160px;
    }
    25% {
      transform: translate(-50%, -50%) rotate(45deg) rotateX(-360deg) rotateY(-360deg);
      width: 176px;
      height: 176px;
    }
    50% {
      transform: translate(-50%, -50%) rotate(-180deg) rotateX(-360deg) rotateY(-360deg);
      width: 176px;
      height: 176px;
    }
    75% {
      transform: translate(-50%, -50%) rotate(45deg) rotateX(-360deg) rotateY(-360deg);
      width: 176px;
      height: 176px;
    }
    76% {
      transform: translate(-50%, -50%) rotate(45deg) rotateX(-360deg) rotateY(-360deg);
      width: 160px;
      height: 160px;
    }
    96% {
      transform: translate(-50%, -50%) rotate(45deg) rotateX(0deg) rotateY(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(45deg) rotateX(0deg) rotateY(0deg);
    }
  }`;

export default Cubo
