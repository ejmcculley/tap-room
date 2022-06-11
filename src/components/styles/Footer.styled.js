import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  width: 100vw;
  display: flex;
  flex-flow: column-wrap;
  color: #101010;
  padding: 40px 30px;
  margin-top: 5%;
  font-size: 1rem;
  border-top: 1px solid black;
  ul {
    list-style-type: none;
  }
  ul li {
    margin: 20px;
  }
  
`