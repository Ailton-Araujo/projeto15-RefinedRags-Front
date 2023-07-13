import { useEffect, useState } from "react";
import styled from "styled-components";
import useProducts from "../../hooks/useProducts";
import { RotatingLines } from "react-loader-spinner";
import { Product } from "../../components/index";

export default function Home() {
  const { products } = useProducts();
  const [productSets, setProductSets] = useState([]);
  const [currentSet, setCurrentSet] = useState(0);

  function handleSet(button) {
    if (button === "previous-set") {
      return (currentSet !== 0 ? setCurrentSet(currentSet-1) : null); 
    } else if (button === "next-set") {
      return (currentSet !== productSets.length-1 ? setCurrentSet(currentSet+1) : null);
    }
    setCurrentSet(parseInt(button));
  }

  function handleProductSets() {
    const sets = [];
    for (let i = 0; i < products.length; i += 6) {
      sets.push(products.slice(i, i + 6));
    }
    setProductSets(sets);
  }

  useEffect(() => {
    handleProductSets();
  }, [products]);

  return (
    <PageContainer>
      <ButtonsContainer>
        <ButtonSet onClick={() => handleSet("previous-set")}>
          <p>{`<`}</p>
        </ButtonSet>
        {productSets.length !== 0 &&
          productSets.map((set, index) => (
            <ButtonSet key={index} $setIndex={currentSet} onClick={() => handleSet(`${index}-set`)}>
              <p>{index + 1}</p>
            </ButtonSet>
          ))}
        <ButtonSet onClick={() => handleSet("next-set")}>
          <p>{`>`}</p>
        </ButtonSet>
      </ButtonsContainer>
      <ProductsContainer>
        {products.length === 0 ? (
          <RotatingLines strokeColor="#ffffff" strokeWidth="4" width="80" />
        ) : (
          productSets[currentSet]?.map((product, index) => (
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  margin-top: 200px;
`;

const ProductsContainer = styled.ul`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  flex-wrap: wrap;
  gap: 40px;
  background-color: #81ecff4c;

  @media (max-width: 576px) {
    gap: 20px;
    padding: 10px;
  }
`;

const ButtonSet = styled.button`
  background-color: #3b3eff;
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

const ButtonsContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
`;
