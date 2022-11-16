import React from "react";
import { useContext } from "react";
import { Context } from "../../../Context/CartContext";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Button, CardMedia, Typography } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Link } from "react-router-dom";

const ItemInCart = ({ item }) => {
  const { removeItem } = useContext(Context);
  const totalItemPrice = item.price * item.quantity

  return (
    <Card sx={{m:1, mb:2, backgroundColor:"#191919", border: 2, borderColor: "#1976d2", borderRadius: 3}}>
      <Grid container>
      <Grid item xs={1}>
        </Grid>
        <Grid item xs={2} sx={{margin: "auto 0"}}>
        <Card  sx={{width: 200, height: 200, p: 1.5,backgroundColor: "transparent"}}>
        <CardMedia component="img" image={item.image} alt={item.name} sx={{ objectFit: "contain" }} />
          </Card>
        </Grid>
        <Grid item xs={3} sx={{margin: "auto 0"}}>
        <Typography variant="h5" color="#ffffff" textAlign="center" > Name </Typography>
              <Link style={{ textDecoration: "none" }} to={"/item/" + item.id}>
                <Typography variant="h5" color="#ffffff" textAlign="center">{item.name}</Typography>
              </Link>
        </Grid>
        <Grid item xs={2} sx={{margin: "auto 0"}}>
        <Typography variant="h5" color="#ffffff" textAlign="center" > Amount </Typography>
        <Typography variant="h6" color="#ffffff" textAlign="center">{item.quantity} </Typography>
        </Grid>
        <Grid item xs={2} sx={{margin: "auto 0"}}>
        <Typography variant="h5" color="#ffffff" textAlign="center" > Total </Typography>
        <Typography variant="h6" color="#ffffff" textAlign="center">$ {totalItemPrice.toFixed(2)} </Typography>
        </Grid>
        <Grid item xs={2} sx={{margin: "auto 0"}}>
          <Button sx={{color: "#ffffff"}} ><DeleteForeverIcon sx={{height: 45, width: 40}} onClick={() => removeItem(item.name, item.id)} /></Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ItemInCart;
