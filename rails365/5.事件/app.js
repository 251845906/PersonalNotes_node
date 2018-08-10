/**
 * Created by 34338 on 2018/5/16.
 */
let events = require('events');
// 引入events模块
let MyEmitter = new events.EventEmitter();
// 创建事件对象

MyEmitter.on('someEvent',function (message) {
    console.log(message)
});
//监听一个事件（事件可以自定义） 定一个事件和一个回掉函数

// MyEmitter.emit('someEvent','传的参数')
//触发一个事件

// ======================================





