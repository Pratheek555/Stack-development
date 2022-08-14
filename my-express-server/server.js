const express = require('express');

const app = express();

app.get("/" , function(req,response){
    response.send("<h1>Hello!</h1>")
})

app.listen("3000" , function(){
    console.log("Server has started on the port 3000");
})

app.get("/about" , function(res, response){
    response.send("burrr")
})

app.get("/boom" , function(res, response){
    response.send("boom")
})