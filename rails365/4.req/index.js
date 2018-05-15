/**
 * Created by 34338 on 2018/5/15.
 */
//
let call = require('./section');

//单个函数的话直接执行
//  这个是导出对象的时候
console.log(call.fun1([2,4,5,8]),call.fun2(3),call.num)

//
// 或者单独导出
// let num = require('./section').num
// console.log(num)