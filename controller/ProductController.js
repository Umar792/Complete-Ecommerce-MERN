const ProductModel = require("../model/productSchema");
const Apifeature = require("../utiles/apifeature");
const cloudner = require("cloudinary")

module.exports = {

    //============= create Product --- only Admin
    CreateProduct : async(req,res,next)=>{
        try {

            let images = [];

            if(typeof req.body.images === "string"){
              images.push(req.body.images)
            }else{
            images = req.body.images;
            }


            let imagesLink = []

            for (let i = 0; i < images.length; i++) {
                const result = await cloudner.v2.uploader.upload(images[i],{
                    folder : "products"
                })

                imagesLink.push({
                    public_id : result.public_id,
                    url: result.secure_url,
                })
                
            }
            req.body.images = imagesLink;
            req.body.user = req.user._id;
            const product = await ProductModel.create(req.body);

            res.status(200).json({
                success : true,
                message : "Product Craete Successfuly",
                product
            })
        
        } catch (error) {
            res.status(400).json({
                success:false,
                message : error.message
            })
        }
    },





    // ===================== get all products 

    allProducts: async(req,res,next)=>{
        try {
           
               
            // let pagelimit = 10;.pagination(pagelimit)
            const productCount = await ProductModel.countDocuments();
         const apifeature = new Apifeature(ProductModel.find(), req.query).search().filter();

            const products = await apifeature.query;;

            res.status(200).json({
                message : true,
                products,
                productCount
            })
            
        } catch (error) {
            res.status(400).json({
                success : false,
                message : error.message
            })
        }
    },


 // ===================== get all products 

 AdminallProducts: async(req,res,next)=>{
    try {
        const products = await ProductModel.find()
         
        res.status(200).json({
            message : true,
            products,
        })
        
    } catch (error) {
        res.status(400).json({
            success : false,
            message : error.message
        })
    }
},




    // ==================== update Product  ---only Admin 

    upadteProduct : async (req,res,next)=>{

        try {
            
        const product = await ProductModel.findById(req.params.id);

        if(!product){
            return  res.status(400).json({
                success  :false,
                message : "Product not found"
            })
        };

        let images = [];

        if (typeof req.body.images === "string") {
          images.push(req.body.images);
        } else {
          images = req.body.images;
        }
      
        if (images !== undefined) {
          // Deleting Images From Cloudinary
          for (let i = 0; i < product.images.length; i++) {
            await cloudner.v2.uploader.destroy(product.images[i].public_id);
          }
      
          const imagesLinks = [];
      
          for (let i = 0; i < images.length; i++) {
            const result = await cloudner.v2.uploader.upload(images[i], {
              folder: "products",
            });
      
            imagesLinks.push({
              public_id: result.public_id,
              url: result.secure_url,
            });
          }
      
          req.body.images = imagesLinks;
        }

      const productnew =  await ProductModel.findByIdAndUpdate(req.params.id,req.body,{new:true});


        await productnew.save()
        res.status(200).json({
            success : true,
            message : "Product update successfuly",
            productnew

        })


        } catch (error) {
            if(error.name === "CastError"){
                res.status(400).json({
                    success : false,
                    message :  `Recourse not found ${error.path}`
                })
            }else{
                res.status(400).json({
                    success : false,
                    message : error.message
                })
            }
        }
    },




    // ==================== delete Product 


    deleteProduct : async (req,res)=>{

        try {

            const product = await ProductModel.findById(req.params.id);

            if(!product){
                return  res.status(400).json({
                    success  :false,
                    message : "Product not found"
                })
            };

            for (let i = 0; i < product.images.length; i++) {
                await cloudner.v2.uploader.destroy(product.images[i].public_id)
                
            }

            await product.remove();

            res.status(200).json({
                success : true,
                message : "Product Delete Successfuly"
            })
            
        } catch (error) {
            if(error.name === "CastError"){
                res.status(400).json({
                    success : false,
                    message :  `Recourse not found ${error.path}`
                })
            }else{
                res.status(400).json({
                    success : false,
                    message : error.message
                })
            }
        }
    },




    // ================ get single product 


    SingleProduct : async (req,res)=>{

        try {
            const product = await ProductModel.findById(req.params.id);

        if(!product){
            return res.status(400).json({
                success : false,
                message : "Product not found"
            })
        };

 
        res.status(200).json({
            message : "success",
            product
        })
        } catch (error) {
            if(error.name === "CastError"){
                res.status(400).json({
                    success : false,
                    message :  `Recourse not found ${error.path}`
                })
            }else{
                res.status(400).json({
                    success : false,
                    message : error.message
                })
            }
            
        }
    },



    // =========== add product review 

    addreview:async(req,res)=>{
        try {
       const {ratting , comment , productid} = req.body;

       const Reviews = {
        user : req.user._id,
        name : req.user.name,
        ratting : Number(ratting),
        comment,
       }

       const product = await ProductModel.findById(productid);
       if(!product){
        return res.status(400).json({
            success : false,
            message : "product not found"
        })
       }
       const isReview =  product.Reviews.find(
        (rev) => rev.user.toString() === req.user._id.toString()
       );
       if(isReview){
        product.Reviews.forEach((rev)=>{
           if(rev.user.toString() === req.user._id.toString())
           rev.ratting = ratting;
           rev.comment = comment;
        })
        await product.save()
        res.status(200).json({
            success : true,
            message : "review update successfuly"
        })

       }
       else{
        product.Reviews.push(Reviews);
        product.numOfReviews = product.Reviews.length;

      let ave = 0;
      product.Reviews.forEach((rev)=>{
        ave =ave + rev.ratting
    })
        product.rattings= ave/product.Reviews.length;

        await product.save();
        res.status(200).json({
            success : true,
            message : "review add successfuly"
        })

       }
            
        } catch (error) {
            res.status(400).json({
                success : false,
                message : error.message
            })
        }
    },


    // get all reviews 

    allReviews :async(req,res)=>{
        try {
            const product = await ProductModel.findById(req.query.id);
            if(!product){
                res.status(404).json({
                    success  :false,
                    message : "product not found"
                })
            }
            res.status(200).json({
               success : true,
               Reviews : product.Reviews
            })
            
        } catch (error) {
            res.status(400).json({
                success : false,
                message : error.message
            })
        }
    },


    // ========== delete reviews --admin 

    deleteReview : async(req,res)=>{
        try {
            const product = await ProductModel.findById(req.query.productid);
            if(!product){
                res.status(404).json({
                    success  :false,
                    message : "product not found"
                })
            }

            const reviews = product.Reviews.filter((rev)=> rev._id.toString() !== req.query.reviewid.toString()
            );

            let avg = 0;
            reviews.forEach((rev)=>{
                avg += rev.ratting
            });

            const ratting = avg / reviews.length;
            const numOfReviews = reviews.length;

             await ProductModel.findByIdAndUpdate(req.query.productid,
              { reviews,
               ratting,
               numOfReviews },{
                new : true
               }
                );

                await product.save();

                res.status(200).json({
                    success : true,
                    message : " Review delete successduly"
                })

            
        } catch (error) {
            res.status(400).json({
                success : false,
                message : error.message
            })
        }
    }
}

