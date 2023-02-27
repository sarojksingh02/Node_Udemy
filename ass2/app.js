const express = require('express');
const app = express();

app.use('/users',(req, res, next)=>{
    console.log("users middleware")
    res.send('<h1>handle users middleware</h1>')
})

app.use('/',(req, res, next)=>{
    console.log("nothing middleware")
    res.send('<h1>handle nothing middleware</h1>')
})
app.listen(3001);