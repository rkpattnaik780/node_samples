var express = require('express')
var app = express()
var path = require('path');
const { nextTick } = require('process');

app.get('/', function(req, res) {
    // res.write("Hello World!");
    // res.end();
    res.send();
})

app.get('/static', function(req, res, next) {
    next();
    console.log(path.join(__dirname, "index.html"));
    res.sendFile(path.join(__dirname, "index.html")); 
})

app.get('/static', function(req, res) {
    res.send("Hello");
    // console.log(path.join(__dirname, "index.html"));
    // res.sendFile("/home/rkpattnaik780/coding/learning-stuffs/random/index.html"); 
})

app.listen(3000);