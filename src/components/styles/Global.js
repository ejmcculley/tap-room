import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@300&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Azeret Mono', monospace;
    font-size: 1.15em;
    margin: 0;
    display: flex;
    justify-content: center;
  }

  p {
    opacity: 0.6;
    line-height: 1.5;
  }
}
`

export default GlobalStyles
