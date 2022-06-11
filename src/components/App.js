import React from "react";
import Header from "./Header";
import TapRoomManager from "./TapRoomManager";
import {Container} from "./styles/Container.styled";
import {ThemeProvider} from "styled-components"
import styledComponents from "styled-components";
import GlobalStyles from "./styles/Global";
import Footer from "./Footer";

const theme = {
  colors: {
    header: "#e9f7eb",
    body: "#e9f7eb",
    footer: "#fff",
  }
}

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <>
        <GlobalStyles />
        <Header />
          <Container>
            <TapRoomManager />
          </Container>
          <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
