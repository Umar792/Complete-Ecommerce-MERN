import React, { Fragment } from "react";
import { useProductContext } from "../../ContextApi/ProductContext/ProductContext";
import "../product/AllProducts.css";
import Loading from "../layout/Loading/Loading";
import ProductCard from "../Home/ProductCrad";

const MainCategory = ({ products, title }) => {
  const { loading } = useProductContext();
  return (
    <>
      {products.length > 0 ? (
        <Fragment>
          {loading ? (
            <Loading />
          ) : (
            <Fragment>
              <h2 className="productsHeading">{title}</h2>
              <p className="text-center">Toatal Products : {products.length}</p>
              <div className="products">
                {products &&
                  products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
              </div>

             
            </Fragment>
          )}
        </Fragment>
      ) : (
        <h2 className="text-center my-5 p-3">No Product available</h2>
      )}
    </>
  );
};

export default MainCategory;
