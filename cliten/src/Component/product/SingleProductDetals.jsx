import React, { useEffect, useState } from 'react';
import "./SingleProductDetals.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Carousel from "react-material-ui-carousel";
import {useParams} from "react-router-dom";
import Loading from '../layout/Loading/Loading';
import ReviewCard from './ReviewCard';
import { useProductContext } from '../../ContextApi/ProductContext/ProductContext';
import { UseCardContext } from '../../ContextApi/ProductContext/CardContext';
import { toast } from "react-toastify";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import Rating from '@mui/material/Rating';



const SingleProductDetals = () => {
    const {id} = useParams();
    const {getCardProduct } = UseCardContext()
    const {getSingleProductData,SingleProductData : product,loading,SubmitReview} = useProductContext();
   const [quentity,setquentity] = useState(1);
   const [open, setOpen] = useState(false);
   const [rating, setRating] = useState(0);
   const [comment, setComment] = useState("");
   const increase = ()=>{
    if(product.stock <= quentity){
      setquentity(quentity)
    }else{
      let newqntity = quentity + 1;
      setquentity(newqntity)
    }

   }
   const decrease = ()=>{
    if(quentity <= 1){
      setquentity(1)
    }else{
      let newqty = quentity - 1;
      setquentity(newqty)
    }
   }

   const cardProduct = ()=>{
    getCardProduct(id,quentity);
    toast.success("Product add to card successfuly")
   }

    useEffect(()=>{
      getSingleProductData(id);
      // console.log("iiii");
    },[])
    const options = {
        size : "large",
        value:product.rattings,
        readOnly:true,
        edit:"true",
        precision : 0.5
      };

      const submitReviewToggle = () => {
        open ? setOpen(false) : setOpen(true);
      }; 
      
      const reviewdataSend = ()=>{
        const myForm = {
          ratting : rating,
          comment : comment,
          productid : id
        }
        SubmitReview(myForm)
        setOpen(false) 
      }
      
  return (
    <>
    {
        loading ? <Loading/> :
        <>
      {
        product && 
        <div className="ProductDetails">
        <div className='images'>
        <Carousel >
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                      style={{ height:"500px", width:"100%"}}
                    />
                  ))}
              </Carousel>
        </div>

        <div>
          <div className="detailsBlock-1">
            <h2>{product.name}</h2>
            <p>Product # {product._id}</p>
          </div>
          <div className="detailsBlock-2">
            <Rating {...options} />
            <span className="detailsBlock-2-span">
              ({product.numOfReviews} Reviews)
            </span>
          </div>
          <div className="detailsBlock-3">
            <h1>{`PKR${product.price}`}</h1>
            <div className="detailsBlock-3-1">
              <div className="detailsBlock-3-1-1">
                <button onClick={decrease}>-</button>
                <p>{quentity}</p>
                <button onClick={increase}>+</button>
              </div>
              <button
                disabled={product.stock < 1 ? true : false}
                onClick={cardProduct}
              >
                Add to Cart
              </button>
            </div>

            <p>
              Status:
              <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                {product.stock < 1 ? "OutOfStock" : "InStock"}
              </b>
            </p>
          </div>

          <div className="detailsBlock-4">
            <b>Description</b> : <p>{product.description}</p>
          </div>

          <button  className="submitReview" onClick={submitReviewToggle}>
            Submit Review
          </button>
        </div>
        
      </div>
      }

        </>
    }
    <h3 className="reviewsHeading">REVIEWS</h3>
    <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button  color="primary" onClick={reviewdataSend}>
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        {product.Reviews && product.Reviews[0] ? (
            <div className="reviews">
              {product.Reviews &&
                product.Reviews.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
            </div>
          ) : (
            <p className="noReviews">No Reviews Yet</p>
          )}
    </>
    
  )
}

export default SingleProductDetals
