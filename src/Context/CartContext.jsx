import React, { createContext, useState, useEffect } from "react";

export const Context = createContext();

const CartContext = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setQuantity(cart.reduce((total, item) => total + item.count, 0))
        setTotal(cart.reduce((total, item) => total + (item.count * item.price), 0))
      }, [])

    const addItem = (item, count) => {
        if (isInCart(item.id)) {
 
            const modified = cart.map((product) => {
              if (product.id === item.id) {
                product.count += count;
              }
              return product;
            });
            setCart(modified);
          } else {
            setCart([...cart, { ...item, count }]);
          }
          setQuantity(quantity + count);
          setTotal(total + (item.price * count));
    }

    const removeItem = (id) => {
        const itemFound = cart.find(product => product.id === id);
    setCart(cart.filter((item) => item.id !== id));
    setQuantity(quantity - itemFound.count)
    setTotal(total - (itemFound.price * itemFound.count))
    }

    const isInCart = (id) => {
        cart.some(item => item.id === id); 
    }
    

    const clear = () => {
        setCart([]);
        setQuantity(0);
        setTotal(0);
    }

  return (
    <Context.Provider value={{cart, quantity, total, addItem, removeItem, clear, isInCart}}>
        {children}
    </Context.Provider>
  );
};

export default CartContext;
