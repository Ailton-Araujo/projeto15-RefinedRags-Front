import { styled } from "styled-components";
import Card from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./utils";

export default function Payment({
  formStep,
  setFormStep,
  checkoutData,
  setCheckoutData,
}) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setFormStep("checkout");
  };

  const handleInputChange = (evt) => {
    if (evt.target.name === "number") {
      evt.target.value = formatCreditCardNumber(evt.target.value);
    } else if (evt.target.name === "expiry") {
      evt.target.value = formatExpirationDate(evt.target.value);
    } else if (evt.target.name === "cvc") {
      evt.target.value = formatCVC(evt.target.value);
    }
    const { name, value } = evt.target;
    setCheckoutData((prev) => ({
      ...prev,
      paymentInfo: { ...prev.paymentInfo, [name]: value },
    }));
  };

  const handleInputFocus = (evt) => {
    setCheckoutData((prev) => ({
      ...prev,
      paymentInfo: { ...prev.paymentInfo, focus: evt.target.name },
    }));
  };

  return (
    <PaymentContainer>
      <h2
        onClick={() => {
          setFormStep("payment");
        }}
      >
        Payment Information
      </h2>
      {formStep === "payment" && (
        <PaymentFormContainer>
          <Card
            number={checkoutData.paymentInfo.number}
            expiry={checkoutData.paymentInfo.expiry}
            cvc={checkoutData.paymentInfo.cvc}
            name={checkoutData.paymentInfo.name}
            focused={checkoutData.paymentInfo.focus}
          />
          <form onSubmit={handleSubmit}>
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              pattern=".{19}"
              maxLength={19}
              value={checkoutData.paymentInfo.number}
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              pattern=".{5,}"
              minLength={5}
              value={checkoutData.paymentInfo.name}
              required
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <div>
              <input
                type="tel"
                name="expiry"
                placeholder="Valid Thru"
                pattern="\d\d/\d\d"
                value={checkoutData.paymentInfo.expiry}
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
              <input
                type="tel"
                name="cvc"
                placeholder="CVC"
                pattern="\d{3,4}"
                value={checkoutData.paymentInfo.cvc}
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <button type="submit">Confirm Credit Card</button>
          </form>
        </PaymentFormContainer>
      )}
    </PaymentContainer>
  );
}

const PaymentContainer = styled.article`
  --shadow-color: 0deg 0% 59%;
  --shadow-elevation-medium: 0.7px 0.6px 1px hsl(var(--shadow-color) / 0.55),
    3.7px 3.5px 5.7px -1.3px hsl(var(--shadow-color) / 0.54),
    14.6px 13.7px 22.4px -2.5px hsl(var(--shadow-color) / 0.53);
  display: flex;
  flex-direction: column;
  margin: 5px 0px;

  h2 {
    border-radius: 15px;
    text-align: center;
    width: 100%;
    padding: 15px 0;
    background-color: #e9e2e2;
    box-shadow: var(--shadow-elevation-medium);
    cursor: pointer;
    font-size: 20px;
    font-weight: 300;
    font-style: italic;
    color: #726cd9;
  }
`;

const PaymentFormContainer = styled.div`
  width: 100%;
  padding: 15px;
  margin: 5px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 100%;
    padding: 15px;
    margin-bottom: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    position: relative;
    input {
      width: 100%;
      margin: 0;
    }
    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      input {
        width: 45%;
        margin: 0;
      }
    }
    button {
      width: 180px;
      position: absolute;
      bottom: -40px;
      right: 15px;
      margin: 0px;
    }
  }
`;
