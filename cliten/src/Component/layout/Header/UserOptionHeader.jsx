import React, { useState } from "react";
import SpeedDial from "@mui/material/SpeedDial";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./UserOptionHeader.css";
import { useUserContext } from "../../../ContextApi/ProductContext/UserContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../../ContextApi/ProductContext/ProductContext";
import { useOrderContext } from "../../../ContextApi/ProductContext/OrderContext";

const UserOptionHeader = ({ user }) => {
  const { getAllAdminProducts } = useProductContext();
  const { GetAllOrder } = useOrderContext();
  const { getAllUser } = useUserContext();
  const navigate = useNavigate();
  const { logout } = useUserContext();
  const [open, setOpen] = useState(false);
  const orders = () => {
    navigate("/order");
  };
  const account = () => {
    navigate("/profile");
  };

  const logoutUser = () => {
    logout();
    navigate("/");
    toast.success("logout Successfuly", {
      theme: "dark",
    });
  };
  // const card = ()=>{
  //      navigate("/card")

  // }
  const dashboard = () => {
    getAllAdminProducts();
    GetAllOrder();
    getAllUser();
    navigate("/admin/dashboard");
  };
  const options = [
    { icon: <ListAltIcon />, name: "Orders", func: orders },
    { icon: <PersonIcon />, name: "Profile", func: account },
    // { icon: <ShoppingCartIcon />, name: "Crad", func: card },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  return (
    <>
      <div className="userOption">
        {user && (
          <SpeedDial
            ariaLabel="SpeedDial tooltip example"
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            style={{ zIndex: "11" }}
            open={open}
            direction="down"
            className="speedDial"
            icon={
              <img
                className="speedDialIcon"
                src={user.avatar.url ? user.avatar.url : "./Profile.png"}
                alt="Profile"
              />
            }
          >
            {options.map((item) => (
              <SpeedDialAction
                key={item.name}
                icon={item.icon}
                tooltipTitle={item.name}
                onClick={item.func}
                tooltipOpen={window.innerWidth <= 600 ? true : false}
              />
            ))}
          </SpeedDial>
        )}
      </div>
    </>
  );
};

export default UserOptionHeader;
