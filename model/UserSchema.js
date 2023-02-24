const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto")


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        required: [true, "Plaese Enter User Name"],
        maxLength :[30, "Name cannot exceed 30 character"],
        minLength : [4, "User Name cannot less then 4 character"]
    },
    email:{
        type : String,
        required : [true , "Plaese Enter Email"],
        validate : [validator.isEmail , "Plaese Enter valid Email Adress"],
        unique : true
    },
    password:{
        type :String,
        required:[true , "Plaese Enter your password"],
        minLength : [8, "Password should e greater then 8 character"]
    },
    avatar:{
        public_id:{
            type :String,
            required: [true, "Plaese pic an profie image"]
        },
        url:{
            type :String,
            required: [true, "Plaese pic an profie image"]
        }
    },
    role:{
        type :String,
        default  : "user"
    },
    resetpasswordtoken : String,
    resetpasswordtokenExpire : Date,
    createAt  :{
        type: Date,
        default : Date.now
    }
});



UserSchema.pre("save", async function(){

    if(this.isModified("password")){
     this.password = await bcrypt.hash(this.password , 10)   
    }
});


// ================ jwt token 

UserSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id}, process.env.JWT_SECRET ,{
        expiresIn : process.env.JWT_EXPIRE
    })
};



// ====================== crypto 

UserSchema.methods.getressetPasswordToken = function(){
    const resetToken = crypto.randomBytes(20).toString("hex");

    this.resetpasswordtoken = crypto.createHash("sha256").update(resetToken).digest("hex")
    this.resetpasswordtokenExpire = Date.now() + 10 * 60 * 1000
    return resetToken;
}



const UserModel = mongoose.model("User" , UserSchema);

module.exports = UserModel;