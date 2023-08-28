import React, { Fragment, useRef, useState } from "react";
import "./newProduct.css";
import { Button } from "@material-ui/core";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SideBar from "./Sidebar";
import { useProductContext } from "../../ContextApi/ProductContext/ProductContext";
import Loading from "../layout/Loading/Loading";
import JoditEditor from "jodit-react";

const CreateProduct = () => {
  const { loading, CreateProduct } = useProductContext();
  const editor = useRef();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [maincategories, setmainCategory] = useState("");
  const [hot, sethot] = useState("");
  const [featured, setfeatured] = useState(null);
  const [category, setCategory] = useState("");
  const [link, setlink] = useState("");
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [Discountprice, setDiscountprice] = useState(0);
  const [percentageDiscount, setpercentageDiscount] = useState(0);

  const categories = [
    "Women's Fashion",
    "Men's Fashion",
    "Phones & Telecommunications",
    "Computer, Office & Security",
    "Consumer Electronics",
    "Jewelry & Watches",
    "Home, Pet & Appliances",
    "Bags & Shoes",
    "Toys , Kids & Babies",
    "Outdoor Fun & Sports",
    "Beauty, Health & Hair",
    "Automobiles & Motorcycles",
    "Tools & Home Improvement",
  ];
  const mainAllcategories = ["men", "boy", "women", "girl"];

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    const pData = {
      name: name,
      price: price,
      description: description,
      category: category,
      mainCategory: maincategories,
      Stock: Stock,
      images: images,
      Discountprice: Discountprice,
      percentageDiscount: percentageDiscount,
      hot: hot,
      featured: featured,
      link: link,
    };

    CreateProduct(pData);
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <div className="dashboard">
            <div>
              <SideBar />
            </div>
            <div className="newProductContainer">
              <form
                className="createProductForm"
                encType="multipart/form-data"
                onSubmit={createProductSubmitHandler}
              >
                <h1>Create Product</h1>

                <div>
                  <SpellcheckIcon />
                  <input
                    type="text"
                    placeholder="Product Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <AttachMoneyIcon />
                  <input
                    type="number"
                    placeholder="Actual Price"
                    required
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div>
                  <AttachMoneyIcon />
                  <input
                    type="number"
                    placeholder="Discount Price"
                    required
                    onChange={(e) => setDiscountprice(e.target.value)}
                  />
                </div>
                <div>
                  <AttachMoneyIcon />
                  <input
                    type="number"
                    placeholder="percentageDiscount"
                    required
                    onChange={(e) => setpercentageDiscount(e.target.value)}
                  />
                </div>
                <div>
                  <SpellcheckIcon />
                  <input
                    type="text"
                    placeholder="Hot Product"
                    required
                    value={hot}
                    onChange={(e) => sethot(e.target.value)}
                  />
                </div>

                <div>
                  <DescriptionIcon />

                  {/* <textarea
              placeholder="Product Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              cols="30"
              rows="1"
            ></textarea> */}
                  <JoditEditor
                    ref={editor}
                    value={description}
                    onChange={(newContent) => setDescription(newContent)}
                    className="editor"
                  />
                </div>
                <div>
                  <SpellcheckIcon />
                  <input
                    type="text"
                    placeholder="Product affliate link"
                    required
                    value={link}
                    onChange={(e) => setlink(e.target.value)}
                  />
                </div>

                <div>
                  <AccountTreeIcon />
                  <select onChange={(e) => setfeatured(e.target.value)}>
                    <option value="">Choose feature product</option>
                    <option value={false}>False</option>
                    <option value={true}>True</option>
                  </select>
                </div>

                <div>
                  <AccountTreeIcon />
                  <select onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Choose Category</option>
                    {categories.map((cate) => (
                      <option key={cate} value={cate}>
                        {cate}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <AccountTreeIcon />
                  <select onChange={(e) => setmainCategory(e.target.value)}>
                    <option value="">Choose Main Category</option>
                    {mainAllcategories.map((cate) => (
                      <option key={cate} value={cate}>
                        {cate}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <StorageIcon />
                  <input
                    type="number"
                    placeholder="Stock"
                    required
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>

                <div id="createProductFormFile">
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={createProductImagesChange}
                    multiple
                  />
                </div>

                <div id="createProductFormImage">
                  {imagesPreview.map((image, index) => (
                    <img key={index} src={image} alt="Product Preview" />
                  ))}
                </div>

                <Button
                  id="createProductBtn"
                  type="submit"
                  disabled={loading ? true : false}
                >
                  Create
                </Button>
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </>
  );
};

export default CreateProduct;
