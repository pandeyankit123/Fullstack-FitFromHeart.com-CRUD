const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");
const router = require("./routers/routes");

const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../public") ;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine", "hbs") ;
app.set("views", path.join(__dirname, "../views"));

app.use(router);

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});