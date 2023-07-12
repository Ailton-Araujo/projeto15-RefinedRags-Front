import { Route, Routes } from "react-router-dom";
import { SignIn, SignUp, Home, Product, Cart, CheckOut } from "./pages/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheckOut />} />
    </Routes>
  );
}

export default App;
