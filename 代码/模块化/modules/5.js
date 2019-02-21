/**
 * Created by wuyaru
 * Author: wuyaru
 * Date: 2018/11/3
 * Time: 19:51
 */

import {a,b} from './7.js';


const sum=()=>{
    return a+b;
}

const show=()=>{
    console.log("我来show了");
}

export {
    a,
    b,
    sum,
    show
}

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showName(){
        return `我的名字是${this.name}`;
    }

}
export default {
    Person
}