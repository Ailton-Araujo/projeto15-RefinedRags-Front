import { createGlobalStyle } from "styled-components";
import ResetStyle from "./ResetStyled";

const GlobalStyle = createGlobalStyle`
  ${ResetStyle}

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
