import React from "react";
import { Link } from "react-router-dom";

const ProductCrad = ({ product }) => {
  return (
    <Link className="productCard" to={`/singleProduct/${product._id}`}>
      {product && product.percentageDiscount && (
        <span className="off">{`-${
          product && product.percentageDiscount
        }%`}</span>
      )}

      <img
        src={product && product.images && product.images[0].url}
        alt={product && product.name}
      />
      <div className="pricing flex justify-between place-items-end">
        <span>{`$${product.price}`}</span>
        <p className="disount">${product && product.Discountprice}</p>
      </div>
      <p>{product && product.name && product.name.slice(0, 30)}...</p>
      <font className="text-[green]">100% Free Sgipping</font>
      <a href={product && product.link && product.link}>
        <button>Shop Now</button>
      </a>
    </Link>
  );
};

export default ProductCrad;
