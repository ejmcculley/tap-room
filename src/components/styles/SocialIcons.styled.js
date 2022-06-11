import styled from "styled-components";

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  li {
    list-style: none;
  }
  
  a {
    border: 1px solid #101010;
    border-radius: 50%;
    color: #101010;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;
  }
`