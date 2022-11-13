import "./ItemDetail.css";
import React, { useState, useContext } from "react";
import ItemCount from "../../ItemCount/ItemCount";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { Context } from "../../../Context/CartContext";

const ItemDetail = ({ item }) => {

  const [isPressedButton, setIsPressedButton] = useState(false);
  const { addItem } = useContext(Context);

/*   let stock = 0;
  if (isInCart(item.id)) {
    const itemFound = cart.find((item) => item.id);
    stock = item.stock - itemFound.count;
    console.log(stock);
  } else {
    stock = item.stock;
  } */

  const onAdd = (count) => {
    setIsPressedButton(true);
    addItem(item, count);
  };

  return (
    <Grid
      height="100vh" container justifyContent="center" alignItems="center" sx={{ p: 5 }} >
      <Grid item xs={4}>
        <Card sx={{mr: 3, p: 5,backgroundColor: "transparent", border: 2, borderColor: "#1976d2", borderRadius: 3}}>
        <CardMedia component="img" image={item.image} alt={item.name} sx={{ objectFit: "contain" }} />
        </Card>
      </Grid>
      <Grid item xs={4} sx={{ml: 4}}>
        <h1 className="item-detail-name">{item.name}</h1>
        <h3 className="item-detail-description">
          Specifications:{" "}
          <span className="item-detail-specification"> {item.description} </span>
        </h3>
        <h2 className="item-detail-price">Price: ${item.price}</h2>
        <div className="item-detail-counter">
          {!isPressedButton ? (
            <ItemCount className="item-detail-counter" stock={item.stock} initial={1} onAdd={onAdd}  />
          ) : (
            <div className="buttons-container">
              <Link style={{ textDecoration: "none", color:"black" }} to="/">
              <Button sx={{ mr: 2, backgroundColor: "#FFFFFF", fontWeight: "bold",
                  ":hover": { backgroundColor: "#1976d2", color: "#FFFFFF" }, }} variant="contain">
                Keep buying!
              </Button>
            </Link>
            
            <Link style={{ textDecoration: "none", color:"black" }} to="/cart">
              <Button sx={{ ml: 2, backgroundColor: "#FFFFFF", fontWeight: "bold",
                  ":hover": { backgroundColor: "#1976d2", color: "#FFFFFF" }, }} variant="contain">
                Go to cart
              </Button>
            </Link>
            </div>
          )}
        </div>
        <h4 className="item-detail-stock"> Remaining Stock: {item.stock}</h4>
      </Grid>
    </Grid>
  );
};

export default ItemDetail;
