import React, { Fragment, useEffect } from "react";
import "./AllProducts.css";
import ProductCard from "../Home/ProductCrad"
import Loading from "../layout/Loading/Loading";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../ContextApi/ProductContext/ProductContext";
// import Typography from "@material-ui/core/Typography";

const AllProducts = () => {
  const {getfilterproducts,filterproduct : products,loading} = useProductContext();
  const {keyword} = useParams();
  useEffect(()=>{
    getfilterproducts(keyword);  
 },[keyword]);
  return (
    <>
    {
      products.length > 0 ? 
      (
        <Fragment>
    {loading ? (
      <Loading />
    ) : (
      <Fragment>
        <h2 className="productsHeading">Your Serach Product </h2>

        <div className="products">
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
       
        
      </Fragment>
    )}
  </Fragment>
      ): <h2 className="text-center my-5 p-3">No Producr were found</h2>
    }
    </>
  )
}

export default AllProducts


