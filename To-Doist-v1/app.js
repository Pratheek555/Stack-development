const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs')

app.get("/" , function(req , res){
   
    const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    var today = new Date();
    
    var options = {
        weekday : "long",
        year: "numeric",
        month: "long",
      
    }

    var day = today.toLocaleDateString("en-US" , options);

    res.render("list" , {
        kindOfday : day,
    });
})

app.listen("3000" , function(req , res){
    console.log("Server is running of port 3000");
})