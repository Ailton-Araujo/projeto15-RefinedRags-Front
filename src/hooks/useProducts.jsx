import { useContext } from "react";
import ProductContext from "../contexts/productContext";

export default function useProducts() {
  return useContext(ProductContext);
}
