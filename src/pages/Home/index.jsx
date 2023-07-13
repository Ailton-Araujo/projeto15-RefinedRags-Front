import { useEffect, useState } from "react";
import useProducts from "../../hooks/useProducts";

export default function Home() {
  const { products } = useProducts();
  return (
    <ul>
      {products.length === 0
        ? "loading"
        : products.map((product) => <li>{product.name}</li>)}
    </ul>
  );
}
