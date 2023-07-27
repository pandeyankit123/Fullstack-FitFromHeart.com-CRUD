const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/gymDetails", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log(`Connection Successful`);
}).catch((e)=>{
    console.log(`Connection Faied`);
})