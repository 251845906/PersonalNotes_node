/**
 * Created by Administrator on 2017/7/27 0027.
 */
// function fun2(res){
//     console.log('fun2')
//     res.write('外部函数传参')
// };
// module.exports = fun2;  支持单个函数
module.exports = {
    fun2 :function (res) {
        console.log('fun2')
        res.write('外部函数传参2')
    },
    fun3 :function (res) {
        console.log('fun2')
        res.write('外部函数传参3')
    },
    fun4 :function (res) {
        console.log('fun4')
        res.write('外部函数传参4')
    },
}