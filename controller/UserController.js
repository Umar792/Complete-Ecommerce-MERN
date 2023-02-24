const UserModel = require("../model/UserSchema")
const bcrypt = require("bcrypt");
const sendEmail = require("../utiles/sendEmail");
const crypto = require("crypto");
const cloudinary = require("cloudinary")

module.exports = {
    createUser : async (req,res)=>{
        try {
         
           
            const {name,email,password} = req.body;
            if(!name || !email || !password ){
                return res.status(400).json({
                    success : false,
                    message : "Plaese fill the data with profile photo"
                });
            }
            const mycloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
                folder : "avatars",
                width :150,
                crop : "scale"
            })
            const NewUser = await UserModel.create({
                name,
                email,
                password,
                avatar : {
                    public_id : mycloud.public_id,
                    url : mycloud.secure_url,}
                }
                );

            res.status(200).json({
                success : true,
                message  : "User add successfuly",
            });

        } catch (error) {
            
            if(error.code === 11000){
                res.status(400).json({
                    success  :false,
                    message : `Duplicate ${Object.keys(error.keyValue)} error`
                })
            }
           
            res.status(400).json({
                success  :false,
                message : error.message
            })
            
        }

    },



    // ========= login user 

    loginUser : async (req,res)=>{
        try {
            const {email , password} = req.body;

            if(!email || !password){
                return res.status(400).json({
                    success  :false,
                    message  :"Plaese fill the data"
                })
            }

            const userEmail = await UserModel.findOne({email : email});

            if(!userEmail){
                return res.status(400).json({
                    success  : false,
                    message : "Plaese fill valid data"
                })
            }

            const isMatch = await bcrypt.compare(password , userEmail.password);

            if(!isMatch){
                return res.status(400).json({
                    success  : false,
                    message : "Plaese fill valid data"
                })
            }

            const Token = userEmail.getJWTToken();


            res.status(200).cookie("token" , Token , {
                // expires : new Date(Date.now() + 7 * 24 * 60 *60 *1000) ,
                httpOnly : true
            }).json({
                success  :true,
                userEmail,
                Token
            })


            
        } catch (error) {
            res.status(400).json({
                success  :false,
                message : error.message
            })
        }
    },



    // ======logout 

    logout  :async(req,res)=>{
        try {

            res.cookie("token" , "")

            res.status(200).json({
                success : true,
                message  :"logout successfuly"
            })
            
        } catch (error) {
            res.status(400).json({
                success  :false,
                message : error.message
            })
        }
    },



    // =================== forgot password 

    forgotPassword : async(req,res)=>{
       
        const {email} = req.body;

        if(!email){
            return res.status(200).json({
                success : false,
                message : "Please Enter Email"
            })
        }

      const user = await UserModel.findOne({email});
      if(!user){
        return res.status(404).json({
            success : false , 
            message : "user not found"
        })
      }

         const ressetToken = user.getressetPasswordToken();
        await user.save({ validateBeforeSave: false });
        // `${req.protocol}://${req.get("host")}
        const ressetTokenURL = `${req.protocol}://${req.get("host")}/password/reset/${ressetToken}`;
        const message = `your password reset token is \n\n ${ressetTokenURL} \n\nIf you have not requested this email then, please ignore it`
       
        try {

            await sendEmail({
                email : user.email,
                subject : "Ecommerce Website Reset Password",
                message,

            })

            res.status(200).json({
                success  :"true",
                message : `email send successfully at ${user.email}`
            })



       } catch (error) {
         user.resetpasswordtoken = undefined,
         user.resetpasswordtokenExpire = undefined,
         await user.save({ validateBeforeSave: false });

         res.status(400).json({
            success:false,
            message : error.message
         })
        
       }
    },



    // ========== and reset password  

    resetPassword : async (req,res)=>{
        try {
            const resetpasswordtoken = crypto.createHash("sha256")
            .update(req.params.token)
            .digest("hex");

            if(!req.body.password){
                return res.status(400).json({
                    success : false , 
                    message : "Please fill the data"
                })
            }

            const user = await UserModel.findOne({resetpasswordtoken,
                resetpasswordtokenExpire : {$gt : Date.now()}
            });
            if(!user){
                return res.status(400).json({
                    success : false , 
                    message : "user not found token is expire"
                })
            }
            if(req.body.password === user.password){
                return res.status(400).json({
                    success : false , 
                    message : "Please chose a diffrent password from old password"
                })
            }
            
            user.password =req.body.password;
            user.resetpasswordtoken = undefined;
            user.resetpasswordtokenExpire = undefined;
            await user.save();

            res.status(200).json({
                success : true,
                message  :"your password is change plaese login"
            })



            
        } catch (error) {
            user.resetpasswordtoken = undefined;
            user.resetpasswordtokenExpire = undefined;
            await user.save();
            res.status(400).json({
                success:false,
                message : error.message
             })
        }
    },


    // ============= get profiledata 

    myProfile : async(req,res)=>{
        try {

            const user = await UserModel.findById(req.user._id);
            res.status(200).json({
                success:true,
                message : "Profile open",
                user
             })
            
        } catch (error) {
            res.status(400).json({
                success:false,
                message : error.message
             })
        }
    },


    // updatePassword 

    updatePassword : async(req,res)=>{
        try {

            const user = await UserModel.findById(req.user._id);
            const isMatch = await bcrypt.compare(req.body.oldpassword, user.password);

            if(!isMatch){
                return res.status(400).json({
                    success  : false,
                    message : "Old password is incorrect"
                })
            }

            user.password = req.body.newpassword;
            const Token = user.getJWTToken();
            await user.save();
            res.status(200).json({
                success : true,
                user,
                Token
            })
            
        } catch (error) {
            res.status(400).json({
                success:false,
                message : error.message
             })
        }
    },


    // =========== get all user (--admin) 
    allUsers : async(req,res)=>{
        try {
            const users = await UserModel.find();
            res.status(200).json({
                success:true,
                users
            })
            
        } catch (error) {
            res.status(400).json({
                success:false,
                message : error.message
             })
        }
    },


    // ======== get single user (--admin) 

    singleUser : async(req,res)=>{
        try {
            const user = await UserModel.findById(req.params.id);
            if(!user){
             return res.status(400).json({
                    success:false,
                    message : "user not found"
                 })
            }
            res.status(200).json({
                success : true,
                user
            })
            
        } catch (error) {
            res.status(400).json({
                success:false,
                message : error.message
             }) 
        }
    },


    // user role change (--admin) 

    userRoleUpdate : async(req,res)=>{
        try {

            const user = await UserModel.findByIdAndUpdate(req.params.id,req.body.role,{
                new : true
            });
            if(!user){
                return res.status(400).json({
                       success:false,
                       message : "user not found"
                    })
               }

               user.role = req.body.role;
               await user.save();

            res.status(200).json({
                success  :true,
                message : "role update successfully"
            })
            
        } catch (error) {
            res.status(400).json({
                success:false,
                message : error.message
             }) 
        }

        

    },



    // ============= delete user --admin 
      
    deleteUser : async(req,res)=>{
        try {
            const user = await UserModel.findByIdAndDelete(req.params.id)
            if(!user){
                return res.status(400).json({
                       success:false,
                       message : "user not found"
                    })
               }
                    
               const imageId = user.avatar.public_id
               await cloudinary.v2.uploader.destroy(imageId)
               await user.remove();

            res.status(200).json({
                success  :true,
                message : "User delete successfully"
            })
            
        } catch (error) {
            res.status(400).json({
                success:false,
                message : error.message
             }) 
        }
    }
    
}