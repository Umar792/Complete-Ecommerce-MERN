import React from "react";
import "./AllproductCall.css";
import Categories from "./Categories";
import { FaSearchPlus } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const AllproductCall = ({ProductsData}) => {
  return (
    <div>
      <div className="products-flex">
        <div className="catage">
          <Categories />
        </div>
        {ProductsData.length > 0 ? (
              <div className="Allproducts">
                {ProductsData.map((curElem, index) => {
                  return (
                    <div key={index}>
                      <NavLink to={`/singleproduct/${curElem._id}`}>
                        <div className="Allproducts-grid" key={index}>
                          <img
                            src={curElem.images[0].url}
                            style={{ width: "100%", height: "85%" }}
                            alt={curElem.name}
                          />
                          <p className="title">{curElem.name}</p>
                          <p className="price">Price :{`PKR${curElem.price}`}</p>
                          <div className="allp-icons">
                            <AiOutlineShoppingCart className="a-ocon" />
                            <FaSearchPlus className="a-ocon" />
                            <AiOutlineHeart className="a-ocon" />
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p>No Products avalilable</p>
            )}
      </div>
    </div>
  );
};

export default AllproductCall;
