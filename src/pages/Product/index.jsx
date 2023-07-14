import useProducts from "../../hooks/useProducts";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Container, BackButton } from "./style";
import { RotatingLines } from "react-loader-spinner";

export default function Product() {
  const { products } = useProducts();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [inventory, setInventory] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const sizeRef = useRef(null);
  const navigate = useNavigate();

  function addToCart() {
    //Colocar no carrinho
  }

  function handleForm(event) {
    event.preventDefault();

    const data = {
      size: sizeRef.current.value,
      quantity: quantity,
    };

    if (data.quantity <= 0) {
      return alert("Insert valid quantity.");
    }

    if (inventory.indexOf(data.size) === -1) {
      return alert("Choose size.");
    }

    addToCart();
  }

  useEffect(() => {
    const foundProduct = products.find((item) => item.productId === Number(id));
    if (foundProduct) {
      setProduct(foundProduct);
      const filteredSizes = Object.entries(foundProduct.inventory)
        .filter(([size, quantity]) => quantity !== 0)
        .map(([size]) => size);
      setInventory(filteredSizes);
    }
  }, [products]);

  return (
    <Container>
      {products.length === 0 ? (
          <RotatingLines strokeColor="#000000" strokeWidth="4" width="80" />
        ) : (
        <>
          <img src={product.img} alt={product.name} />
          <div>
            <h2>{product.name}</h2>
            <h3>{"$" + product.price}</h3>
            <form onSubmit={(event) => handleForm(event)}>
              <select ref={sizeRef}>
                <option>Select size</option>
                {product.type === "sneakers"
                  ? inventory.map((size, index) => {
                      return (
                        <option value={size} key={index}>
                          {size.replace("s", "").toUpperCase()}
                        </option>
                      );
                    })
                  : inventory.map((size, index) => {
                      return (
                        <option value={size} key={index}>
                          {size.toUpperCase()}
                        </option>
                      );
                    })}
              </select>
              <input type="number" min="1" value={quantity} onChange={(event) => setQuantity(event.target.value)} />
              <button>Add To Cart</button>
            </form>
            <h3>Product Details</h3>
            <p>{product.description}</p>
          </div>
          <BackButton onClick={() => navigate("/")} />
        </>
      )}
    </Container>
  );
}
