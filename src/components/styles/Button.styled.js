import styled from "styled-components";

export const Button = styled.button`
  border: 1px solid #000;
  box-shadow: 12px 12px #000;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  font-family: 'Azeret Mono', monospace;
  padding: 15px 60px;
  margin: 10px;
  background-color: ${({ bg }) => bg || '#e9f7eb'};
  color: ${({ color }) => color || '#000'};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`