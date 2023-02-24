const express = require("express");
const router = express.Router();
const controller = require("../controller/UserController");
const TokenVerify = require("../middleware/VeryToken");
const verifyUserAdmmin = require("../middleware/AdminVerify")




router.post("/registration", controller.createUser);

router.post("/login", controller.loginUser);

router.post("/logout", controller.logout);

router.post("/fortogPassword", controller.forgotPassword);

router.put("/password/reset/:token", controller.resetPassword);

router.get("/me",TokenVerify, controller.myProfile);

router.put("/updatePassword",TokenVerify, controller.updatePassword);

router.get("/allusers",TokenVerify,verifyUserAdmmin("admin"), controller.allUsers);

router.get("/singleUser/:id",TokenVerify,verifyUserAdmmin("admin"), controller.singleUser);

router.put("/updateUserRole/:id",TokenVerify,verifyUserAdmmin("admin"), controller.userRoleUpdate); 

router.delete("/deleteUser/:id",TokenVerify,verifyUserAdmmin("admin"), controller.deleteUser); 











module.exports = router;