const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

const Schema = mongoose.Schema;

let now = Date.now();
let date = new Date(now);
let time = date.toLocaleString()


const OrderSchema = new Schema({
    shippingInfo:{
        adress:{
            type:String,
            required:true,
        },
        city:{
            type : String,
            required : true
        },
        country:{
            type:String,
            required:true,
            default : "pakistan"
        },
        phoneNo:{
            type:Number,
            required : true
        },
        name:{
            type:String,
            required : true
        }

    },
    orderitem:[
        {
            name:{
                type:String,
                required:true
            },
            price:{
                type:Number,
                required:true
            },
            quantity:{
                type:Number,
                required:true
            },
            image:{
                type:String,
                required:true
            },
            product : {
                type: mongoose.Schema.ObjectId,
                ref : "Product",
                required : true
            },
        },
    ],
    user:{
        type: mongoose.Schema.ObjectId,
        ref : "User",
    },
    login:{
      type : String
    },
    paymentInfo: {
        // id: {
        //   type: String,
        //   required: true,
        // },
        status: {
          type: String,
          required: true,
          default : "processing"
        },
        payment :{
          type:String,
          required:true
        }
          
      },
      paidAt: {
        type: Date,
        required: true,
      },
      itemsPrice: {
        type: Number,
        required: true,
        default: 0,
      },
      taxPrice: {
        type: Number,
        required: true,
        default: 0,
      },
      shippingPrice: {
        type: Number,
        required: true,
        default: 0,
      },
      totalPrice: {
        type: Number,
        required: true,
        default: 0,
      },
      orderStatus: {
        type: String,
        required: true,
        default: "Processing",
      },
      deliveredAt: Date,
      createdAt: {
        type: Date,
        default: time,
      },
      

});

const orderModel = mongoose.model("order", OrderSchema);

module.exports = orderModel;