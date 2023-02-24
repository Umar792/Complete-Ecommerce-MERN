const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({

    name:{
        type : String,
        required : [true, "Plaese Enter Product Name"],
        trim : true
    },
    description:{
        type:String,
        required : [true , "Plaese Enter Product Description"],
        trim : true
    },
    price:{
        type : Number,
        required : [true, "Plaese Enter Product Price"],
        maxLength: [6, "Product Price Cannot Exceed 6 limits"]
    },
    rattings:{
        type : Number,
        default : 0
    },
    images:[
        {
            public_id :{
                type : String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true, "Plaese Enter Product Category"]
    },
    mainCategory:{
        type:String,
        required:[true, "Plaese Enter Product Category"]
    },
    featured:{
        type:Boolean,
    },
    
    stock:{
        type:Number,
        maxLength : [3, "Stock Cannot Exceed 3 Character"],
        default : 1
    },
    numOfReviews:{
        type:Number,
        default : 0
    },
    Reviews:[
        {
            user : {
                type : mongoose.Schema.ObjectId,
                ref : "user",
                required :true
            },
            name:{
                type:String,
                required : true
            },
            ratting : {
                type : Number,
                required : [true, "plaese select sarts"],
            },
            comment:{
                type:String,
                required:[true, "Plaese Enter Comment field"]
            },

        }
    ],
    user:{
        type: mongoose.Schema.ObjectId,
        ref:"User",
        required : true
    },
    createAt:{
        type : Date,
        default: Date.now
    }

    
});


const ProductModel = mongoose.model("product", ProductSchema);

module.exports = ProductModel