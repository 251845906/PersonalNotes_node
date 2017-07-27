/**
 * Created by Administrator on 2017/7/27 0027.
 */
var http = require('http');
var User = require('./module/user.js');
http.createServer(function (request , reponse) {
    reponse.writeHead(200,{'content-Type':'text/html;charset=utf-8'})
    if (request.url!=='/favicon.ico'){

        user = new User(1,222,18);
        // exports 函数时候先 new 做一个转换
        // 再进行调用
        user.enter()
        reponse.end('');
    };

}).listen(8080);
console.log('server running at http://127.0.0.1:8080')