const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    age : {
        type:String,
        required:true
    },
    gender : {
        type:String,
        required:true
    },
    phone : {
        type:String,
        required:true
    }
})

const Detail = new mongoose.model("Details", userSchema);
module.exports= Detail; 