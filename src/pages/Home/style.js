import styled from "styled-components";

export const PageContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  margin-top: 200px;
`;

export const ProductsContainer = styled.ul`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 576px) {
    gap: 20px;
    padding: 10px;
  }
`;

export const ButtonSet = styled.button`
  color: #ffffff;
  margin-left: 15px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  border: none;

  &:nth-child(${(props) => props.$setIndex + 2}) {
    background-color: #ffffff;
    color: #555555;
  }

  p {
    color: inherit;
    font-size: 20px;
  }
`;

export const ButtonsContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  padding: 20px;
  gap: 10px;

  div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  label {
    font-size: 18px;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  select {
    outline: none;
    border: none;
    font-size: 16px;
    text-align: center;
    font-family: inherit;

    option {
      padding: 0;
    }
  }
`;