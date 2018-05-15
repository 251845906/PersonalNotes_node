/**
 * Created by 34338 on 2018/5/15.
 */
function callFunction(a,b) {
    a(b)
}
callFunction(function a(c) {
    console.log(c)
},5)