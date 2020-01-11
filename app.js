const express = require("express");
const bodyParser = require("body-parser");
const app =  express();
const PORT = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.listen(PORT, ()=>{
    console.log("servr pracy");
});