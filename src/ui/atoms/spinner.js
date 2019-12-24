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
  display: block;
  background-color: green;
  color: #fff;
  margin-left: 355px;
  font-size: 16px;
  width: 280px;
  height: 20px;
  text-align: center;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    background-color: none;
  }

  ::after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    margin-top: -30px;
    margin-left: 300px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: yellow transparent yellow transparent;
    animation: 1.2s ${spin} linear infinite;
  }
`
