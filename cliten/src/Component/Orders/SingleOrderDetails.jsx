import React, { Fragment, useEffect } from "react";
import "./SingleOrderDetails.css";
import { Link, useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Loading from "../layout/Loading/Loading";
import { useOrderContext } from "../../ContextApi/ProductContext/OrderContext";


const SingleOrderDetails = () => {
  const { GetSingleOrder, singleOrderDetails, orderLoading } =
    useOrderContext();


  const { id } = useParams();
  useEffect(() => {
    GetSingleOrder(id);
  }, [id]);


 
  return (
    <Fragment>
      {orderLoading ? (
        <Loading />
      ) : (
        <Fragment>
          <div className="orderDetailsPage">
            <div className="orderDetailsContainer">
              <Typography component="h1">
                Order #{singleOrderDetails && singleOrderDetails._id}
              </Typography>
              <Typography>Shipping Info</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p>Name:</p>
                  <span>
                    {singleOrderDetails.user && singleOrderDetails.user.name}
                  </span>
                </div>
                <div>
                  <p>Phone:</p>
                  <span>
                    {singleOrderDetails.shippingInfo &&
                      singleOrderDetails.shippingInfo.phoneNo}
                  </span>
                </div>
                <div>
                  <p>Address:</p>
                  <span>
                    {singleOrderDetails.shippingInfo &&
                      `${singleOrderDetails.shippingInfo.adress}, ${singleOrderDetails.shippingInfo.city}, ${singleOrderDetails.shippingInfo.state}, ${singleOrderDetails.shippingInfo.pinCode}, ${singleOrderDetails.shippingInfo.country}`}
                  </span>
                </div>
              </div>
              <Typography>Payment</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      singleOrderDetails.paymentInfo &&
                      singleOrderDetails.paymentInfo.status === "succeeded"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {singleOrderDetails.paymentInfo &&
                    singleOrderDetails.paymentInfo.status === "succeeded"
                      ? "PAID"
                      : "NOT PAID"}
                  </p>
                </div>

                <div>
                  <p>Amount:</p>
                  <span>
                    {singleOrderDetails.totalPrice &&
                      singleOrderDetails.totalPrice}
                  </span>
                </div>
              </div>

              <Typography>Order Status</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      singleOrderDetails.orderStatus &&
                      singleOrderDetails.orderStatus === "Delivered"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {singleOrderDetails.orderStatus &&
                      singleOrderDetails.orderStatus}
                  </p>
                </div>
              </div>
            </div>

            <div className="orderDetailsCartItems">
              <Typography>Order Items:</Typography>
              <div className="orderDetailsCartItemsContainer">
                {singleOrderDetails.orderitem &&
                  singleOrderDetails.orderitem.map((item) => (
                    <div key={item.product}>
                      <img src={item.image} alt="Product" />
                      <Link to={`/singleProduct/${item.product}`}>
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
        </Fragment>
      )}
    </Fragment>
  );
};

export default SingleOrderDetails;
