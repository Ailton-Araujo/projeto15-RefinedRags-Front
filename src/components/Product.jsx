import styled from "styled-components";
import { IoIosStarHalf, IoIosStar, IoIosStarOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Product({ info }) {
  const { productId, name, img, price, rating } = info;
  const navigate = useNavigate();

  function ratingToArray() {
    const ratingArray = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      ratingArray.push(1);
    }
    if (Math.floor(rating) !== rating) {
      ratingArray.push(0.5);
    }
    if (rating < 4.5) {
      for (let i = Math.ceil(rating); i < 5; i++) {
        ratingArray.push(0);
      }
    }
    return ratingArray;
  }

  return (
    <Container onClick={() => navigate(`/product/${productId}`)}>
      <img src={img} alt={name} />
      <h4>{name}</h4>
      <div>
        {ratingToArray().map((star, index) => {
          if (star === 1) {
            return <IoIosStar key={index} />;
          } else if (star === 0.5) {
            return <IoIosStarHalf key={index} />;
          }
          return <IoIosStarOutline key={index} />;
        })}
      </div>
      <p>{"$" + price.toFixed(2)}</p>
    </Container>
  );
}

const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background-color: #ffffff;
  padding: 10px;
  height: 314px;
  width: 220px;
  margin: 0;
  border-radius: 10px;
  border: none;
  position: relative;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }

  div {
    margin-top: 5px;
    color: #0f237a;
    font-size: 18px;
  }

  h4 {
    color: #555555;
    font-size: 18px;
    font-weight: 500;
  }

  p {
    color: #555555;
    font-size: 16px;
    line-height: 25px;
  }

  img {
    margin-bottom: 20px;
    width: 200px;
    border-radius: 10px;
  }

  @media (max-width: 910px) {
    height: 265px;
    width: 170px;
    
    h4,
    p {
      font-size: 15px;
    }

    img {
      width: 150px;
    }

    div {
      margin-top: 10px;
    }
  }

  @media (max-width: 576px) {
    width: 150px;
    height: 236px;

    h4 {
      font-size: 13px;
    }

    div {
      font-size: 13px;
    }

    img {
      width: 130px;
    }
  }
`;
