const express = require('express');

const bodyParser = require("body-parser");
const { response } = require('express');

const app = express();

//extended true ig is a mode if true recieves things, if no does not recieve
app.use(bodyParser.urlencoded({extended: true}))


// posting stuff from the recieved data
app.post("/" , function(req, response){
    
    var numb = req.body.num1;
    var num4 = req.body.num2;

    var add = numb + num4;

    console.log("the result is " + add);

    response.send("the result is " + add)
})


app.get("/" , function(req, response){
    response.sendFile(__dirname + "/index.html")
})


app.listen("3000" , function(){
    console.log("The server has started on the 3000 port");
})

app.get("/bmicalculator" , function(req, response){
    response.sendFile(__dirname + "/bmiCalculator.html");
    
})

app.post("/bmicalculator" , function(req , response){
    
    var weight1 = Number(req.body.weight);

    var height  = Number(req.body.height);

    var calcing = weight1 + (height*height);

    response.send("Your BMI is "+ calcing);

})