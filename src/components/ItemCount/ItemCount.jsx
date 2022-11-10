import "./ItemCount.css"
import { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function ItemCount({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(initial);

  const addProduct = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const subtractProduct = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };

  return (
      <div className="counter-container">
        <RemoveIcon onClick={subtractProduct} sx={{ backgroundColor: "#FFFFFF", fontWeight: "bold", ":hover":{ backgroundColor: "#1976d2", color: "#FFFFFF" } }} className="counter-addBtn" />

        <span className="counter-amount">{counter}</span>

        <AddIcon sx={{ backgroundColor: "#FFFFFF", fontWeight: "bold", ":hover":{ backgroundColor: "#1976d2", color: "#FFFFFF" } }} onClick={addProduct} className="counter-subtractBtn" />
        
        <Button sx={{ ml: 3, backgroundColor: "#FFFFFF", fontWeight: "bold", ":hover":{ backgroundColor: "#1976d2", color: "#FFFFFF" } }} variant="contain" className="add-products-button" disabled={stock === 0} onClick={() => onAdd(counter)}>
          {stock === 0 ? "No stock" : "Add to cart"}
        </Button>
      </div>
  );
}

export default ItemCount;
