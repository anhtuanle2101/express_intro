const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.send("HOMEPAGE!!");
})

app.get('/dogs', (req, res)=>{
    console.log(req);
    console.log("Running on /dogs");
    res.send("<h1>First express server</h1>");
})

app.get('dogs', (req, res)=>{
    res.send("MEOW MEOW MEOW");
})

app.get('/chicken', (req, res)=>{
    res.send("Bock Bock Bock 123 (get request)")
})

app.post('/chicken', (req, res)=>{
    res.send("A new chicken is created! (post request)");
})

const greetings = {
    en:'hello',
    fr:'bonjour',
    ic:'hallo',
    js:'konnichiwa'
}

app.get('/greet/:language', (req, res)=>{
    const lang = req.params['language'];
    res.send(greetings[lang]);
})

app.get('/search', (req, res)=>{
    const {term, sort} = req.query;
    res.send(`Search page term: ${term}  sort: ${sort}`);
})

app.get('/headers', (req, res)=>{
    res.send(req.headers);
})

app.post('/register', (req, res)=>{
    return res.send(`Welcome ${req.body.username}!`);
})

app.listen('3000', function(){
    console.log("Running on port 3000");
})