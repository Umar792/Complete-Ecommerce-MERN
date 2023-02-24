import React, { useState } from "react";
import "./Header.css";
import {GiTireIronCross} from "react-icons/gi"
import {
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineHeart,
} from "react-icons/ai";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import {IoMdArrowDropdown} from "react-icons/io"
import { NavLink,useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import Backdrop from '@mui/material/Backdrop';


const Header = () => {
  const navigate = useNavigate()
   const [togglemenu, setTogglemenu] = useState(false);
  const [middleHeaderToggle, setMiddleHeaderToggle] = useState(false);
  const [keyword , setkeyword] = useState("");

  const datasubmit = (e)=>{
    e.preventDefault();
    if(keyword.trim()){
      navigate(`/serach/${keyword}`)
      setkeyword("")
    }else{
      toast.error("No product were found")
      navigate("/");

    }
    

  }
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
          <input type="text" placeholder="Search" 
            onChange={(e)=> setkeyword(e.target.value)}
            value={keyword}
          />
          <AiOutlineSearch className="m-search" type="submit" onClick={datasubmit} />
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
          <AiOutlineHeart className="r-icon" />
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
          <li>All</li>
        </div>
        <ul>
          <li>
            <NavLink to="/men">Men</NavLink>
          </li>
          <li>
            <NavLink to="/women">Women</NavLink>
          </li>
          <li>
            <NavLink to="/boy">Boy</NavLink>
          </li>
          <li>
            <NavLink to="/girl">Girl</NavLink>
          </li>
        </ul>
      </div>
{/* =================================== siderbar header  */}
        <div className={togglemenu ? "sidebar" : "sidebar mobile"}>
        <Backdrop 
        sx={{ color: "black"}}
        style={{zIndex:"-100"}}
        open={togglemenu}
        onClick={()=> setTogglemenu(!togglemenu)}        
        />
        <div className='sidebar-cross'>
          <p>Menu</p>
        <GiTireIronCross className='cross'  onClick={()=> setTogglemenu(!togglemenu)} />
        </div>
        <div>
            <ul className='sidebar-menus'>
              <li>Men<IoMdArrowDropdown/>
                <ul>
               <div className="dropDown">
               <NavLink  onClick={()=> setTogglemenu(!togglemenu)} to='/boski'><li>BOSKI</li> </NavLink>
                <NavLink onClick={()=> setTogglemenu(!togglemenu)}  to='/wash&wear'><li>WASH & WEAR</li> </NavLink>
                <NavLink onClick={()=> setTogglemenu(!togglemenu)}  to='/kurta'><li>KURTA</li> </NavLink>
                <NavLink onClick={()=> setTogglemenu(!togglemenu)}  to='/menshawl'><li>MEN SHAWL</li> </NavLink>
                <NavLink  onClick={()=> setTogglemenu(!togglemenu)} to='/cotton'><li>COTTON</li> </NavLink>
                <NavLink onClick={()=> setTogglemenu(!togglemenu)}  to='/karandi'><li>KARANDI</li> </NavLink>
               </div>
                </ul>
              </li>
              <hr/>
              <li>Women<IoMdArrowDropdown/>
                <ul>
               <div className="dropDown">
               <NavLink  onClick={()=> setTogglemenu(!togglemenu)} to='/cantelle'><li>CHANTELLE</li> </NavLink>
                <NavLink onClick={()=> setTogglemenu(!togglemenu)}  to='/dupata'><li>DUPATTAS</li> </NavLink>
                <NavLink onClick={()=> setTogglemenu(!togglemenu)}  to='/readytowear'><li>READY TO WEAR</li> </NavLink>
                <NavLink onClick={()=> setTogglemenu(!togglemenu)}  to='/womenshall'><li>SHAWLS</li> </NavLink>
                <NavLink  onClick={()=> setTogglemenu(!togglemenu)} to='/bottom'><li>BOTTOMS</li> </NavLink>
                <NavLink onClick={()=> setTogglemenu(!togglemenu)}  to='/offer'><li>SPECIAL PRICES</li> </NavLink>
               </div>
                </ul>
              </li>
              <hr/>
              <li>Boy<IoMdArrowDropdown/>
                <ul>
               <div className="dropDown">
               <NavLink  onClick={()=> setTogglemenu(!togglemenu)} to='/cantelle'><li>CHANTELLE</li> </NavLink>
                <NavLink onClick={()=> setTogglemenu(!togglemenu)}  to='/dupata'><li>DUPATTAS</li> </NavLink>
                <NavLink onClick={()=> setTogglemenu(!togglemenu)}  to='/readytowear'><li>READY TO WEAR</li> </NavLink>
                <NavLink onClick={()=> setTogglemenu(!togglemenu)}  to='/womenshall'><li>SHAWLS</li> </NavLink>
                <NavLink  onClick={()=> setTogglemenu(!togglemenu)} to='/bottom'><li>BOTTOMS</li> </NavLink>
                <NavLink onClick={()=> setTogglemenu(!togglemenu)}  to='/offer'><li>SPECIAL PRICES</li> </NavLink>
               </div>
                </ul>
              </li>
              <hr/>
              <li>Girl<IoMdArrowDropdown/>
                <ul>
               <div className="dropDown">
               <NavLink  onClick={()=> setTogglemenu(!togglemenu)} to='/cantelle'><li>CHANTELLE</li> </NavLink>
                <NavLink onClick={()=> setTogglemenu(!togglemenu)}  to='/dupata'><li>DUPATTAS</li> </NavLink>
                <NavLink onClick={()=> setTogglemenu(!togglemenu)}  to='/readytowear'><li>READY TO WEAR</li> </NavLink>
                <NavLink onClick={()=> setTogglemenu(!togglemenu)}  to='/womenshall'><li>SHAWLS</li> </NavLink>
                <NavLink  onClick={()=> setTogglemenu(!togglemenu)} to='/bottom'><li>BOTTOMS</li> </NavLink>
                <NavLink onClick={()=> setTogglemenu(!togglemenu)}  to='/offer'><li>SPECIAL PRICES</li> </NavLink>
               </div>
                </ul>
              </li>
              <hr/>
               
            </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
