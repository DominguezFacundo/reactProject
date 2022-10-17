import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <a href="#" className="cart-widget">
      <Badge badgeContent={5} color="error">
        <ShoppingCartIcon size={25} />
      </Badge>
    </a>
  );
};

export default CartWidget;