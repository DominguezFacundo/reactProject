import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (    
    
    <Card className="item-card" sx={{ maxWidth: 300, p: 3, m: 2, ":hover":{  boxShadow: "10px 12px 15px #1976d2", backgroundColor: "#EEEEEE"} }}>
      <CardMedia component="img" height="250" image={product.image} alt={product.name} sx={{ objectFit: "contain" }} />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" textAlign={"center"}>
        {product.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Link style={{ textDecoration: 'none' }} to={"/item/" + product.id}>
          <Button sx={{ml: 9}} size="small">
            View Detail
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;