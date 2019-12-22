import styled from 'styled-components';

export const Button = styled.button`
  border-style: none;
  outline: none;
  width: 120px;
  height: 30px;
  border-radius: 10px;
  background-color: green;
  color: #fff;
  :hover {
    opacity: 0.9;
  }
  :active {
    background-color: red;
  }
`