import React from "react";
import { FiMenu } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./Header.css";
import "../Style/Commonstyle.css";

const Header = () => {
  return (
    <div className="commonstyle ali_header">
      <div className="left_new_header">
        <NavLink to="/">
          <h1 className="text-black">ClickOrderNow</h1>
        </NavLink>
        <FiMenu />
      </div>
      {/* ================= middle div */}
      <div className="middle_new_header">
        <input type="text" placeholder="I'm shopping for..." />
        <BsSearch />
      </div>
      {/* =================== right div  */}
      <div className="right_new_header">
        <div className="svg">
          <AiOutlineShoppingCart />
          <span>0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
