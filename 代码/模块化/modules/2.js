/**
 * Created by wuyaru
 * Author: wuyaru
 * Date: 2018/11/3
 * Time: 16:49
 */

console.log("1模块加载了");

const a = 12;  //导出模块
const b = 2;
let c = 5;

//导出可以起别名
export {
    a as aa,
    b as banana,
    c as cup
}
 