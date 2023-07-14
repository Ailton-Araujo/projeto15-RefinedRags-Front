import { createContext, useEffect, useState } from "react";
import { getProducts } from "../services/Api";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    function success(data) {
      setProducts([...data]);
    }
    getProducts(success);
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;
