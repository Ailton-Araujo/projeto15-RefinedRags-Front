import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./components";
import { SignIn, SignUp, Home, Product, Cart, CheckOut } from "./pages/index";
import { AuthProvider } from "./contexts/authContext";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
