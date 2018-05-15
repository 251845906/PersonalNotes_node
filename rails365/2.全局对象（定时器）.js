/**
 * Created by 34338 on 2018/5/15.
 */

let num = 0;
const timer = setInterval(()=>{
    num < 2 ? console.log(++num):clearInterval(timer)
},1000)
console.log(__dirname + '__dirname 表示当前目录')
console.log(__filename + '__filename 表示当前文件名称')