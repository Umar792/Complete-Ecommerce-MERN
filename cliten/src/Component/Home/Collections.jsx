import React from "react";
import "./Collections.css";
import { NavLink } from "react-router-dom";

const collectiondata = [
  {
    title: "Women's Fashion",
    link: "/category/Women's Fashion",
    img: "https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Mens's Fashion",
    link: "/category/Mens's Fashion",
    img: "https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Jewelry & Watches",
    link: "/category/Jewelry & Watches",
    img: "https://images.pexels.com/photos/9978941/pexels-photo-9978941.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Bags & Shoes",
    link: "/category/Bags & Shoes",
    img: "https://images.pexels.com/photos/14447086/pexels-photo-14447086.jpeg?auto=compress&cs=tinysrgb&w=600",
  },

  {
    title: "Toys , Kids & Babies",
    link: "/category/Toys , Kids & Babies",
    img: "https://images.pexels.com/photos/3661335/pexels-photo-3661335.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Outdoor Fun & Sports",
    link: "/category/Outdoor Fun & Sports",
    img: "https://images.pexels.com/photos/1080884/pexels-photo-1080884.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Collections = () => {
  return (
    <div className="main_collection">
      <h2 className="text-center my-4 text-[#FF4747] p-1 font-bold text-4xl">
        New Collection
      </h2>
      <div className="collections">
        {collectiondata &&
          collectiondata.map((item, index) => {
            return (
              <div className="collection_box" key={index}>
                <NavLink to={item.link}>
                  <img className="img" src={item.img && item.img} alt="" />
                  <h2>{item.title}</h2>
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Collections;
