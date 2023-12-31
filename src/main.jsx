import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/authContext.jsx";
import { ProductProvider } from "./contexts/productContext.jsx";
import { CartProvider } from "./contexts/cartContext.jsx";
import { UserProvider } from "./contexts/userContext.jsx";
import GlobalStyle from "./styles/GlobalStyled";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <BrowserRouter>
              <GlobalStyle />
              <App />
            </BrowserRouter>
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>
);
