import React from "react";
import { StyledHeader } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";

const Header = () => (
  <StyledHeader>
    <Container>
      <h1>NATTY TAP</h1>
      <h2>Employee Portal</h2>
    </Container>
  </StyledHeader>
);

export default Header;