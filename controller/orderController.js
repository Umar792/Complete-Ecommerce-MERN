const orderModel = require("../model/OrderSchema");
const productModel = require("../model/productSchema");
const jwt = require("jsonwebtoken");
const UserModel = require("../model/UserSchema");

module.exports = {

    // === create order 

    newOrder: async (req, res) => {
        try {
            const {
                shippingInfo,
                orderitem,
                paymentInfo,
                itemsPrice,
                taxPrice,
                shippingPrice,
                totalPrice,

            } = req.body;
            
            const token = req.headers["token"]     
           if(!token){
             res.status(200).json({
                success : false,
                message  :"Plaese login"
            })
        }else{
            const decoded = jwt.verify(token , process.env.JWT_SECRET);

            req.user = await UserModel.findById(decoded.id);
        }

        
            if(!token){
                
                const order = await orderModel.create({
                    shippingInfo,
                    orderitem,
                    paymentInfo,
                    itemsPrice,
                    taxPrice,
                    shippingPrice,
                    totalPrice,
                    paidAt: Date.now(),
                    login : "place order without login"
                    
                });
                res.status(200).json({
                    success: true,
                    order
                })
            }else{

                const order = await orderModel.create({
                    shippingInfo,
                    orderitem,
                    paymentInfo,
                    itemsPrice,
                    taxPrice,
                    shippingPrice,
                    totalPrice,
                    paidAt: Date.now(),
                    user : req.user._id,
                    login : "place order with login"
                });
                res.status(200).json({
                    success: true,
                    order
                })



            }
           
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },



    // ============== get single order 

    singleOrder: async (req, res) => {
        try {
            const order = await orderModel.findById(req.params.id).populate(
                "user",
                "name email"
            );
            if (!order) {
                return res.status(404).json({
                    success: false,
                    message: "Order not found"
                })
            }
            res.status(200).json({
                success: true,
                order
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },


    //  get login user order 

    loginUserOrder: async (req, res) => {
        try {
            const order = await orderModel.find({ user: req.user._id });
            if (!order) {
                return res.status(404).json({
                    success: false,
                    message: "Order not found"
                })
            }
            res.status(200).json({
                success: true,
                order
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },


    // update order status ---admin 
    OrderStatusUpdate: async (req, res) => {
        try {
            const order = await orderModel.findById(req.params.id);
            if (!order) {
                return res.status(404).json({
                    success: false,
                    message: "Order not found"
                })
            }
            if (order.orderStatus === "Delivered") {
                return res.status(400).json({
                    success: false,
                    message: "You have already delivered this order"
                })
            }

            if (req.body.status === "Shipped") {
                order.orderitem.forEach(async (o) => {
                    await updateStock(o.product, o.quantity)
                })
            };

            order.orderStatus = req.body.status;

            if (req.body.status === "Delivered") {
                order.deliveredAt = Date.now();
            }
            await order.save({ validateBeforeSave: false });

            res.status(200).json({
                success: true,
                message: "product status update successfuly"
            })


        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }

        async function updateStock(id, quantity) {
            const product = await productModel.findById(id);
            if (!product) {
                return res.status(404).json({
                    success: false,
                    message: "product not found"
                })
            }

            product.stock = product.stock - quantity;
            await product.save();

        }
    },


    // ==== get all orders -- admin

    allOrders: async (req, res) => {
        try {
            const orders = await orderModel.find().populate("user");

            let totalSaleAmount = 0;

            orders.forEach((item) => {
                totalSaleAmount = totalSaleAmount + item.totalPrice
            });

            res.status(200).json({
                success: true,
                totalSaleAmount,
                orders
            })

        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }


    },

    // ==== delete order 

    deleteOrder: async (req, res) => {
        try {
            const order = await orderModel.findById(req.params.id);

            if (!order) {
                return next(new ErrorHander("Order not found with this Id", 404));
            }

            await order.remove();
            res.status(200).json({
                success: true,
                message: "order delete successfuly"
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    }


}