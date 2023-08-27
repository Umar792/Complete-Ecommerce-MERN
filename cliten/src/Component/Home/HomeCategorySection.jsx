import React from "react";
import "./HomeCategorySection.css";
import HomeCatetgoryDressing from "./HomeCatetgoryDressing";
import { Link } from "react-router-dom";

const HomeCategorySection = ({ data }) => {
  const sortedWelcomeProduct =
    data &&
    data.filter(
      (item) => item.percentageDiscount && item.percentageDiscount >= 30
    );
  const sliceWelcomeProduct = sortedWelcomeProduct.slice(0, 24);

  return (
    <div className="main_welcome_offer">
      <div className="welcome_offer">
        {/* <p>End of season sale</p>
        <h2>Shop & enjoy up to 50% off.</h2> */}
      </div>
      <div className="main_welcome_flex">
        <div className="welcome_product_data">
          {sliceWelcomeProduct &&
            sliceWelcomeProduct.map((item) => {
              return (
                <Link
                  className="welcome_product_data_box"
                  to={`/singleProduct/${item._id}`}
                >
                  {item && item.percentageDiscount && (
                    <span className="off">{`-${
                      item && item.percentageDiscount
                    }%`}</span>
                  )}

                  <img
                    src={item && item.images && item.images[0].url}
                    alt={item && item.name}
                  />
                  <p>{item && item.name && item.name.slice(0, 10)}...</p>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default HomeCategorySection;
