import React, { useContext } from "react";
import { Context } from "../../../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useContext(Context);
  return <>
    {cart.length === 0 ? (
      <h2 style={{ color: "#ffffff" }}>
        Your cart seems to be empty, you can add some items in
        <Link style={{ textDecoration: "none" }} to="/"> here  </Link>
      </h2>
    ) : (
      <>
        {cart.map((item) => (
          <h2 key={item.id} style={{ color: "#ffffff" }}>
            {item.name}
          </h2>
        ))}
      </>
    )}
  </>;
};

export default Cart;
