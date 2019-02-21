# ES6语法学习笔记

## let和const

	### 块级作用域

 + 块级作用域是ES6新提出的概念

 + 凡是{}就是块，比如if,while,for,函数

 + ```javascript
          for(var i=0;i<10;i++){
             console.log(i);
           }
           alert(i);   //i=10
   ------------------------------
           for(let i=0;i<10;i++){
              let i = "abc";
               console.log(i);
           }
               alert(i);  //报错  i is not defined
   ```

### let

+ let定义的变量没有预解析

  + 什么是预解析

    + 在当前作用域下会将var和function关键字的声明提前到作用域最前面

  + ```javascript
    let a= 12;
    function  fn() {
         alert(a);  //TDZ 暂时性死区   //报错 a is not defined  不会向上一级寻找
         let a = 5; // TDZ 结束  申明不会提前
    }
    fn();
    ```

+ 在同一级作用域内，let定义的变量不能重复定义

  + ```javascript
    let a=5;
    let a = 12;
    alert(a);  //Identifier 'a' has already been
    ```

+ 父子级作用域

  + {}是一个作用域，{1}中内套{2}，2是1的子级作用域

  + ```javascript
    let a = 13;
    {
          let a = 12;
          console.log(b);  //undefined
          {
             let a = 5;
             let b = 10;
             console.log(a);  //12 
           }
    }
    ```

+ 全局变量问题

  + ```javascript
        var arr=[];
            for(var i=0;i<10;i++){
               arr[i] = function () {
                   console.log(i);
               }
           }
           arr[5](); //10

            var arr=[];
            for(let i=0;i<10;i++){
                arr[i] = function () {
                    console.log(i);
                }
            }
            arr[5]();//5
    ```

### const

- const和let特性一样

- const申明的一般是常量，不可修改

- ```javascript
          const a = 12;
          a = 5;   //Assignment to constant variable. 赋值给常量变量
          console.log(a);

          const a;  //const声明中缺少初始化程序
          a=5;
         console.log(a);

  //        const arr=["apple","orange"];
  //        arr.push("banner");
  //        console.log(arr);

          const  arr = Object.freeze(["apple","orange"]);
          arr.push("banner");  //Cannot add property 2, object is not extensible无法添加属性2，对象不可扩展
          console.log(arr);
  ```

### 案例选项卡(应用)

 + ```javascript
   <!doctype html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport"
             content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <title>Document</title>
       <script>
           window.onload = function () {
               var btns = document.querySelectorAll("input");
               for(let i=0;i<btns.length;i++){
                   btns[i].onclick = function () {
                       alert(i);
                   }
               }
           }
       </script>
   </head>
   <body>

   <input type="button" value="aaa">
   <input type="button" value="bbb">
   <input type="button" value="ccc">

   </body>
   </html>
   ```

## 解构赋值

+ 什么是解构赋值

  + 将数据按照自己需要的格式进行解析并赋值

  + ```javascript
    let [a,b,c] = [12,[5,6]];
     console.log(a,b,c);  //a:12 b:[5,6] c:undefined
    ```

+ 用处

  + 在数据交互的时候非常有用

  + ```javascript
    let json = {
        name:'jesscia',
        age:12,
        job:'码农'
    }
    let {name,age,job} = json;
    console.log(name,age,job);
    ```

+ 别名

  + ```javascript
    let {name,age:a,job} = {
        name:'jesscia',
        age:12,
        job:'码农'
    }
    console.log(name,a,job);
    ```

+ 赋默认值

  + ```javascript
    let [a,b,c="暂无数据"]=["aa","bb"];
    console.log(a,b,c); //a:"aa",b:"bb",c:"暂无数据"
    ```

+ 应用

  + 交换数据

  + ```javascript
    let a = 5;
    let b = 6;
    [a,b] = [b,a];
    console.log(a,b)   //a:6,b:5
    ```

## 字符串模板以及字符串相关新增

+ 字符串模板

  + `${变量名称}`

  + 优点：可以随意换行

  + ```javascript
    let name = "jesscia";
    let age = 18;
    let str = '这个人叫${name},今年${age}岁了';
    console.log(str);
    ```

+ 字符串新增方法

  + 字符串查找

    + `str.includes(内容)  返回true/false`
    + `str.indexOf(内容) 返回索引（位置）`

  + 字符串是否以谁开头

    + `str.startsWith(检测内容)`

  + 字符串是否以谁结束

    + `str.endsWith(检测内容)`

  + 重复字符串

    + `str.repeat(次数)`

    + ```javascript
      let a = 'a';
      console.log(a.repeat(5)); //'aaaaa'
      ```

  + 填充字符串

    + 往前填充 `str.padStart(填充后整个字符串的长度，填充的内容)`

    + 往后填充`str.endStart(填充后整个字符串的长度，填充的内容)`

    + ```javascript
      let str = 'apple';
      let padStr ='XXX';
      console.log(str.padStart(str.length+padStr.length,padStr));
      console.log(str.padEnd(str.length+padStr.length,padStr));
      ```

## 新增函数

+ 函数参数

  + 函数参数默认值

    + ```javascript
            function show({x=1,y=2}={}) {
                 console.log(x,y); //x:8,y:9
              }
              show({x:8,y:9});

             function show(a,b=4) {
                  console.log(a,b);  //a:2,b:4
              }
              show(2);
      ```

  + 函数参数定义

    + ```javascript
       function show(a) {
                  let a=2; //报错 Identifier 'a' has already been declared
                  console.log(a); 
              }
              show(4);  
      ```

+ 箭头函数

  + 箭头函数基本用法

    + ```javascript
         let show = (a=2,b=6)=>{
             console.log(a,b);
             return a+b;
         }
               console.log(show());
      ```

  + 箭头函数中this指向

    + ```javascript
              let json = {
                  id:1,
                  show:function () {
                      setTimeout(function(){
                          alert(this.id);
                  },2000);
                  }
              };
      	   json.show();  //undefined

             let json = {
                 id:1,
                 show:function () {
                      setTimeout(()=>{
                         alert(this.id);
                      },2000);
                 }
             };
      	 json.show(); // 1
      ```

    + 箭头函数会修改this指向，会指定调用该函数的对象

+ 扩展运算符

+ 拷贝数组

## 数组新增

+ 数组新增特性
+ 数组新增方法

## 对象新增

## promise

## 模块化

## 类和继承

## Symbol和generator

## async和await

## Set和weakSet

## Map和WeakMap

## Proxy

## Reflect

## 数字变化和Math新增

## ES2018新增

