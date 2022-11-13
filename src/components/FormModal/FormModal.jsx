import React from 'react';
import Checkout from '../containers/CartView/Checkout';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

  
const FormModal = ({setClient, completedSale}) => {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} 
      sx={{ ml: 2, backgroundColor: "#FFFFFF", fontWeight: "bold",
      ":hover": { backgroundColor: "#1976d2", color: "#FFFFFF" }, }} variant="contain">Continue</Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description" >
        <Checkout setClient={setClient} completedSale={completedSale} />
      </Modal>
    </div>
  )
}

export default FormModal