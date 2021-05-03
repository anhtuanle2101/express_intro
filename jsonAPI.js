const express = require('express');

const app = express();

app.use(express.json());

const CANDIES = [
    {name: 'snickers', qty: 43, price: 1.50},
    {name: 'skitties', qty: 26, price: 0.99}
]

app.get('/candies', (req, res)=>{
    res.json(CANDIES);
})

app.post('/candies', (req, res)=>{
    if (req.body.name.toLowerCase() == 'circus peanuts'){
        return res.status(403).json({msg:"HORRIBLE CHOICE"});
    }
    CANDIES.push(req.body);
    return res.status(201).json(CANDIES);
})

app.listen('3000', ()=>{
    console.log("Server running on 3000")
})