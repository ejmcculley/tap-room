import styled from "styled-components";

export const StyledHeader = styled.header`

  @import url('https://fonts.googleapis.com/css2?family=Knewave&family=Nunito+Sans:ital@1&display=swap');

  

  background-color: ${({ theme }) => theme.colors.header};
  font-family: 'Knewave', cursive;
  font-size: 4rem;
  color: #fe2b00;
  display: flex;
  justify-content: center;

  h2 {
    background-color: white;
    font-family: 'Nunito Sans', sans-serif;
    padding: 10px 30px;
    border: 1.5px solid black;
    box-shadow: 12px 12px #000;
    font-size: 2rem;
    text-align: center;
  }
  
`