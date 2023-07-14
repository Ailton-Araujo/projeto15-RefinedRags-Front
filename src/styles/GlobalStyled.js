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

  input{
    margin-top:10px;
    font-size: 16px;
    height:28px;
    border: none;
  }

  button {
    margin-top:10px;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #a265a2;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    width: 30%;
    padding: 12px;    
  }
`;

export default GlobalStyle;
