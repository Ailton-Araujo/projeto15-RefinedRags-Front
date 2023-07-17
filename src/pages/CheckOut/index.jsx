import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useUser from "../../hooks/useUser";
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";
import { postShopping } from "../../services/Api";
import Address from "./Forms/AddressForm";
import Payment from "./Forms/PaymentForm";

export default function CheckOut() {
  const { auth } = useAuth();
  const { user } = useUser();
  const { products } = useProducts();
  const { cart } = useCart();

  const navigate = useNavigate();

  const [formStep, setFormStep] = useState("address");
  const [tryCheckout, setTryCheckout] = useState(false);
  const [checkoutData, setCheckoutData] = useState({
    buyerInfo: user,
    productInfo: cart,
    addressInfo: {
      address: "",
      district: "",
      zipCode: "",
      complement: "",
      city: "",
      state: "",
    },
    paymentInfo: {
      number: "",
      expiry: "",
      cvc: "",
      name: "",
      focus: "",
    },
  });

  useEffect(() => {
    if (!auth) {
      Swal.fire({ icon: "warning", text: "You need to SignIn to Continue!" });
      return navigate("/signin");
    }
  }, [auth]);

  function handleCheckout() {
    setTryCheckout(true);
    function success() {
      setTryCheckout(false);
    }
    function failure() {
      setTryCheckout(false);
    }
    postShopping(checkoutData, auth, success, failure);
  }

  return (
    <CheckoutContainer>
      <article>
        <FormsContainer>
          <Address
            formStep={formStep}
            setFormStep={setFormStep}
            checkoutData={checkoutData}
            setCheckoutData={setCheckoutData}
          />
          <Payment
            formStep={formStep}
            setFormStep={setFormStep}
            checkoutData={checkoutData}
            setCheckoutData={setCheckoutData}
          />
        </FormsContainer>
        <ul>
          {cart.map((element, index) => {
            const product = products.find(
              (product) => product.productId == element.id
            );
            return (
              <ProductDisplay key={index}>
                <div>
                  <img src={product.img} alt={product.name} />
                  <span>
                    <p>{product.name}</p>
                    <p>Size: {element.size.toUpperCase()}</p>
                  </span>
                </div>
                <div>
                  <p>Quantity: {element.quantity} units</p>
                  <p>
                    Price:{" "}
                    {product.price.toLocaleString("en", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </p>
                </div>
                <p>
                  Total Price:{" "}
                  {(element.quantity * product.price).toLocaleString("en", {
                    style: "currency",
                    currency: "USD",
                  })}
                </p>
              </ProductDisplay>
            );
          })}
        </ul>
      </article>
      <button
        disabled={formStep !== "checkout" || tryCheckout}
        type="button"
        onClick={handleCheckout}
      >
        {tryCheckout ? "teste" : "CheckOut"}
      </button>
    </CheckoutContainer>
  );
}

const CheckoutContainer = styled.main`
  min-height: calc(100vh - 285px);
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 15px;
  article {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    ul {
      width: 45%;
    }
    @media (max-width: 700px) {
      flex-direction: column;
      ul {
        width: 100%;
      }
    }
  }
`;

const FormsContainer = styled.div`
  width: 55%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const ProductDisplay = styled.li`
  width: 100%;
  padding: 5px 10px;
  margin: 5px 15px;
  border: 1px solid #dedede;
  border-radius: 15px;
  & div:nth-child(1) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    p {
      font-size: 18px;
      line-height: 25px;
      color: #726cd9;
    }
    img {
      width: 85px;
      height: 85px;
      border-radius: 25px;
    }
  }
  & div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    p {
      font-size: 18px;
      line-height: 25px;
      color: #726cd9;
    }
  }
  p {
    text-align: end;
    font-size: 18px;
    line-height: 25px;
    color: #726cd9;
  }
`;
