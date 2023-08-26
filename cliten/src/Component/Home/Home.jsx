import React from "react";
import "./Home.css";
import ProductCrad from "./ProductCrad";
import Loading from "../layout/Loading/Loading";
import Hero from "./Hero";
import HomeCategorySection from "./HomeCategorySection";
import { useProductContext } from "../../ContextApi/ProductContext/ProductContext";

const Home = () => {
  const { featured: products, loading } = useProductContext();
  const filterFeaturedproduct = products && products.slice(-12);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Hero />
          <HomeCategorySection data={products} />
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {filterFeaturedproduct &&
              filterFeaturedproduct.map((curElem) => {
                return (
                  <div key={curElem._id}>
                    <ProductCrad product={curElem} />
                  </div>
                );
              })}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
