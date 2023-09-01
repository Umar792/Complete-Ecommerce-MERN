import React from "react";
import { Link, NavLink } from "react-router-dom";

const ProductCrad = ({ product }) => {
  return (
    // <Link className="productCard" to={`/singleProduct/${product._id}`}>
    //   {product && product.percentageDiscount && (
    //     <span className="off">{`-${
    //       product && product.percentageDiscount
    //     }%`}</span>
    //   )}

    //   <img
    //     src={product && product.images && product.images[0].url}
    //     alt={product && product.name}
    //   />
    //   <div className="pricing flex justify-between place-items-end">
    //     <span>{`$${product.price}`}</span>
    //     <p className="disount">${product && product.Discountprice}</p>
    //   </div>
    //   <p>{product && product.name && product.name.slice(0, 30)}...</p>
    //   <font className="text-[green]">100% Free Sgipping</font>
    //   <a href={product && product.link && product.link} target="_blank">
    //     <button>Shop Now</button>
    //   </a>
    // </Link>
    <>
      <div className="new_product_card m-[20px] card w-64 bg-base-100 shadow-xl">
        <Link className="" to={`/singleProduct/${product._id}`}>
          <figure>
            <img
              className="w-[100%] h-[250px] object-fill"
              src={product && product.images && product.images[0].url}
              alt={product && product.name}
            />
          </figure>
        </Link>

        <div className="card-body">
          {/* <h2 className="card-title">{}</h2> */}
          <div className="pricing flex justify-start mb-1 place-items-end">
            <Link
              className="flex place-items-center"
              to={`/singleProduct/${product._id}`}
            >
              <span>{`$${product.price}`}</span>
              <p className="disount">${product && product.Discountprice}</p>
            </Link>
          </div>
          <Link
            className="flex place-items-center"
            to={`/singleProduct/${product._id}`}
          >
            <p className="mb-1">
              {product && product.name && product.name.slice(0, 25)}...
            </p>
          </Link>
          <div className="card-actions justify-end">
            <a href={product && product.link} rel="noreferrer" target="_blank">
              <button className="btn mt-2 bg-[#FF4747] text-white hover:bg-[#FF4747]">
                Buy Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCrad;
