/**
 * Created by Administrator on 2017/7/27 0027.
 */

var http = require('http');
// 引入http模块


var exteriorfun = require("./module/func2.js");
// 引入func2文件


http.createServer(function (request,reponse) {
// 使用createserver创建web服务器
    reponse.writeHead(200,{'content-Type':'text/html;charset=utf-8'});
    // 返回的头部信息 状态码  数据格式  和 编码格式
    if (request.url !=='/favicon.ico'){ // 清除二次访问

        fun1(reponse);
        // 传入参数调用
        exteriorfun.fun2(reponse);
        exteriorfun.fun3(reponse);
        exteriorfun.fun4(reponse);

        // 也可用字符串
        // [] 里面是字符串
        exteriorfun['fun2'](reponse);
        exteriorfun['fun2'](reponse);
        exteriorfun['fun3'](reponse);


        reponse.end('');
        // 请求结束
    }
}).listen(8080);
// 监听8080端口
console.log('server running at http://127.0.0.1:8080')

function fun1(res){
    console.log('fun1')
    res.write('本地参数传参')
}
// 本地参数传参