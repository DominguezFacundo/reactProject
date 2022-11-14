import { Grid } from "@mui/material";
import React from "react";
import Item from "../Items/Item/Item";

const ItemList = ({ products }) => {
  return (
    <Grid container>
      {products.map((product) => (
        <Grid item xs={2}>
          <Item key={product.id} product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemList;
