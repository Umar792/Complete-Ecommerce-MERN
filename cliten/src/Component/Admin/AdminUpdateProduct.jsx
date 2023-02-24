import React, { Fragment, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";

const AdminUpdateProduct = () => {
  const {loading,SingleProductData,UpdateProduct} = useProductContext()
const {id} = useParams();
const navigate = useNavigate()

  const [name, setName] = useState( SingleProductData ? SingleProductData.name : "");
  const [price, setPrice] = useState(SingleProductData ? SingleProductData.price: 0);
  const [description, setDescription] = useState(SingleProductData ? SingleProductData.description : "");
  const [maincategories, setmainCategory] = useState(SingleProductData ? SingleProductData.mainCategory : "");
  const [category, setCategory] = useState(SingleProductData ? SingleProductData.category : "");
  const [Stock, setStock] = useState(SingleProductData ? SingleProductData.stock : 0);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [oldImages, setOldImages] = useState(SingleProductData ? SingleProductData.images : []);

  const categories = [
    "boski",
    "kurta",
    "wash&wear",
    "menShawl",
    "cotton",
    "karandi",
  ];
  const mainAllcategories = [
      "men",
      "boy",
      "women",
      "girl"
  ];

 


  const createProductSubmitHandler = (e) => {
    e.preventDefault();



  const pData = {
    "name": name,
    "price": price,
    "description" : description,
    "category":category,
    "mainCategory": maincategories,
    "stock":Stock,
    "images" : images

  }
  UpdateProduct(id,pData,navigate)


  };

  const updateProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);
    setOldImages([]);

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
   {
    loading ? <Loading/>
    :
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
              placeholder="Price"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div>
            <DescriptionIcon />

            <textarea
              placeholder="Product Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              cols="30"
              rows="1"
            ></textarea>
          </div>

          <div>
            <AccountTreeIcon />
            <select value={category} onChange={(e) => setCategory(e.target.value)} >
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
            <select onChange={(e) => setmainCategory(e.target.value)} value={maincategories}>
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
              value={Stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          <div id="createProductFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={updateProductImagesChange}
                multiple
              />
            </div>

            <div id="createProductFormImage">
              {oldImages &&
                oldImages.map((image, index) => (
                  <img key={index} src={image.url} alt="Old Product Preview" />
                ))}
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
   }
   </>
  )
}

export default AdminUpdateProduct
