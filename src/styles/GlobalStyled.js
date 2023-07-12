import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${ResetStyle}

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
