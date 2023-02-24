const express = require("express");
const router = express.Router();
const Controller = require("../controller/orderController");
const verifyUserAdmmin = require("../middleware/AdminVerify");
const TokenVerify = require("../middleware/VeryToken");



router.post("/order/new", Controller.newOrder);


router.get("/singleOrder/:id",TokenVerify, Controller.singleOrder);

router.get("/loginUserOrder",TokenVerify, Controller.loginUserOrder);

router.put("/UpdateOrderStatus/:id",TokenVerify, verifyUserAdmmin("admin"), Controller.OrderStatusUpdate);

router.get("/allOrders",TokenVerify, verifyUserAdmmin("admin"), Controller.allOrders);

router.delete("/deleteOrder/:id",TokenVerify, verifyUserAdmmin("admin"), Controller.deleteOrder);


module.exports = router;