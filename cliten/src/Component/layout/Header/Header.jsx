import React, { useState } from "react";
import "./Header.css";
import { GiTireIronCross } from "react-icons/gi";
import {
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineHeart,
  AiOutlineLaptop,
  AiOutlineCamera,
} from "react-icons/ai";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Backdrop from "@mui/material/Backdrop";
import { IoWomanOutline } from "react-icons/io5";
import { FaTshirt } from "react-icons/fa";
import { BsFillPhoneFill, BsHandbag, BsTools } from "react-icons/bs";
import { GiJewelCrown } from "react-icons/gi";
import { BiBed, BiFootball } from "react-icons/bi";
import { MdOutlineToys } from "react-icons/md";
import { GiHealthPotion } from "react-icons/gi";
import { FcAutomotive } from "react-icons/fc";

const Header = () => {
  const navigate = useNavigate();
  const [togglemenu, setTogglemenu] = useState(false);
  const [middleHeaderToggle, setMiddleHeaderToggle] = useState(false);
  const [keyword, setkeyword] = useState("");

  const datasubmit = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/serach/${keyword}`);
      setkeyword("");
    } else {
      toast.error("No product were found");
      navigate("/");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // Check if the pressed key is Enter
      datasubmit(e);
    }
  };
  return (
    <>
      <div className="haeder">
        <div className="left-header">
          <div className="heading">
            <NavLink to="/">
              <h2>ClickOrderNow</h2>
            </NavLink>
          </div>
        </div>

        {/* ==== middle header  */}
        <div
          className={
            middleHeaderToggle
              ? "middle-header-right middle-header"
              : "middle-header"
          }
        >
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setkeyword(e.target.value)}
            value={keyword}
            onKeyDown={handleKeyDown}
          />
          <AiOutlineSearch
            className="m-search"
            type="submit"
            onClick={datasubmit}
          />
        </div>
        {/* =============== right header  */}
        <div className="right-header">
          {middleHeaderToggle ? (
            <RxCross1
              className="r-icon search"
              onClick={() => setMiddleHeaderToggle(!middleHeaderToggle)}
            />
          ) : (
            <AiOutlineSearch
              className="r-icon search"
              onClick={() => setMiddleHeaderToggle(!middleHeaderToggle)}
            />
          )}
          <NavLink to="/login">
            <MdOutlinePermContactCalendar className="r-icon" />
          </NavLink>
          <NavLink to="/card">
            <AiOutlineShopping className="r-icon" />
          </NavLink>
        </div>
      </div>

      {/* ==================== bottom header */}
      <div className="bottom-header">
        <div className="burger">
          <RxHamburgerMenu
            className="burger-icon"
            onClick={() => setTogglemenu(!togglemenu)}
          />
          <li>Categories</li>
        </div>
        <ul>
          <li>
            <NavLink to="/men">Men</NavLink>
          </li>
          <li>
            <NavLink to="/women">Women</NavLink>
          </li>
        </ul>
      </div>
      {/* =================================== siderbar header  */}
      <div className={togglemenu ? "sidebar" : "sidebar mobile"}>
        <Backdrop
          sx={{ color: "black" }}
          style={{ zIndex: "-100" }}
          open={togglemenu}
          onClick={() => setTogglemenu(!togglemenu)}
        />
        <div className="sidebar-cross">
          <p>Menu</p>
          <GiTireIronCross
            className="cross"
            onClick={() => setTogglemenu(!togglemenu)}
          />
        </div>
        <div>
          <ul className="sidebar-menus">
            {/* <li>
              Men
              <IoMdArrowDropdown />
              <ul>
                <div className="dropDown">
                  <NavLink
                    onClick={() => setTogglemenu(!togglemenu)}
                    to="/boski"
                  >
                    <li>BOSKI</li>{" "}
                  </NavLink>
                  <NavLink
                    onClick={() => setTogglemenu(!togglemenu)}
                    to="/wash&wear"
                  >
                    <li>WASH & WEAR</li>{" "}
                  </NavLink>
                  <NavLink
                    onClick={() => setTogglemenu(!togglemenu)}
                    to="/kurta"
                  >
                    <li>KURTA</li>{" "}
                  </NavLink>
                  <NavLink
                    onClick={() => setTogglemenu(!togglemenu)}
                    to="/menshawl"
                  >
                    <li>MEN SHAWL</li>{" "}
                  </NavLink>
                  <NavLink
                    onClick={() => setTogglemenu(!togglemenu)}
                    to="/cotton"
                  >
                    <li>COTTON</li>{" "}
                  </NavLink>
                  <NavLink
                    onClick={() => setTogglemenu(!togglemenu)}
                    to="/karandi"
                  >
                    <li>KARANDI</li>{" "}
                  </NavLink>
                </div>
              </ul>
            </li>
            <hr />
            <li>
              Women
              <IoMdArrowDropdown />
              <ul>
                <div className="dropDown">
                  <NavLink
                    onClick={() => setTogglemenu(!togglemenu)}
                    to="/cantelle"
                  >
                    <li>CHANTELLE</li>{" "}
                  </NavLink>
                  <NavLink
                    onClick={() => setTogglemenu(!togglemenu)}
                    to="/dupata"
                  >
                    <li>DUPATTAS</li>{" "}
                  </NavLink>
                  <NavLink
                    onClick={() => setTogglemenu(!togglemenu)}
                    to="/readytowear"
                  >
                    <li>READY TO WEAR</li>{" "}
                  </NavLink>
                  <NavLink
                    onClick={() => setTogglemenu(!togglemenu)}
                    to="/womenshall"
                  >
                    <li>SHAWLS</li>{" "}
                  </NavLink>
                  <NavLink
                    onClick={() => setTogglemenu(!togglemenu)}
                    to="/bottom"
                  >
                    <li>BOTTOMS</li>{" "}
                  </NavLink>
                  <NavLink
                    onClick={() => setTogglemenu(!togglemenu)}
                    to="/offer"
                  >
                    <li>SPECIAL PRICES</li>{" "}
                  </NavLink>
                </div>
              </ul>
            </li> */}
            {/* <hr />
            <li>
              Boy
              <IoMdArrowDropdown />
              <ul>
                <div className="dropDown">
                  <NavLink
                    onClick={() => setTogglemenu(!togglemenu)}
                    to="/cantelle"
                  >
                    <li>CHANTELLE</li>{" "}
                  </NavLink>
                  <NavLink
                    onClick={() => setTogglemenu(!togglemenu)}
                    to="/dupata"
                  >
                    <li>DUPATTAS</li>{" "}
                  </NavLink>
                  <NavLink
                    onClick={() => setTogglemenu(!togglemenu)}
                    to="/readytowear"
                  >
                    <li>READY TO WEAR</li>{" "}
                  </NavLink>
                  <NavLink
                    onClick={() => setTogglemenu(!togglemenu)}
                    to="/womenshall"
                  >
                    <li>SHAWLS</li>{" "}
                  </NavLink>
                  <NavLink
                    onClick={() => setTogglemenu(!togglemenu)}
                    to="/bottom"
                  >
                    <li>BOTTOMS</li>{" "}
                  </NavLink>
                  <NavLink
                    onClick={() => setTogglemenu(!togglemenu)}
                    to="/offer"
                  >
                    <li>SPECIAL PRICES</li>{" "}
                  </NavLink>
                </div>
              </ul>
            </li>
            <hr />
            <li>
              Girl
              <IoMdArrowDropdown />
              <ul>
                <div className="dropDown">
                  <NavLink
                    onClick={() => setTogglemenu(!togglemenu)}
                    to="/cantelle"
                  >
                    <li>CHANTELLE</li>{" "}
                  </NavLink>
                  <NavLink
                    onClick={() => setTogglemenu(!togglemenu)}
                    to="/dupata"
                  >
                    <li>DUPATTAS</li>{" "}
                  </NavLink>
                  <NavLink
                    onClick={() => setTogglemenu(!togglemenu)}
                    to="/readytowear"
                  >
                    <li>READY TO WEAR</li>{" "}
                  </NavLink>
                  <NavLink
                    onClick={() => setTogglemenu(!togglemenu)}
                    to="/womenshall"
                  >
                    <li>SHAWLS</li>{" "}
                  </NavLink>
                  <NavLink
                    onClick={() => setTogglemenu(!togglemenu)}
                    to="/bottom"
                  >
                    <li>BOTTOMS</li>{" "}
                  </NavLink>
                  <NavLink
                    onClick={() => setTogglemenu(!togglemenu)}
                    to="/offer"
                  >
                    <li>SPECIAL PRICES</li>{" "}
                  </NavLink>
                </div>
              </ul>
            </li>
            <hr /> */}
            {/* ==========================================  */}
            {/* ============================================================================================ */}
            <NavLink to="/category/Women's Fashion">
              <div className="innerli">
                <IoWomanOutline />
                <li>Women's Fashion</li>
              </div>
            </NavLink>
            <NavLink to="/category/Men's Fashion">
              <div className="innerli">
                <FaTshirt />
                <li>Men's Fashion</li>
              </div>
            </NavLink>
            <NavLink to="/category/Phones & Telecommunications">
              <div className="innerli">
                <BsFillPhoneFill />
                <li>Phones & Telecommunications</li>
              </div>
            </NavLink>
            <NavLink to="/category/Computer, Office & Security">
              <div className="innerli">
                <AiOutlineLaptop />
                <li>Computer, Office & Security</li>
              </div>
            </NavLink>
            <NavLink to="/category/Consumer Electronics">
              <div className="innerli">
                <AiOutlineCamera />
                <li>Consumer Electronics</li>
              </div>
            </NavLink>
            <NavLink to="/category/Jewelry & Watches">
              <div className="innerli">
                <GiJewelCrown />
                <li>Jewelry & Watches</li>
              </div>
            </NavLink>
            <NavLink to="/category/Home, Pet & Appliances">
              <div className="innerli">
                <BiBed />
                <li>Home, Pet & Appliances</li>
              </div>
            </NavLink>
            <NavLink to="/category/Bags & Shoes">
              <div className="innerli">
                <BsHandbag />
                <li>Bags & Shoes</li>
              </div>
            </NavLink>
            <NavLink to="/category/Toys , Kids & Babies">
              <div className="innerli">
                <MdOutlineToys />
                <li>Toys , Kids & Babies</li>
              </div>
            </NavLink>
            <NavLink to="/category/Outdoor Fun & Sports">
              <div className="innerli">
                <BiFootball />
                <li>Outdoor Fun & Sports</li>
              </div>
            </NavLink>
            <NavLink to="/category/Beauty, Health & Hair">
              <div className="innerli">
                <GiHealthPotion />
                <li>Beauty, Health & Hair</li>
              </div>
            </NavLink>
            <NavLink to="/category/Automobiles & Motorcycles">
              <div className="innerli">
                <FcAutomotive />
                <li>Automobiles & Motorcycles</li>
              </div>
            </NavLink>
            <NavLink to="/category/Tools & Home Improvement">
              <div className="innerli">
                <BsTools />
                <li>Tools & Home Improvement</li>
              </div>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
