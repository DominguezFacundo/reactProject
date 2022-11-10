import React, { useContext } from 'react';
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Context } from "../../Context/CartContext";

const CartWidget = () => {
  const {quantity} = useContext(Context);
  return (
      <Badge badgeContent={quantity} color="primary">
        <ShoppingCartIcon size={25} />
      </Badge>
  );
};

export default CartWidget;