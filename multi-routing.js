
var http = require('http');
var path = require('path'); 
  
// Create a server object 
http.createServer(function (req, res, next) { 
      
    // http header 
    res.writeHead(200, {'Content-Type': 'text/html'});  
      
    var url = req.url; 
      
    if(url ==='/about') { 
        res.write(' Welcome to about us page');
        console.log(res);
        res.end();  
    } 
    else if(url ==='/contact') { 
        res.write(' Welcome to contact us page');  
        res.end();  
    } 
    else if(url ==='/static') { 
        res.write(' Welcome to contact us page');  
        res.end(); 
        // res.sendFile(path.join(__dirname, "index.html")); 
    }
    else { 
        res.write('Hello World!');  
        res.end();  
    }
}).listen(3000, function() { 
      
    // The server object listens on port 3000 
    console.log("server start at port 3000"); 
}); 
