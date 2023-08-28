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
              {/* <h2 className="productsHeading">{title}</h2> */}
              <p className="my-4 border-b-2 pb-2 w-[300px] mx-auto text-center">
                Toatal Products : {products && products.length}
              </p>
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
        <h2 className="text-center bg-[gray] my-5 p-4 text-white text-2xl w-[320px] mx-auto">
          No Product available
        </h2>
      )}
    </>
  );
};

export default MainCategory;
