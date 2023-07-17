import { createGlobalStyle } from "styled-components";
import ResetStyle from "./ResetStyled";

const GlobalStyle = createGlobalStyle`
  ${ResetStyle}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f0f8ff;
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
    background-color: #746cd9;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    width: 150px;
    padding: 12px;    
  }

  input{
    margin-top:15px;
    font-size: 16px;
    height:28px;
    border-width: 1.5px;
    border-radius: 5px;
  }

  button:disabled{
    opacity: 0.55;
  }

  & div:where(.swal2-icon){
    width: 100%;
  }
`;

export default GlobalStyle;
