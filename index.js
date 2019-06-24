const express = require('express');
const app = new express();

app.use('/', function(){
    console.log('Date', new Date());
});

app.get('/people', function(req, res){
    console.log('Date', new Date());
    res.send("hello world!!")
});

app.listen(3000);