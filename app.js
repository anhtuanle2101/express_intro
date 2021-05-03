const express = require('express');
const {ExpressError} = require('./expressError');
const app = express();

app.use(express.json());

function attempToSaveToDB(){
    throw "Connection Error!";
}

const USERS = [
    {username: "StacysMom", city: "Reno"},
    {username: "Rosalia", city: "R"}
]

app.get("/users/:username", (req, res, next)=>{
    try {
        const user = USERS.find(u=>u.username === req.params.username);
        if (!user) throw new ExpressError('invalid username', 404);
        return res.send({user});
    } catch (error) {
        return next(error);
    }
})

app.get("/secret", (req, res, next)=>{
    try {
        if (req.query.password != "popcorn"){
            throw new ExpressError("Invalid password", 403);
        }
        return res.send("CONGRATS YOU FOUND THE PASSWORD!")
    } catch (error) {
        return next(error);
    }
    
})

app.get('/saveToDB', (req, res, next)=>{
    try {
        attempToSaveToDB();
        res.send("SAVED TO DB!");
    } catch (error) {
        return next(new ExpressError("Database Error"));
    }
    
})

app.use((req, res, next)=>{
    return next(new ExpressError("Page Not Found", 404));
})

app.use((err, req, res, next)=>{
    let status = err.status || 500;
    let message = err.message || "THIS IS AN ERROR!";
    return res.status(status).json({
        error:{message, status}
    })
})

app.listen('3000', ()=>{
    console.log("Running on port 3000")
})