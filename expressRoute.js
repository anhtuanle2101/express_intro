const express = require('express');

const app = express();

app.get('/dogs', ()=>{
    console.log("You asked for /dogs")
})

app.listen('3000', function(){
    console.log("Running on port 3000");
})