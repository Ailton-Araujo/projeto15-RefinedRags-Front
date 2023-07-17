import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";

export default function CartProduct({ info, cartIndex }) {
  const navigate = useNavigate();
  const { id, size, quantity } = info;
  const { products } = useProducts();
  const { editCart, removeCart } = useCart();
  const item = products.find((element) => element.productId === Number(id));
  const [itemQuantity, setItemQuantity] = useState(quantity);

  return (
    <Product>
      <img
        src={item.img}
        alt={item.name}
        onClick={() => {
          navigate(`/product/${item.productId}`);
        }}
      />
      <InfoContainer>
        <div>
          <span>
            <p>
              <strong>{item.name}</strong>
            </p>
            <p>{`Size: ${size.toUpperCase()}`}</p>
          </span>
          <span>
            <label>
              Quantity:
              <input
                type="number"
                min="1"
                value={itemQuantity}
                onChange={(event) => {
                  setItemQuantity(event.target.value);
                  editCart(cartIndex, event.target.value);
                }}
              />
            </label>
            <p>X</p>
            <p>
              {`Price: ${item.price.toLocaleString("en", {
                style: "currency",
                currency: "USD",
              })}`}
            </p>
          </span>
          <span>
            <p>
              <strong>Total Price: </strong>
              {(item.price * itemQuantity).toLocaleString("en", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </span>
        </div>
        <button onClick={() => removeCart(cartIndex)}>X</button>
      </InfoContainer>
    </Product>
  );
}

const Product = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
  img {
    width: 105px;
    height: 105px;
    cursor: pointer;
  }
  div {
    button {
      width: 35px;
      height: 35px;
      padding: 0px;
      margin: 0px;
      border-radius: 50%;
      background: red;
      font-size: 15px;
      color: white;
    }
  }

  input {
    width: 35px;
    height: 25px;
    font-size: 16px;
    text-align: center;
    margin-left: 5px;
    border: 1px solid black;
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  strong {
    font-weight: 700;
  }
  div {
    width: 90%;
    display: flex;
    p {
      color: #726cd9;
    }
    span {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    & span:nth-child(1) {
      width: 45%;
      padding-left: 15px;
      gap: 5px;
    }
    & span:nth-child(2) {
      width: 30%;
      align-items: center;
      gap: 3px;
      label {
        color: #726cd9;
      }
    }
    & span:nth-child(3) {
      width: 25%;
      align-items: end;
    }
  }
`;
