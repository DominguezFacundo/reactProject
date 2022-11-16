import React, { useContext, useState } from "react";
import { Context } from "../../../Context/CartContext";
import { Link } from "react-router-dom";
import ItemInCart from "./ItemInCart";
import FormModal from "../../FormModal/FormModal";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Swal from "sweetalert2";
import CircularIndeterminate from "../../LoadingSpinner";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { db } from "../../../firebase/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";


const Cart = () => {
  const { quantity, cart, total, clear } = useContext(Context);
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(false);

  const stockUpdate = () => {
    cart.forEach((item) => {
      const product = doc(db, "products", item.id);
      updateDoc(product, { stock: item.stock - item.quantity });
    });
  };

  const completedSale = () => {
    setLoading(true);
    const items = [];
    cart.forEach((item) => {
      items.push({
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        image: item.image,
        quantity: item.quantity,
      });
    });

    const salesCollection = collection(db, "sales");
    addDoc(salesCollection, {
      client,
      items,
      total,
      date: serverTimestamp(),
    })
      .then((result) => {
        Swal.fire({
          title: "Thanks for your purchase!",
          html: `Ticket:
                <br/> 
                <p>Sale Order: <b>${result.id}</b></p>
                <p>(For any inconvenience save your Sale order)</p>
                <b>Peripherals Dominguez</b>`,
          icon: "success",
          confirmButtonText: "Nice!",
          confirmButtonColor: "#00A19A",
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });

    stockUpdate(cart);
    clear();
  };

  return (
    <div className="cart-container">
      {quantity === 0 ? (
        loading ? (
          <CircularIndeterminate />
        ) : (
          
          <Grid height="100vh" container alignContent="center" sx={{ p: 5}} >
          <Grid item xs={12} textAlign="center">
          <Link style={{ textDecoration: "none" }} to="/">
          <AddShoppingCartIcon sx={{ color:"#ffffff", height: 250, width: 250, ":hover": { color: "#1976d2"} }}/>
          </Link>
          </Grid>
          <Grid item xs={12}>
          <Typography variant="h3" color="#ffffff" textAlign="center">Your cart seems to be empty, you can add some items<Link style={{ textDecoration: "none" }} to="/">  here</Link></Typography>
          </Grid>
          </Grid>
        )
      ) : (
        <>
          {cart.map((item) => {
            return <ItemInCart key={item.id} item={item} />
          })}
          <Card
            sx={{
              m: 1,
              backgroundColor: "#191919",
              borderBottom: 2,
              borderColor: "#ffffff",
              borderRadius: 3,
            }}
          >
            <Grid container>
              <Grid item xs={1}></Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={2}>
                <Typography variant="h5" color="#ffffff" textAlign="center">
                  Total in u$d:
                </Typography>
              </Grid>
              <Grid item xs={2} sx={{ margin: "auto 0" }}>
                <Typography variant="h5" color="#ffffff" textAlign="center">
                  ${total.toFixed(2)}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <FormModal setClient={setClient} completedSale={completedSale}/>
              </Grid>
            </Grid>
          </Card>
        </>
      )}
    </div>
  );
};

export default Cart;
