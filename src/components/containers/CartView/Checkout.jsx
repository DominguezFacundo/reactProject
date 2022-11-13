import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";


const Checkout = ({ setClient, completedSale }) => {

  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  
  const saveClient = (e) => {
    if (e.target.name === 'name'){
        setName(e.target.value);
    } else if (e.target.name === 'lname'){
        setLname(e.target.value);
    } else {
        setEmail(e.target.value);
    }

    setClient({
        name,
        lname,
        email
    });
}
  return (
    <Card sx={{maxWidth: 500, margin: "0 auto", padding: "20px 5px"}}>
        <CardContent>
            <Typography variant="h4" textAlign="center" sx={{mb: 2}}>Client Information</Typography>
            <Typography variant="body1" component="p" sx={{mb: 1}}>Please type your info so we can deliver your purchase ticket</Typography>
      <form onSubmit={completedSale} >
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <TextField
              type="text"
              label="name"
              name="name"
              variant="outlined"
              value={name}
              onChange={saveClient}
              placeholder="Enter your name"
              required
            />
          </Grid>

          <Grid item sm={6}>
            <TextField
              type="text"
              label="last name"
              name="lname"
              variant="outlined"
              value={lname}
              onChange={saveClient}
              placeholder="Enter your last name"
              required
            />
          </Grid>

          <Grid item sm={12}>
            <TextField
              type="text"
              label="email"
              name="email"
              variant="outlined"
              value={email}
              onChange={saveClient}
              placeholder="Enter your email"
              required
              fullWidth
            />
          </Grid>

          <Grid item sm={12}>
            <Button type="submit" sx={{ mr: 2, backgroundColor: "#393E46", fontWeight: "bold",
                ":hover": { backgroundColor: "#1976d2", color: "#FFFFFF" }, }} variant="contained" fullWidth>
              Finalize Purchase
            </Button>
          </Grid>
        </Grid>
      </form>
      </CardContent>
    </Card>
  );
};

export default Checkout;
