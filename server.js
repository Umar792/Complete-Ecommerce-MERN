const express =  require("express");
const app = express();
const cloudinary = require("cloudinary");
const fileuplode = require("express-fileupload")
const path = require("path")


// ==========cors 

const cors = require("cors");
app.use(cors());

// DOT ENV
require("dotenv").config();

// body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


// =======cookie parser 
const cookieparser = require("cookie-parser");
app.use(cookieparser())


// ==== mongoose coonection 
const mongooseConnection = require("./DB/conn");
mongooseConnection();


// ======== cloudinary 
cloudinary.config({
   cloud_name : process.env.CLOUDINARY_NAME,
   api_key : process.env.CLOUDINARY_API_KEY,
   api_secret : process.env.CLOUDINARY_API_SECRET,

})

// === ======= fileuplode 
app.use(fileuplode());

//==============  Router
app.use("/", require("./router/ProductRoute"));
app.use("/", require("./router/UserRoute"));
app.use("/", require("./router/orderRoute"))




const myserver = app.listen(process.env.PORT, ()=>{
   console.log(`express serverstart at ${process.env.PORT}`);
})

process.on("unhandledRejection", (err)=>{
   console.log(`Error : ${err.message}`);
   console.log("server is shuting Down");

   myserver.close(()=>{
      process.exit(1)
   })
})


