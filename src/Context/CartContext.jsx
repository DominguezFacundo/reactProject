import React, { createContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Context = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const toastNotification = (text) => {
    toast.success(text, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  useEffect(() => {
    let qtyCart = 0;
    let totalCart = 0;
    cart.forEach((item) => {
      qtyCart += item.quantity;
      totalCart += item.price * item.quantity;
    });
    setQuantity(qtyCart);
    setTotal(totalCart);
  }, [cart]);

  const addItem = (item, qty) => {
    if (isInCart(item.id)) {
        const updatedCart = cart.map((product) =>
            product.id === item.id ? (
                {...product, quantity: product.quantity + qty}
            ) : (
                product
            )
        )
        setCart(updatedCart);
    } else {
        setCart([...cart, {...item, quantity: qty}])
        setQuantity(quantity + qty)
        console.log("cart", [...cart, {...item, quantity: qty}]);
    }
    toastNotification(`Added ${item.name} to the cart!`)
}
 
const removeItem = (itemName, itemId) => {
  setCart(cart.filter((item) => item.id !== itemId));
  toastNotification(`${itemName} was removed from the cart.`);
}

const isInCart = (itemId) => cart.some((item) => item.id === itemId);

const clear = () => {
  setCart([]);
  setQuantity(0);
  setTotal(0);
  toastNotification("The cart has been emptied.")
}

  return (
    <Context.Provider value={{ cart, quantity, total, addItem, removeItem, clear, isInCart }} >
      {children}
      <ToastContainer />
    </Context.Provider>
  );
};

export default CartContext;
