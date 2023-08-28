import React from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../ContextApi/ProductContext/ProductContext";
import MainCategory from "../commonAllMainCategory/MainCategory";

const CategoryPage = () => {
  const { allproduct } = useProductContext();
  const { name } = useParams();
  const filterCategorywise =
    allproduct && allproduct.filter((item) => item.category === name);

  return (
    <div>
      <MainCategory products={filterCategorywise} />
    </div>
  );
};

export default CategoryPage;
