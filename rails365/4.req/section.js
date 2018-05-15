/**
 * Created by 34338 on 2018/5/15.
 */
//
// function fun1(arr) {
//     return  '长度' + arr.length + '内容' + arr
// }
// function fun2(a,b) {
//     return `这个符号是es6的写法运算里面的？？不是很懂 ${a+b}`
// }
// const num = 5;
// module.exports.fun1 = fun1;
// module.exports.fun2 = fun2;
// module.exports.num = num;

// 另一种写法
let pi = 3.14;
module.exports = {
    fun1:function fun1(arr) {
        return  '长度' + arr.length + '内容' + arr
    },
    fun2:function fun2(a) {
        return `这个符号是es6的写法运算里面的？？不是很懂 ${a+pi}`
    },
    num : 5
}

// 另外一种