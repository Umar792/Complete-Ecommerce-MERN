const jwt = require("jsonwebtoken");
const UserModel = require("../model/UserSchema");



TokenVerify = async(req,res,next)=>{
    try {

        // const {token} = req.cookies;
        const token = req.headers["token"]     
        if(!token){
            return res.status(400).json({
                success : false,
                message  :"Plaese login first"
            })
        }

        const decoded = jwt.verify(token , process.env.JWT_SECRET);

        req.user = await UserModel.findById(decoded.id);

        next()
        
    } catch (error) {
        res.status(400).json({
            success :false,
            message : error.message
        })
    }
};


module.exports = TokenVerify
