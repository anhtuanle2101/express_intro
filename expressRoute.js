const express = require('express');

const app = express();

app.get('/dogs', (req, res)=>{
    console.log(req);
    console.log("Running on /dogs");
    res.send("<h1>First express server</h1>");
})

app.listen('3000', function(){
    console.log("Running on port 3000");
})