const express = require("express");
const bodyParser = require("body-parser");
const app =  express();
const PORT = process.env.PORT || 4000;
const exphbs = require("express-handlebars");
const home =  require("./routes");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const hbs = exphbs.create({
    defaultLayout: "main",
    extname: "hbs"
  });
  app.engine("hbs", hbs.engine);
  app.set("view engine", "hbs");
  app.set("views", "views");
  app.use(express.static(__dirname + "/public"));
app.use(home);
app.get('/',(req,res)=>{
    res.send('hello');
});
app.listen(PORT, ()=>{
    console.log("servr pracy");
});