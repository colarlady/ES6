//1.语法
async function fn(){  //表示这个函数中有异步执行的任务
    let result = await XXX  //表示后面需要这个执行完成
}

//2.特点
    //1.await只能放到async函数中
    //2.相比于generator语义化更强
    //3.await后面可以是promise对象，也可以是数字，字符串等
    //4.async函数返回的是一个promise
    //5.只要await后面的Promise状态编程reject,整个async就会中断



//3.特点验证