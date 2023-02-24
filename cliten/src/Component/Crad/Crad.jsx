import React, { Fragment } from "react";
import "./Card.css";
import CartItemCard from "./CartItemCard.jsx";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import { UseCardContext } from "../../ContextApi/ProductContext/CardContext";

const Crad = () => {
  const navigate = useNavigate()
    const {Carditem,getCardProduct} = UseCardContext()
    const increaseQty = (id,stock,quantity)=>{
        let newqty = quantity + 1;
        if(stock <= newqty){
            return;
        }
        getCardProduct(id,newqty)

    }
    const decreaseQty = (id,quantity)=>{
        let newqty = quantity - 1;
        if(quantity <= 1){
            return;
        }
        getCardProduct(id,newqty)

    }

    // =============== checkOutHandler 

    const checkOutHandler = ()=>{
      navigate("/login/shipping")
    }
  return (
    <Fragment>
    {Carditem.length === 0 ? (
      <div className="emptyCart">
        <RemoveShoppingCartIcon />

        <Typography>No Product in Your Cart</Typography>
        <Link to="/men">View Products</Link>
      </div>
    ) : (
      <Fragment>
        <div className="cartPage">
          <div className="cartHeader">
            <p>Product</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>

          {Carditem &&
            Carditem.map((item) => (
              <div className="cartContainer" key={item.product}>
                <CartItemCard item={item} />
                <div className="cartInput">
                  <button 
                  onClick={()=> decreaseQty(item.product,item.quantity)}
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button 
                  onClick={()=> increaseQty(item.product,item.stock,item.quantity)}
                  >
                    +
                  </button>
                </div>
                <p className="cartSubtotal">{`PKR${
                  item.price * item.quantity
                }`}</p>
              </div>
            ))}

          <div className="cartGrossProfit">
            <div></div>
            <div className="cartGrossProfitBox">
              <p>Gross Total</p>
              <p>{`PKR${Carditem.reduce(
                (acc,item) => acc + item.price * item.quantity,
                0
              )}`}</p>
            </div>
            <div></div>
            <div className="checkOutBtn">
              <button onClick={checkOutHandler}>Check Out</button>
            </div>
          </div>
        </div>
      </Fragment>
    )}
  </Fragment>
  )
}

export default Crad
