import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = ({ link}) => {
  return (
    <StyledWrapper>
      <Link className="code-button code-button--html code-button--color" to={link} >
        <b className="code-button__bracket">&lt;</b>
        <span className="code-button__code">/</span>
        <span className="code-button__text">Ver Proyecto</span>
        <b className="code-button__bracket">&gt;</b>
      </Link>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .code-button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Menlo", "Bitstream Vera Sans Mono", "DejaVu Sans Mono", "Monaco", "Consolas", monospace;
    border-radius: 10px;
    background: #434d5a;
    border: none;
    padding: 1em 0;
    color: white;
    text-align: center;
    text-decoration: none;
    width: 100%;
    overflow: hidden;
    position: relative;
    line-height: 1;
    transition: all 0.2s ease, background-color 0.2s ease-in 0.15s, box-shadow 0.2s ease-in 0.15s, color 0s ease;
  }

  .code-button__bracket, .code-button__text, .code-button__code {
    display: inline-block;
    margin-right: -3px;
    text-align: center;
    width: auto;
    transition: all 0.2s ease, color 0s ease;
  }

  .code-button__bracket {
    font-weight: normal;
  }

  .code-button__text {
    opacity: 0;
    position: absolute;
    transition: all 0s ease;
  }

  .code-button:hover {
    padding: 1em 0;
    transition: all 0.2s ease, background-color 0.2s ease-in 0.05s, box-shadow 0.2s ease-in 0.05s, color 0s ease;
  }

  .code-button:hover .code-button__code, .code-button:hover .code-button__text {
    width: 7em;
  }

  .code-button:hover .code-button__code, .code-button:hover .code-button__text, .code-button:hover .code-button__bracket {
    transition: all 0.2s ease, color 0s ease;
  }

  .code-button:hover .code-button__code {
    opacity: 0;
    position: absolute;
  }

  .code-button:hover .code-button__text {
    opacity: 1;
    position: static;
  }

  .code-button--color:hover {
    color: #fff;
  }

  .code-button--color:hover.code-button--html {
    background-color: #0aff99;
    box-shadow: inset 15px 15px 90px -20px #008000, inset -15px -5px 80px -10px #38b000;
  }

  `;

export default Button;
