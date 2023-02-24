import React, { useState } from 'react';
import CheckoutSteps from './CheckoutSteps';
import "./PaymentSuccess.css";
import Loading from "../layout/Loading/Loading"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useOrderContext } from '../../ContextApi/ProductContext/OrderContext';
import {useNavigate} from "react-router-dom"
import { UseCardContext } from '../../ContextApi/ProductContext/CardContext';

const PymentSuccess = () => {
  const {CreateOrder,orderLoading} = useOrderContext();
  const {Carditem,shippinginfo} = UseCardContext()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
 

  const handleClickOpen = () => {
    setOpen(true);
  };
  const orderinfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const orderBank ={
    adress : orderinfo.adress,
    shippingInfo : shippinginfo,
    orderitem : Carditem,
    itemsPrice : orderinfo.subtotal,
    taxPrice : orderinfo.tax,
    shippingPrice : orderinfo.shippingCharges,
    totalPrice : orderinfo.totalPrice,
    paymentInfo : {
    payment : "bank"
    }
    
  }
  const orderjazzcash ={
    adress : orderinfo.adress,
    shippingInfo : shippinginfo,
    orderitem : Carditem,
    itemsPrice : orderinfo.subtotal,
    taxPrice : orderinfo.tax,
    shippingPrice : orderinfo.shippingCharges,
    totalPrice : orderinfo.totalPrice,
    paymentInfo : {
      payment : "jazzCash"
    }
  }
  const orderCOD ={
    adress : orderinfo.adress,
    shippingInfo : shippinginfo,
    orderitem : Carditem,
    itemsPrice : orderinfo.subtotal,
    taxPrice : orderinfo.tax,
    shippingPrice : orderinfo.shippingCharges,
    totalPrice : orderinfo.totalPrice,
    paymentInfo : {
      payment : "COD"
    }
  }

  const handleClose = () => {
    setOpen(false);
    CreateOrder(orderBank,navigate)

  }
  const handleClosecancle = () => {
    setOpen(false);
    setOpen1(false);
    setOpen2(false);
  }
  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
    CreateOrder(orderjazzcash,navigate)
  }
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
    CreateOrder(orderCOD,navigate)
  }
  
  
  return (
   <>
   {
    orderLoading ? <Loading/> : 
    <>
    <CheckoutSteps activeStep={2}/>
    <div className='payment'>
      <p>Payment method</p>
      <Button variant="outlined" onClick={handleClickOpen} style={{margin:"10px 2px"}}>
        Bank Transfer
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Bank Transfer</DialogTitle>
        <DialogContent>
          <DialogContentText>
           You Can send payment on following bank account
          </DialogContentText>
         <div className='bank'>
          <div className='bank1'>
            <p>Account Number:</p><span>6246-6275-7286-78</span>
          </div>
          <div className='bank1'>
            <p>Account Name:</p>
            <span>Awais Ali</span>
          </div>
          <div className='bank1'>
            <p>Bank Name:</p>
            <span>Mezan Bank</span>
          </div>
         </div>
          </DialogContent>
        <DialogActions>
          <Button onClick={handleClosecancle}>Cancel</Button>
          <Button onClick={handleClose}>Place Order</Button>
        </DialogActions>
      </Dialog>
      {/* ====================== */}
      <Button variant="outlined" onClick={handleClickOpen1} style={{margin:"10px 2px"}}>
      JazzCash Transfer
      </Button>
      <Dialog open={open1} onClose={handleClose1}>
        <DialogTitle>JazzCash Transfer</DialogTitle>
        <DialogContent>
          <DialogContentText>
           You Can send payment on following jazzCash account
          </DialogContentText>
         <div className='bank'>
          <div className='bank1'>
            <p>Account Number :</p><span>1234567890</span>
          </div>
          <div className='bank1'>
            <p>Account Name :</p>
            <span>Awais Ali</span>
          </div>
         </div>
          </DialogContent>
        <DialogActions>
          <Button onClick={handleClosecancle}>Cancel</Button>
          <Button onClick={handleClose1}>Place Order</Button>
        </DialogActions>
      </Dialog>
      {/* ====================== */}
      <Button variant="outlined" onClick={handleClickOpen2} style={{margin:"15px 2px"}}>
      Cash on Devlivery
      </Button>
      <Dialog open={open2} onClose={handleClose2}>
        <DialogTitle>Cash on Devlivery</DialogTitle>
        <DialogActions>
          <Button onClick={handleClosecancle}>Cancel</Button>
          <Button onClick={handleClose2}>Place Order</Button>
        </DialogActions>
      </Dialog>
      {/* ====================== */}
    </div>
    </>
   }
   </>
  )
}

export default PymentSuccess
