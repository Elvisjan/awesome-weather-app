import styled, { keyframes } from "styled-components"

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }  
`

export const Spinner = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 0%;
  background-color: green;
  color: #fff;
  font-size: 16px;
  width: 280px;
  height: 20px;
  text-align: center;
  border-radius: 5px;
  ::after {
    content: " ";
    display: block;
    position: absolute;
    left: 75%;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: yellow transparent yellow transparent;
    animation: 1.2s ${spin} linear infinite;
  }
  @media (max-width: 768px) {
    top: 10%;
    left: 0;
    width: 100%;
    background-color: none;
  }
`
