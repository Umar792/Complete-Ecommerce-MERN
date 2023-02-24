import React from 'react';
import {Link} from "react-router-dom";
import  ReactStars from "react-rating-stars-component";



const ProductCrad = ({product}) => {
  console.log(product);
  const options = {
    edit:false,
    color: "rgba(20,20,20,.1)",
    activeColor:"tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value:product.rattings,
    isHalf:true
  };
   
  return (
   
    <Link className="productCard" to={`/singleProduct/${product._id}`}>
    <img src={product && product.images && product.images[0].url} alt={product.name} />
    <p>{ product.name}</p>
    <div>
      <ReactStars {...options} />
      <span className="productCardSpan">
        
        ({product.numOfReviews}Reviews)
      </span>
    </div>
    <span>{`PKR${product.price}`}</span>
  </Link>
  
  )
}

export default ProductCrad
