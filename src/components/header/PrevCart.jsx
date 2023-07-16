import { styled } from "styled-components";
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";

export default function PrevCart() {
  const { products } = useProducts();
  const { cart } = useCart();

  return (
    <DisplayCart>
      <h2>Your Shopping Cart:</h2>
      {cart.length === 0 ? (
        <p>Add something to your cart...</p>
      ) : (
        cart.map((shopping, index) => {
          const item = products.find(
            (element) => element.productId === Number(shopping.id)
          );
          return (
            <article key={index}>
              <img src={item.img} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <p>{`Size: ${shopping.size}`}</p>
                <p>{`Quantity: ${shopping.quantity}`}</p>
                <p>
                  {`Price: ${item.price.toLocaleString("en", {
                    style: "currency",
                    currency: "USD",
                  })}`}
                </p>
                <p>{`Total Price: ${(
                  item.price * shopping.quantity
                ).toLocaleString("en", {
                  style: "currency",
                  currency: "USD",
                })}`}</p>
              </div>
            </article>
          );
        })
      )}
    </DisplayCart>
  );
}

const DisplayCart = styled.aside`
  --shadow-color: 0deg 0% 59%;
  --shadow-elevation-medium: 0.7px 0.6px 1px hsl(var(--shadow-color) / 0.55),
    3.7px 3.5px 5.7px -1.3px hsl(var(--shadow-color) / 0.54),
    14.6px 13.7px 22.4px -2.5px hsl(var(--shadow-color) / 0.53);

  background: #fff;
  padding: 15px;
  border: 1px solid #a0cddb;
  box-shadow: var(--shadow-elevation-medium);
  border-radius: 15px;
  position: absolute;
  top: 75px;
  right: 65px;
  z-index: 3;

  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    img {
      width: 65px;
      height: 65px;
    }
    div {
      font-size: 15px;
      display: grid;
      grid-template-columns: repeat(3, 130px);
      grid-auto-rows: auto;
      justify-content: center;
      align-items: center;
    }
  }
`;
