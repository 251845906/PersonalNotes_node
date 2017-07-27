/**
 * Created by Administrator on 2017/7/27 0027.
 */
function user(id,name,age) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.enter = function () {
        console.log(this.name + '技术图书馆');
    }
};
module.exports = user;