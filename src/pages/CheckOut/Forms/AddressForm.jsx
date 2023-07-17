import { useState } from "react";
import { getAddress } from "../../../services/Api";
import { styled } from "styled-components";

export default function Address({
  formStep,
  setFormStep,
  checkoutData,
  setCheckoutData,
}) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setFormStep("payment");
    console.log(checkoutData);
  };

  const handleOnBlur = () => {
    function success(data) {
      setCheckoutData((prev) => ({
        ...prev,
        addressInfo: {
          ...prev.addressInfo,
          address: data.logradouro,
          district: data.bairro,
          zipCode: data.cep,
          city: data.localidade,
          state: data.uf,
        },
      }));
    }
    getAddress(checkoutData.addressInfo.zipCode, success);
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setCheckoutData((prev) => ({
      ...prev,
      addressInfo: { ...prev.addressInfo, [name]: value },
    }));
  };

  console.log(checkoutData);
  return (
    <AddressContainer>
      <h2
        onClick={() => {
          setFormStep("address");
        }}
      >
        Address Information
      </h2>
      {formStep === "address" && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            maxLength={9}
            name="zipCode"
            placeholder="Zip-Code"
            value={checkoutData.addressInfo.zipCode}
            required
            onChange={handleInputChange}
            onBlur={handleOnBlur}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={checkoutData.addressInfo.address}
            required
            onChange={handleInputChange}
          />
          <input
            type="text"
            maxLength={35}
            name="complement"
            placeholder="Complement"
            onChange={handleInputChange}
          />

          <input
            type="text"
            maxLength={35}
            name="district"
            placeholder="District"
            value={checkoutData.addressInfo.district}
            required
            onChange={handleInputChange}
          />
          <div>
            <input
              type="text"
              maxLength={35}
              name="city"
              placeholder="City"
              value={checkoutData.addressInfo.city}
              required
              onChange={handleInputChange}
            />
            <input
              type="text"
              maxLength={2}
              name="state"
              placeholder="State"
              value={checkoutData.addressInfo.state}
              required
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Confirm Address</button>
        </form>
      )}
    </AddressContainer>
  );
}

const AddressContainer = styled.article`
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
      & input:nth-child(1) {
        width: 70%;
        margin: 0;
      }
      & input:nth-child(2) {
        width: 25%;
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
  form {
    width: 100%;
    padding: 15px;
    input {
      margin: 0;
    }
  }
`;
