import styled from "styled-components"

export const H1 = styled.h1`
  margin: 0;
  width: 100%;
  height: 30%;
  color: white;
  font-size: 4rem;
  text-align: center;
  @media (max-width: 768px) {
    width: 80%;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
  }
`
