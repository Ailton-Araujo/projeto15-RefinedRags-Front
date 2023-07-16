import { createGlobalStyle } from "styled-components";
import ResetStyle from "./ResetStyled";

const GlobalStyle = createGlobalStyle`
  ${ResetStyle}

  * {
    box-sizing: border-box;
  }

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    margin-top:10px;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #3b3eff;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    width: 150px;
    padding: 12px;    
  }

  input{
    margin-top:10px;
    font-size: 16px;
    height:28px;
    border-width: 1.5px;
    border-radius: 5px;
  }

  button:disabled{
    opacity: 0.55;
  }
`;

export default GlobalStyle;
