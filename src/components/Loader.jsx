import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    position: relative;
    
    box-shadow: 0 0 30px 4px rgba(0, 0, 0, 0.15) inset,
        0 5px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;
  }

  .loader:before,
    .loader:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 45%;
    bottom: -40%; 
    top: auto;
    
    animation: wave 5s linear infinite;
  }

  .loader:before {
    border-radius: 30%;
    background: rgba(0, 0, 0, 0.5);
    animation: wave 5s linear infinite;
    
  }

  @keyframes wave {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }`;

export default Loader;
