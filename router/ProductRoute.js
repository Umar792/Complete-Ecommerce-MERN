const express = require("express");
const router = express.Router();
const Controller = require("../controller/ProductController");
const verifyUserAdmmin = require("../middleware/AdminVerify");
const TokenVerify = require("../middleware/VeryToken");


router.post("/product/new",TokenVerify,verifyUserAdmmin("admin"),  Controller.CreateProduct);

router.get("/allproduct", Controller.allProducts);

router.get("/AdminallProducts",TokenVerify,verifyUserAdmmin("admin"), Controller.AdminallProducts);

router.put("/productUpadte/:id",TokenVerify,verifyUserAdmmin("admin"), Controller.upadteProduct);

router.delete("/productDelete/:id",TokenVerify,verifyUserAdmmin("admin"), Controller.deleteProduct);

router.put("/review",TokenVerify, Controller.addreview);

router.get("/allreview",TokenVerify, Controller.allReviews);

router.delete("/ReviewDelete",TokenVerify,verifyUserAdmmin("admin"), Controller.deleteReview);

router.get("/singleProduct/:id", Controller.SingleProduct);

module.exports = router;