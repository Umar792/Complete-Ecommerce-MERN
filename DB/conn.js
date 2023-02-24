const mongoose = require("mongoose");


const mongooseConnection = () =>{
    mongoose.connect(process.env.BAS_URL).then(()=>{
        console.log("mongoose connect successfuly");
    })
}

module.exports = mongooseConnection;