import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useProducts from "../../hooks/useProducts";
import { RotatingLines } from "react-loader-spinner";
import { Product } from "../../components/index";
import { TbSortDescending2 } from "react-icons/tb";
import { HiFilter } from "react-icons/hi";


export default function Home() {
  const { products } = useProducts();
  const [productSets, setProductSets] = useState([]);
  const [currentSet, setCurrentSet] = useState(0);
  const filterSelected = useRef(null);
  const orderSelected = useRef(null);

  function handleSet(button) {
    if (button === "previous-set") {
      return currentSet !== 0 ? setCurrentSet(currentSet - 1) : null;
    } else if (button === "next-set") {
      return currentSet !== productSets.length - 1 ? setCurrentSet(currentSet + 1) : null;
    }
    setCurrentSet(parseInt(button));
  }

  function handleProductSets(list) {
    const sets = [];
    for (let i = 0; i < list.length; i += 6) {
      sets.push(list.slice(i, i + 6));
    }
    setCurrentSet(0);
    setProductSets(sets);
  }

  function orderProducts(list) {
    let newProductsOrder = [];
    if (orderSelected.current.value === "rating" || orderSelected === null) {
      newProductsOrder = list.sort((a, b) => b.rating - a.rating);
    } else if (orderSelected.current.value === "latest") {
      newProductsOrder = list.sort((a, b) => b.productId - a.productId);
    } else if (orderSelected.current.value === "highest-price") {
      newProductsOrder = list.sort((a, b) => b.price - a.price);
    } else if (orderSelected.current.value === "lowest-price") {
      newProductsOrder = list.sort((a, b) => a.price - b.price);
    }
    handleProductSets(newProductsOrder);
  }

  function filterProducts() {
    let filteredProducts = [];
    if (filterSelected.current.value === "all" || filterSelected === null) {
      filteredProducts = products;
    } else {
      filteredProducts = products.filter(product => product.type === filterSelected.current.value);
    }
    orderProducts(filteredProducts);
  }

  useEffect(() => {
    filterProducts();
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
      <OptionsContainer>
        <div>
          <label htmlFor="sort-options"><TbSortDescending2 />Sort by :</label>
          <select id="sort-options" ref={orderSelected} onChange={filterProducts}>
            <option value="rating">Rating</option>
            <option value="latest">Latest</option>
            <option value="highest-price">Highest Price</option>
            <option value="lowest-price">Lowest Price</option>
          </select>
        </div>
        <div>
          <label htmlFor="filter-options"><HiFilter />Filter :</label>
          <select id="filter-options" ref={filterSelected} onChange={filterProducts}>
            <option value="all">All</option>
            <option value="shirt">Shirts</option>
            <option value="long-sleeved shirt">Long-sleeved Shirts</option>
            <option value="shorts">Shorts</option>
            <option value="sneakers">Sneakers</option>
          </select>
        </div>
      </OptionsContainer>
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
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
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

  @media (max-width: 576px) {
    gap: 20px;
    padding: 10px;
  }
`;

const ButtonSet = styled.button`
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

const OptionsContainer = styled.div`
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
