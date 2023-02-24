import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";
import { UseCardContext } from "../../ContextApi/ProductContext/CardContext";
import {toast} from "react-toastify"

const CartItemCard = ({ item }) => {
  const {removeitem} = UseCardContext();
  const removecarditem = (id)=>{
       removeitem(id);
       toast.success("Item remove successfuly",{
       theme:"dark"
       })
  }
  return (
    <div className="CartItemCard">
      <img src={item.image} alt="ssa" />
      <div>
        <Link to={`/singleProduct/${item.product}`}>{item.name}</Link>
        <span>{`Price: ₹${item.price}`}</span>
        <p onClick={()=> removecarditem(item.product)}>Remove</p>
      </div>
    </div>
  )
}

export default CartItemCard
