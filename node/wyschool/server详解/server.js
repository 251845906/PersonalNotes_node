/**
 * Created by Administrator on 2017/7/27 0027.
 */
var http = require('http');
// 引入http对象

//createServer  http 的方法  创建一个web服务
http.createServer(function (request,response){
    // reqyest  浏览器发出的请求对象
    // response  服务端给出的结果

    response.writeHead(200,{'content-Type':'text/html; charset=utf-8'})
    // 协议头（输出头部信息 相对应ajax请求头？ 自认为不知道时候正确）
    // 输出到客户端   返回码200，输出类型 html  输出编码 utf-8

    console.log('访问'); //后台出现两次
    //原因  nodejs独特现象
    //因为某系原因（我还没学到）访问两次第一次访问输出了结果
    //第二次访问 访问了一个favicon.ico文件
    //开发时候这种情况会造成个别现象  清除最好
    if(request.url !== '/favicon.ico'){
        // 清除第二次访问

        console.log('访问');
        // 现在输出3次
        response.write('hello,word');
        // 向网页输出文本helloword  但是不会结束

        response.end('输出结束');
        //输出后立马结束  必须要有
    }




}).listen(8080);
// listen 监听 8080端口

console.log('server running at http://127.0.0.1:8080');
// 输出到控制台  服务运行在  http://127.0.0.1:8080