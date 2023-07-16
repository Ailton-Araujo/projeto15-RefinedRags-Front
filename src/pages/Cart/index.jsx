import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import CartProduct from "./CartProduct";

export default function Cart() {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { cart } = useCart();

  function handleCheckout() {
    if (!auth) {
      Swal.fire({ icon: "warning", text: "You need to SignIn to Continue!" });
      return navigate("/signin");
    }
    navigate("/checkout");
  }

  return (
    <CartContainer>
      {cart.length === 0 ? (
        <EmptyCart>
          <p>Your cart is empty:</p>
          <button type="button" onClick={() => navigate("/")}>
            Go back to Shopping
          </button>
        </EmptyCart>
      ) : (
        <>
          <ul>
            {cart.map((product, index) => (
              <CartProduct key={index} info={product} cartIndex={index} />
            ))}
          </ul>
          <ButtonContainer>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Continue to Shopping
            </button>
            <button
              onClick={() => {
                handleCheckout();
              }}
            >
              Checkout
            </button>
          </ButtonContainer>
        </>
      )}
    </CartContainer>
  );
}

const CartContainer = styled.main`
  min-height: calc(100vh - 285px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ul {
    width: 85%;
  }
`;

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  p {
    font-size: 35px;
    color: #726cd9;
    font-style: italic;
  }
`;

const ButtonContainer = styled.div`
  width: 85%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  button {
    height: 65px;
    margin: 0px;
  }
`;
