var http_port = process.env.PORT;  
var http_IP = process.env.IP;  
var http = require('http');  
var server = http.createServer(function(req, res) {  
  require('./router').get(req, res);
}); // end server() 
server.listen(http_port,http_IP);  
//console.log('listening to http://' + http_IP + ':' + http_port); 

server.listen(3000);  
