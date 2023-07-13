import { useEffect, useState } from "react";
import styled from "styled-components";
import useProducts from "../../hooks/useProducts";
import { RotatingLines } from "react-loader-spinner";
import { Product } from "../../components/index";

export default function Home() {
  const { products } = useProducts();
  return (
    <PageContainer>
      <ProductsContainer>
        {products.length === 0 ? (
          <RotatingLines strokeColor="#ffffff" strokeWidth="4" width="80" />
        ) : (
          products.map((product, index) => (
            <li key={index}>
              <Product info={product} />
            </li>
          ))
        )}
      </ProductsContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`

const ProductsContainer = styled.ul`
  padding: 20px;
  margin-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  flex-wrap: wrap;
  gap: 40px;
  background-color: #81ecff6f;

  @media (max-width: 576px) {
    gap: 20px;
    padding: 10px;
  }
`;
