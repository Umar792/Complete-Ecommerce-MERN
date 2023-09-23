import React, { useEffect, useState } from "react";
import "./SingleProductDetals.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Carousel from "react-material-ui-carousel";
import { useParams } from "react-router-dom";
import Loading from "../layout/Loading/Loading";
import ReviewCard from "./ReviewCard";
import { useProductContext } from "../../ContextApi/ProductContext/ProductContext";
import { UseCardContext } from "../../ContextApi/ProductContext/CardContext";
import { toast } from "react-toastify";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
import Rating from "@mui/material/Rating";

const SingleProductDetals = () => {
  const { id } = useParams();
  const { getCardProduct } = UseCardContext();
  const {
    getSingleProductData,
    SingleProductData: product,
    loading,
    SubmitReview,
  } = useProductContext();
  const [quentity, setquentity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const increase = () => {
    if (product.stock <= quentity) {
      setquentity(quentity);
    } else {
      let newqntity = quentity + 1;
      setquentity(newqntity);
    }
  };
  const decrease = () => {
    if (quentity <= 1) {
      setquentity(1);
    } else {
      let newqty = quentity - 1;
      setquentity(newqty);
    }
  };

  const cardProduct = () => {
    getCardProduct(id, quentity);
    toast.success("Product add to card successfuly");
  };

  useEffect(() => {
    getSingleProductData(id);
    // console.log("iiii");
  }, []);
  const options = {
    size: "large",
    value: product.rattings,
    readOnly: true,
    edit: "true",
    precision: 0.5,
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewdataSend = () => {
    const myForm = {
      ratting: rating,
      comment: comment,
      productid: id,
    };
    SubmitReview(myForm);
    setOpen(false);
  };

  return (
    // <>
    //   {loading ? (
    //     <Loading />
    //   ) : (
    //     <>
    //       {product && (
    //         <div className="ProductDetails">
    //           <div className="images">
    //             <Carousel>
    //               {product.images &&
    //                 product.images.map((item, i) => (
    //                   <img
    //                     className="CarouselImage"
    //                     key={i}
    //                     src={item.url}
    //                     alt={`${i} Slide`}
    //                     style={{ height: "500px", width: "100%" }}
    //                   />
    //                 ))}
    //             </Carousel>
    //           </div>

    //           <div>
    //             <div className="detailsBlock-1">
    //               <h2>{product.name}</h2>
    //               <p>Product # {product._id}</p>
    //             </div>
    //             <div className="detailsBlock-2">
    //               <Rating {...options} />
    //               <span className="detailsBlock-2-span">
    //                 ({product.numOfReviews} Reviews)
    //               </span>
    //             </div>
    //             <div className="detailsBlock-3">
    //               <h1>{`PKR${product.price}`}</h1>
    //               <div className="detailsBlock-3-1">
    //                 <div className="detailsBlock-3-1-1">
    //                   <button onClick={decrease}>-</button>
    //                   <p>{quentity}</p>
    //                   <button onClick={increase}>+</button>
    //                 </div>
    //                 <button
    //                   disabled={product.stock < 1 ? true : false}
    //                   onClick={cardProduct}
    //                 >
    //                   Add to Cart
    //                 </button>
    //               </div>

    //               <p>
    //                 Status:
    //                 <b
    //                   className={product.stock < 1 ? "redColor" : "greenColor"}
    //                 >
    //                   {product.stock < 1 ? "OutOfStock" : "InStock"}
    //                 </b>
    //               </p>
    //             </div>

    //             <div className="detailsBlock-4">
    //               <b>Description</b> : <p>{product.description}</p>
    //             </div>
    //           </div>
    //         </div>
    //       )}
    //     </>
    //   )}
    //   <h3 className="reviewsHeading">REVIEWS</h3>
    //   <Dialog
    //     aria-labelledby="simple-dialog-title"
    //     open={open}
    //     onClose={submitReviewToggle}
    //   >
    //     <DialogTitle>Submit Review</DialogTitle>
    //     <DialogContent className="submitDialog">
    //       <Rating
    //         onChange={(e) => setRating(e.target.value)}
    //         value={rating}
    //         size="large"
    //       />

    //       <textarea
    //         className="submitDialogTextArea"
    //         cols="30"
    //         rows="5"
    //         value={comment}
    //         onChange={(e) => setComment(e.target.value)}
    //       ></textarea>
    //     </DialogContent>
    //     <DialogActions>
    //       <Button onClick={submitReviewToggle} color="secondary">
    //         Cancel
    //       </Button>
    //       <Button color="primary" onClick={reviewdataSend}>
    //         Submit
    //       </Button>
    //     </DialogActions>
    //   </Dialog>
    //   {product.Reviews && product.Reviews[0] ? (
    //     <div className="reviews">
    //       {product.Reviews &&
    //         product.Reviews.map((review) => (
    //           <ReviewCard key={review._id} review={review} />
    //         ))}
    //     </div>
    //   ) : (
    //     <p className="noReviews">No Reviews Yet</p>
    //   )}
    // </>

    // =======================================
    // ========================================================
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-3 py-24 mx-auto">
              <div class="lg:w-4/5 mx-auto flex flex-wrap">
                <img
                  alt="ecommerce"
                  class="lg:w-1/2 w-full lg:h-auto h-96 object-contain object-center rounded"
                  src={product && product.images && product.images[0].url}
                />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  {/* <h2 class="text-sm title-font text-gray-500 tracking-widest">
                  BRAND NAME
                </h2> */}
                  <h1 class="text-gray-900 text-1xl title-font font-medium mb-1">
                    {product && product.name && product.name}
                  </h1>
                  <div class="flex mb-4">
                    <span class="flex items-center">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <span class="text-gray-600 ml-3">4 Reviews</span>
                    </span>
                  </div>
                  <p class="leading-relaxed">
                    {/* {product &&
                      product.description &&
                      product.description.slice(0, 400)} */}
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          product &&
                          product.description &&
                          product.description.slice(0, 500),
                      }}
                    />
                    ...
                    <a href="#more">
                      <span className="text-[#FF4747] cursor-pointer">
                        Read More
                      </span>
                    </a>
                  </p>

                  <div class="flex flex-col mt-3">
                    <div className="pricing_sin flex gap-2 place-items-end">
                      <span class="title-font font-medium text-3xl text-gray-900">
                        PKR{product && product.price}
                      </span>
                      <p className="off">
                        PKR{product && product.Discountprice}
                      </p>
                    </div>
                    <a
                      href={product && product.link && product.link}
                      target="_blank"
                    >
                      <button class="w-full mt-3 ml-auto text-white bg-[#FF4747] border-0 py-2 px-6 focus:outline-none  rounded">
                        Buy Now
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* =============================== */}
          <div className="my-5 px-3" id="more">
            <p className="text-3xl font-bold text-[#FF4747] mb-3">
              More About Product
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: product && product.description && product.description,
              }}
            />
          </div>
        </>
      )}
    </>
  );
};

export default SingleProductDetals;
