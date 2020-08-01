var express = require('express'); 
var app = express();
const path = require('path');
  
app.set('views', path.join(__dirname))
// Set EJS as templating engine 
app.set('view engine', 'ejs'); 

app.get('/', (req, res)=>{ 
    res.render('home', { name:'Ramakrishna' }); 
}); 
  
var server = app.listen(4000, function(){ 
    console.log('listining to port 4000') 
}); 
