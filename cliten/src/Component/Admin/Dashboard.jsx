import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useProductContext } from "../../ContextApi/ProductContext/ProductContext";
import { useUserContext } from "../../ContextApi/ProductContext/UserContext";
import { useOrderContext } from "../../ContextApi/ProductContext/OrderContext";

const Dashboard = () => {
  const {AdminAllProducts} = useProductContext();
const {Allorders} = useOrderContext()
const {AlluserData} = useUserContext()

let TotalAmount = 0;

Allorders && Allorders.forEach((item)=>{
  TotalAmount +=item.totalPrice
});
    
  return (
    <div className="dashboard">
        <div>
      <Sidebar />
        </div>

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> PKR :{TotalAmount}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              <p>{AdminAllProducts.length}</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>{Allorders &&  Allorders.length}</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>{AlluserData && AlluserData.length}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
