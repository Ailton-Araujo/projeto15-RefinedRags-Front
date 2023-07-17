import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addCart(data) {
    const itens = cart.filter((element) => element.id === data.id);
    if (itens.length !== 0) {
      const item = itens.find((element) => element.size === data.size);
      if (item) {
        item.quantity += data.quantity;
        return;
      }
    }
    setCart((prevState) => [...prevState, data]);
  }

  function editCart(i, quantity) {
    cart[i].quantity = Number(quantity);
  }

  function removeCart(i) {
    setCart((prevState) => {
      return prevState.filter((element, index) => {
        return index !== i;
      });
    });
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addCart, editCart, clearCart, removeCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
