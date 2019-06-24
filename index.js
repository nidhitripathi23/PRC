const express = require('express');
const app = new express();

app.use('/', function(){
    console.log('Date', new Date());
});

app.listen(3000);