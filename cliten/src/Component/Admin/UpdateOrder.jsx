import React, { Fragment, useState } from "react";
import "../Crad/ConfirmOrder.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { useOrderContext } from "../../ContextApi/ProductContext/OrderContext";
import Loading from "../layout/Loading/Loading";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import { Button } from "@mui/material";

const UpdateOrder = () => {
    const navigate = useNavigate()
    const {singleOrderDetails,orderLoading,UpdateSatus} = useOrderContext();
    const [status, setStatus] = useState("");

    const {id} = useParams()

    const upadteOrderStatus = (id)=>{

      UpdateSatus(id,status,navigate)
    }
  

  return (
   <>
   {
    orderLoading ? <Loading/>
    :
    singleOrderDetails && <Fragment>
    <div className="confirmOrderPage">
      <div>
        <div className="confirmshippingArea">
          <Typography>Order Info</Typography>
          <div className="confirmshippingAreaBox">
            <div>
              <p>Name:</p>
              <span>{ singleOrderDetails.user && singleOrderDetails.user.name}</span>
            </div>
            <div>
              <p>Phone:</p>
              <span>{ singleOrderDetails.shippingInfo && singleOrderDetails.shippingInfo.phoneNo}</span>
            </div>
            <div>
              <p>Address:</p>
              <span>{ singleOrderDetails.shippingInfo && singleOrderDetails.shippingInfo.adress}</span>
            </div>
          </div>
          {/* ======= */}
           {/* ================ */}

      <Typography>Payment</Typography>
                  <div className="orderDetailsContainerBox">
                    <div>
                      <p
                        style={{color:singleOrderDetails.paymentInfo&&
                          singleOrderDetails.paymentInfo.status=== "succeeded"
                            ? "green"
                            : "red" }}
                      >
                        {singleOrderDetails.paymentInfo &&
                        singleOrderDetails.paymentInfo.status === "succeeded"
                          ? "PAID"
                          : "NOT PAID"}
                      </p>
                    </div>

                    <div>
                      <p>Amount:</p>
                      <span>{singleOrderDetails.totalPrice && singleOrderDetails.totalPrice}</span>
                    </div>
                  </div>
        </div>
        <div className="confirmCartItems">
          <Typography>Order Items:</Typography>
          <div className="confirmCartItemsContainer">
            {singleOrderDetails.orderitem &&
              singleOrderDetails.orderitem.map((item) => (
                <div key={item.product}>
                  <img src={item.image} alt="Product" />
                  <Link to={`/product/${item.product}`}>
                    {item.name}
                  </Link>{" "}
                  <span>
                    {item.quantity} X ₹{item.price} ={" "}
                    <b>₹{item.price * item.quantity}</b>
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
     

      {/*  */}
      <div>
        <div className="orderSummary">
          <Typography>Update Order</Typography>
          <div style={{margin:"15px 0px"}}>
                    <AccountTreeIcon />
                    <select onChange={(e) => setStatus(e.target.value)} >
                      <option value="">Choose Category</option>
                      {singleOrderDetails.orderStatus === "Processing" && (
                        <option value="Shipped" >Shipped</option>
                      )}

                      {singleOrderDetails.orderStatus === "Shipped" && (
                        <option value="Delivered" >Delivered</option>
                      )}
                    </select>
                  </div>

                  <Button
                    id="createProductBtn"
                    type="submit"
                    disabled={
                        orderLoading ? true : false || status === "" ? true : false
                    }
                    onClick={()=>upadteOrderStatus(id)}
                  >
                    Process
                  </Button>
        </div>
      </div>
    </div>
  </Fragment>
   }
   </>
  )
}



export default UpdateOrder
