import styled from "styled-components";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

export const Container = styled.main`
  background-color: #ffffff;
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 10px;
  width: 100%;
  max-width: 800px;
  height: calc(100vh - 320px);
  margin: 25px auto;
  font-family: Arial, Helvetica, sans-serif;

  img {
    width: 450px;
    border-radius: 10px;
  }

  form {
    display: block;
  }

  h2 {
    font-size: 30px;
    margin: 10px 0;
    line-height: 40px;
    font-weight: 700;
  }

  h3 {
    color: #301185;
    font-weight: 500;
    margin-bottom: 15px;
    font-size: 20px;
  }

  p {
    color: #555555;
    font-size: 16px;
    line-height: 25px;
  }

  select {
    display: block;
    color: #555555;
    font-size: 16px;
    height: 30px;
    border: none;
    outline: none;
  }

  div {
    padding: 30px 0;
    width: 350px;
    display: block;

    input {
      font-size: 16px;
      text-align: center;
      margin: 15px 0;
      width: 40px;
      height: 30px;
      border: 1px solid black;
    }

    button {
      font-size: 15px;
      text-align: center;
      margin: 15px 0 15px 20px;
      width: 110px;
      height: 40px;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }
  }

  @media (max-width: 910px) {
    img {
      width: 300px;
      height: 300px;
    }

    div {
      padding: 30px 0;
      width: 300px;
    }

    h2 {
      font-size: 30px;
      line-height: 40px;
    }

    p {
      font-size: 15px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }

  @media (max-width: 576px) {
    padding: 20px;
    width: 85%;

    h2 {
      font-size: 30px;
    }

    img {
      width: 230px;
      height: 230px;
    }

    div {
      padding: 0;
      width: 90%;
    }
  }
`;

export const BackButton = styled(BsFillArrowLeftSquareFill)`
  font-size: 35px;
  position: absolute;
  right: 20px;
  top: 0;
  cursor: pointer;

  @media (max-width: 768px) {
    top: -20px;
  }
`;
