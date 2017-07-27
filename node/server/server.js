var http = require('http');
var server = http.createServer(function(request,response){
    response.writeHead(200,{'Content':'text/plain'});
    response.end('Hello World\n')
});

server.listen(8080)
// 监听8080端口
console.log('Server running at http://192.168.1.140:8080');
console.log(http)
