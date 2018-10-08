var express = require('express');
var app = express();

var positions = require('./positions.js');
console.log(positions.oll);

app.get('/',(req,res)=>{
 res.render('index.ejs',{positions:positions.oll});
});

app.listen(4000);
