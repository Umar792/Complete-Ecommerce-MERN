import React from "react";
import { Link } from "react-router-dom";

const ProductCrad = ({ product }) => {
  console.log(product);
  return (
    <Link className="productCard" to={`/singleProduct/${product._id}`}>
      <img
        src={product && product.images && product.images[0].url}
        alt={product && product.name}
      />
      <div className="pricing flex justify-between place-items-end">
        <span>{`$${product.price}`}</span>
        <p className="disount">${product && product.Discountprice}</p>
      </div>
      <font className="text-[green]">100% Free Sgipping</font>
      {/* <p>{product && product.name && product.name.slice(0, 30)}...</p> */}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </Link>
  );
};

export default ProductCrad;
