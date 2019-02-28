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
      ```
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
     ```

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
      ```

      ```

  + 函数参数定义

    + ```javascript
      function show(a) {
                  let a=2; //报错 Identifier 'a' has already been declared
                  console.log(a); 
              }
              show(4);  
      ```

  + ES2017支持的函数参数

    + ```javasc
       function show(a,b,c,) {
                  console.log(a,b,c);
              }
              show(1,2,3,);
       ```
      ```

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
      ```

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
      ```

    + 箭头函数会修改this指向，会指定调用该函数的对象
      ```

+ 扩展运算符

  + 扩展运算符语法

    + ```javascript
      var arr = [1,2,3,4,5,6];
      console.log(...arr); //1，2，3，4，5，6
      ```


      function show(...a){
          console.log(a); //[1,2,3,4,5]
      }
      show(1,2,3,4,5);
    
       function show2(a,b,c) {
           console.log(a,b,c); //1，3，8
       }
      show2(...[1,3,8]);
    
      function show3(a,b,...c) {
            console.log(a,b);//a:1,b:2
            console.log(c); //[3,4,5]
      }
      show3(1,2,3,4,5);
      ```

  + 应用(伪数组转换为数组)

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
               var liObjs = document.querySelectorAll("ul li");
               var arrLi = [...liObjs];

               //将伪数组转换成数组对象，可以使用数组很多现成的方法
                 arrLi.pop();
                 arrLi.push("aaa");
               console.log(arrLi);
             };
          </script>
      </head>
      <body>

      <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
      </ul>

      </body>
      </html>
      ```

+ 拷贝数组

  + ```javascript
          let arr=[1,2,3,4,5];
          let arr2 = arr;
          arr2[0]=100;

          console.log(arr);  //[100,2,3,4,5]
          console.log(arr2);  //[100,2,3,4,5]
      ```
    ```

  + ```javascript
          let arr =[1,2,3,4,5];
          let arr2 =[...arr];
          arr2[0]=100;
          console.log(arr); //[1,2,3,4,5]
          console.log(arr2); //[100,2,3,4,5]
    ```

  + ```javascript
           let arr = [1,2,3,4,5];
           let arr2 = Array.from(arr);
           arr2[0] = 100;
           console.log(arr);//[1,2,3,4,5]
           console.log(arr2);//[100,2,3,4,5]
       ```
    ```

    ```

+ 新增幂的运算

  + ```javasc
     let result = Math.pow(2,3);
     let result2 = 2**3;
     console.log(result,result2);
     ```
    ```

    ```

## 数组新增

+ 数组新增for of遍历

  + ```javascript
    //1.for of 循环
    let arr = ["apple","banana","orange","tomato"];
    for(let val of arr){
        console.log(val);
    }

    //循环输出索引值
    let arr = ["apple","banana","orange","tomato"];
    for(let index of arr.keys()){
        console.log(index);
    }

    //循环每一项
    let arr = ["apple","banana","orange","tomato"];
    for(let item of arr.entries()){
        console.log(item);
    }

    //循环每一项
    let arr = ["apple","banana","orange","tomato"];
    for(let [index, val] of arr.entries()){
            console.log(index,val);
    }
    ```

+ 数组新增方法

  + ES5新增的数组方法

    + arr.forEach

      + ```javascript
         let arr = ["apple","banana","orange","pear","watermelon"];
         arr.forEach((ele,index,arr)=>{
              console.log(this,ele,index,arr);
          },"123");
         ```
        ```

        ```

    + arr.map

      + 对数组中的数据进行处理并返回一个新数组

      + ```javascript
              let newArr = arr.map(function (t) {
                   console.log("aaa");
               });
                console.log(newArr); // [undefined*5]
          ```
        ```

        ```

    + arr.some

      +  查找   某一个元素只要符合条件就返回 true

      + ```javascript
               let flag = arr.some(function (element,index,arr) {
                    return element.startsWith("apple2");
                });

               console.log(flag);
           ```
        ```

        ```

    + arr.every

      + 所有元素只要符合条件就返回 true

      + ```javascript
        //        let arr2 = [1,3,5,7,9];
        //        let flag = arr2.some(function (element,index,arr) {
        //            return element%2==1;
        //        });
        //
        //        console.log(flag);
        ```

    + arr.reduce

      + 常用在求数组的和/阶乘

      + ```javascript
        //        let arr3 = [1,2,3,4,5,6,7,8,9,10];
        //
        //        let sum = arr3.reduce((prev,cur,index,arr)=>{
        //                return prev+cur;
        //        });
        //
        //        console.log(sum);

        ```

    + arr.reduceRight

      + ```javascript
            let arr2 = [2,2,3];
                 let sum = arr2.reduceRight((prev,cur,index,arr)=>{
                     return prev**cur;
                 })
                 console.log(sum);
        ```

    + arr.filter

      + 过滤数组

      + ```javascript
               let json = [
                   {title:"aaa",read:100,hot:true},
                   {title:"bbb",read:100,hot:false},
                   {title:"ccc",read:100,hot:true},
                   {title:"ddd",read:100,hot:false},
                   {title:"eee",read:100,hot:true},
                   {title:"fff",read:100,hot:true}
               ];

               let newArr = json.filter(function (item) {
                   return item.hot;
               });
               console.log(newArr);
           ```
        ```

        ```

  + ES6新增的数组方法

    + Array.from

      + Array.from 是将类数组，arguments对象转为数组

      + 什么是类数组

        + 有length属性
        + 通过0，1，2，3可以访问到每一项

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
                //Array.from 是将类数组，arguments对象转为数组

                //类数组:只要有length基本上可以认为是类数组
                window.onload = function () {
                    let liObjs = document.querySelectorAll("ul li");
                    let arr = Array.from(liObjs);
                    console.log(arr);

                };

                function show() {
                    console.log(Array.from(arguments));
                }
                show(1,2,3,4,5);

                let json = {
                    0:"apple",
                    1:"banana",
                    2:"orange",
                    length:2
                };
                let arr = Array.from(json);
                console.log(arr);
        ```



            </script>
        </head>
        <body>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        </body>
        </html>
        ```
    
    + Array.of
    
      + 将一组值转换成数组
    
      + ```javascript
        //Array.of()将一组值转换为数组
                let arr= Array.of("apple","orange","pear");
                console.log(arr);
        ```
    
    + arr.find
    
      + 寻找第一个符合条件的数组成员，如果没有找到返回undefined
    
      + ```javascript
                   let arr = [100,102,56,77,88,900];
                   var res =arr.find((ele,index,arr)=>{
                        return ele>100;
                    });
                    console.log(res);
        ```
    
    + arr.findeIndex
    
      + 寻找第一个符合条件的数组成员的索引，如果没有找到返回-1
    
      + ```javascript
         let arr = [100,102,56,77,88,900];
                var res =arr.findIndex((ele,index,arr)=>{
                    return ele>100;
                });
                console.log(res);
        ```
    
    + arr.fill
    
      + 填充数据
    
      + ```javascript
        let arr = new Array(10);
        arr.fill('默认值',1,2);
        console.log(arr);
        ```
    
    + arr.includes
    
      + 数组是否包含某一项,包含返回true,否则返回false
    
      + ```javascript
        let arr =["apple","orange","banana","tomato"];
        let result = arr.includes("orange");
        console.log(result);
        ```

## 对象新增

+ 回顾对象相关知识点

  + 对象概念

    + JS对象创建

      + 方式一

        + 自有属性和继承属性

        + ```javascript
           1 var built = function(){
           2     
           3     var me = this;
           4     me.name = "Arvin";
           5 
           6 }
           7 
           8 built.prototype = {
           9     toStr:function(value){
             10         alert("there have a " + value);
             11     }
             12 
             13 };
             14 
             15 var obj = new built();
           ```
          ```

          ```

      + 方式二

        + ```javascript
          1 var obj = {
          2     
          3     name:"Arvin",
          4 
          5     toStr:function(value){
          6         alert("there has a "+value);
          7     }
          8 };
          ```

      + 方式三

        + ```javascript
          var obj = Object.create({x:1,y:2});//obj继承了属性x和y
          ```

  + js对象属性操作

    + 访问属性

      + obj.attr

    + 设置属性

      + obj.attr = 值

    + 删除属性(只能删除自有属性)

      + delete obj.attr

    + 检测属性（判断某一属性是否存在于某一对象中）

      + 方式一

        + ```javascript
          1 var point = {x:1};
          2 
          3 "x" in point; //这一个表达式最后返回的将会是true。
          4 "toString" in point; //由于toString是继承方法，所以也是返回true.
          5 "z" in point; //这一表达式最后返回false，因为point对象中没有z属性.
          ```

      + 方式二 hasOwnProperty() 只能检测自有属性

        + ```javascript
          1 var o ={x:1};
          3 o.hasOwnProperty("x"); //true：o有这一属性，
          4 o.hasOwnProperty("y"); //false;
          5 o.hasOwnProperty("toString"); //false
          ```

      + 方式三 propertylsEnumerable(),只有当当前的属性是自有属性，并且是可枚举的的时候，这一方法才会返回true

    + 枚举属性

      + for in
        + 循环遍历当前的对象的内容是一种很常见的手段。其可以遍历对象中的所有的可枚举属性，包括当前对象的自有属性和继承属性。
      + Object.key()
        + 枚举属性名称的函数，他返回的是一个数组，其中存在的是对象中的可枚举属性名称组成。
      + Object.getOwnPropertyNames()
        + 其返回的额也是数组，但是是所有的自有属性名称的数组

  + js对象属性特性

    + 属性的特性其实就是值当前的属性是否可以写可以读等等,即外部对象对于属性操作的权限.

      + 可读属性writable
      + 可枚举属性enumerable
      + 可配置属性configurable

    + 为了实现这一对象属性的描述，js中定义了一个属性描述符对象。并且可以通过Object.getOwnPropertyDescriptor()方法来获取某个对象中的特定属性的描述符。当然当前函数只能获取对象自有属性的描述，如果要获取继承属性的描述符的话，需要使用Object.getPrototypeOf();

      + 设置defineProperty()

        + ```javascript
          Object.defineProperty({}，"x", {value:1, writable:true, enumerable:true, configurable:true});
          ```

  + js对象方法

    + toString（）方法
    + toLocaleString方法和toString方法是类似的，只是返回的是本地的字符串，实际上就是根据一些当地的用户使用习惯来定义的返回内容。
    + toJSON()方法,我们常用的多的是在Date对象中使用.
    + valueOf()方法

+ ES6对象新增内容

  + 对象的简洁语法

    + ES5中定义对象

      + ```javascript
           let json = {
                   name:name,
                   age:age
                  };
           ```
        ```

        ```

    + ES6中定义对象

      + ```javascript
        let json = {
        	 name:name,
             age:age,
             showA:function () {
              	return this.name
        	}
        };
        ```

  + 新增的API

    + Object.is() 判断两个值是否相等

      + ```javascript
         console.log(NaN == NaN);//false
         console.log(isNaN(NaN)); //true

         var b = Object.is(NaN,NaN);
         console.log(b); //true

         console.log(+0 == -0);//true
         console.log(Object.is(+0,-0)); //false
         ```
        ```

        ```

    + Object.assign()

      +  Object.assign(目标对象,source1,source2,source3,...)用于合并对象,返回一个新的合并后的对象

      + ```javascript
        let json = {a:1};
        let json2 = {a:2,b:1};
        let json3 = {c:3};
        let b=Object.assign({},json,json2,json3);
        console.log(b);

        //用处一：
                //1.赋值一个对象
                let arr =["apple","banana","orange"];
                let arr2 = Object.assign([],arr);
                arr2.push("tomato");
                console.log(arr);
                console.log(arr2);
        //用处二：
        	 //2.合并参数（写框架时）
                function show(options) {
                    let default = {
                        type:'get',
                        header:'',
                        data:{}
                    };
                    let argu = Object.assign({},options,default);
                }
        ```

  + 对象循环

    + ```javascript
             /**
              * Object.keys()
              * Object.values()
              * Object.entries()
              */

             let json ={
                 a:1,
                 b:2,
                 c:3
             };

             for(let key of Object.keys(json)){
                 console.log(key);
             }
             for(let val of Object.values(json)){
                 console.log(val);
             }
             for(let entry of Object.entries(json)){
                 console.log(entry);
             }
         ```
      ```

      ```

  + 使用扩展运算符实现对象的快速复制

    + ```javascript
      let {a,b,...z} = {a:1,b:2,c:3,d:4};
      console.log(a,b,z);
             //快速复制对象
              let json = {a:1,b:2};
              let json2={...json};
              console.log(json2);
      ```

## promise

+ promise提出解决什么问题

  + promise地提出是解决异步请求中的地狱回调问题

  + 地狱回调是 回调里面嵌套回调

    + 例子

    + ```javascript

      fs.readFile('./data/a.txt','utf8',function (err, data) {
          if (err) {
              throw err
          }
          console.log(data)；
          fs.readFile('./data/b.txt','utf8',function (err, data) {
          	if (err) {
             		 throw err
         		 }
          	console.log(data)；
              fs.readFile('./data/c.txt','utf8',function (err, data) {
          	if (err) {
                  throw err
          	}
          	console.log(data)；
      	})
      })
       
      ```

+ promise的用法

  + 语法

    + ```javascript
      let a = 11;
      new promise(function(resolve,reject){
       		
          if(a==10){
               //resolve 成功调用
              resolve('成功啦')；
          }else{
              //reject 失败调用
              reject('失败了')；
          }	
        });

      promise.then(res=>{
          console.log(res);
      },err=>{
          console.log(err);
      })
      ```

  + Promise上的静态方法

    + Promise.resolve()

      + ```javascript
         let promise = Promise.resolve("aa");
          promise.then(res=>{
              console.log(res);  //aa
         });
         ```
        ```

        ```

    + Promise.reject()

      + ```javascript
        let promise = Promise.resolve("bb");
          promise.then(null,res=>{
              console.log(res);  //bb
         });
        ```

    + Promise.all([promise1,promise2,promise3])

      + 将promise对象打包, 必须确保所有的promise都是成功的状态才返回

    +   Promise.race([promise1,promise2,promise3])

      + 将promise对象打包只要有成功的一个就返回

+ 例子(模拟用户登录成功后获取用户信息)

  + ```javascript
    let status = 1;
    let userLogin = (resolve,reject)=>{
        setTimeout(()=>{
            if(status ==1){
                 resolve({data:"登录成功",msg:"success",token:"adadsdewffv"});
            }else{
                reject("失败了");
            }
        },2000)  
    };

    let getUserInfo = (resolve,reject)=>{
         setTimeout(()=>{
                    if(status==1){
                        resolve({data:"获取用户信息成功",msg:"success",token:"adaewrdewffv"});
                    }else{
                        reject("失败了");
                    }
                },1000);
    };

    new Promise(userLogin).then(res=>{
                console.log("用户登录成功");
                return new Promise(getUserLogin);
    }).then(res=>{
                console.log("获取用户信息成功");
                console.log(res);
    });
    ```

## 模块化

+ 什么叫模块化

  + 实现特定功能的文件叫一个模块
  + 模块化就是在开发项目中，将项目功能分块，每一块对应一个模块（js文件）这样在开发中可以减少重复代码节省时间，后期维护更加方面
  + 模块化就是组织代码的一种方式

+ ES6如何实现模块化

  + 定义模块
    + 一个js文件就是一个模块
    + 导出使用export 表示该模块向外暴露的内容
    + export default  变量名
    + export {导出内容}
  + 使用模块
    + import  名称 from '文件相对路径'

+ 各个模块之间如何引用

  + 动态引入

    + ```javasc
      import('./modules/1.js').then(res=>{
                  console.log(res);
              }); 
      ```

  + 普通引入

    + ```javascript
      ---./modules/1.js---
       export const a = 12;  //导出模块
       export const b =2;
       export let c= 5;

       import {a,b,c} from './modules/1.js';
       console.log(a,b,c); 

      ```

## 类和继承

+ 类的定义

  + ES5中如何实现类的概念

    + ```javascript
             function Person(name) {
                  this.name = name;
              }

             Perosn.prototype.eat = function () {
                  console.log("人在吃");
              }

              Object.assign(Person.prototype,{
                 showName(){
                    console.log(`我的名字是${this.name}`);
                }
              });
             new Person("wuyaru").showName();
         ```
      ```

      ```

  + ES6中类的定义方式一

    + ```javascript
      class Person{
          constructor(name,age){ //构造函数，当使用new的时候默认调用
              console.log(`构造函数执行了,${name},${age}`);  
          }
          
           console.log(typeof Person); //function    所以说本质上也就是ES中的function
            new Person("wuyaru",19);
      }
      ```

  + ES6中类的定义方式二

    + ```javascript
       const Person = class {
                  constructor(name, age) {
                      this.name = name;
                      this.age = age;
                  }

                  showName() {
                      return `我的名字叫:${this.name}`;
                  }

                  showAge() {
                      return `我的年龄是:${this.age}`;
                  }
              }

              let per = new Person("吴亚茹", 19);
              console.log(per.showName(), per.showAge());
       ```
      ```

      ```

+ 类中方法的定义

  + 正常在类中定义

  + 另一种定义方式

    + ```javascript

      let aaa = "jesscia";
              class Person{
                  constructor(name, age) {
                      this.name = name;
                      this.age = age;
                  }

                  showName() {
                      return `我的名字叫:${this.name}`;
                  }

                  showAge() {
                      return `我的年龄是:${this.age}`;
                  }
                  [aaa](){
                      console.log("我是一个方法");
                  }
              }

              let per = new Person("吴亚茹", 19);

              per.jesscia();
              per[aaa]();
      ```

+ 使用类的注意点

  + 类没有预定义的概念，必须先定义后使用
  + 类中方法内的this指的是实例对象

+ Class中的getter和setter

  + ```javascript
           //class中的存值函数setter和取值函数getter

            class Person {
                constructor(){

                }
                set aa(val){
                    console.log(`设置aa属性值为:${val}`);
                }
                get aa(){
                    return `haha`;
                }
            }

            var per = new Person();
            per.aa = 123;
            console.log(per.aa);
       ```
    ```

    ```

+ 类中的静态方法

  + ```javascript
           class Person{
               constructor(){

               }
               showName(){
                   return "这就是一个方法";
               }
               static eat(){
                   return "吃";
               }
           }

           var per = new Person();
           console.log(per.showName());
           console.log(Person.eat());
       ```
    ```

    ```

+ 类的继承

  + ES5中如何实现继承

    + ```javasc
             //ES5如何实现继承
              
         ```
        //        function Person(name) {
        //            this.name = name;
        //        }
        //        Person.prototype.eat = function () {
        //            return "人再吃饭";
        //        }
        //
        //        function Student(name,skill) {
        //            Person.call(this,name);  //继承属性
        //            this.skill = skill;
        //        }
        //
        //        //继承方法
        //        Student.prototype = new Person();  //继承方法
        //
        //        var student = new Student("wuyaru","学习");
        //        console.log(student.name,student.skill);
        //        console.log(student.eat());
      ```

      ```

  + ES6中的继承

    + ```javascript
             //ES6实现继承
             class Person{
                 constructor(name){
                     this.name = name;
                 }
                 showName(){
                     return `我的名字是${this.name}`;
                 }
             }

             class Student extends Person{

             }

             var student = new Student("wuyaru");
             console.log(student.showName());
         ```


      ---子类重写父类的方法----
    
              class Person{
                  constructor(name){
                      this.name = name;
                  }
                  showName(){
                      console.log("我是父类的showName方法");
                      return `我的名字是${this.name}`;
                  }
              }
    
              class Student extends Person{
                  constructor(name,age){
                      super(name);
                      this.age = age;
                  }
                  showName(){
                      super.showName();
                      console.log("我是子类的showName方法");
                  }
                  showAge(){
                      return `我的年龄为${this.age}`;
                  }
    
              }
    
              var student = new Student("wuyaru",18);
              console.log(student.showName());
              console.log(student.showAge());
      ```

+ 应用案例(拖拽)

  + ```javascript
    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <style>
            .box {
                width: 100px;
                height: 100px;
                background-color: red;
                position: absolute;
                top: 0
            }

            .left {
                left: 0
            }

            .right {
                right: 0;
            }

        </style>
    </head>
    <body>
    <div id="dv1" class="box left">DIV1</div>
    <div id="dv2" class="box right">DIV2</div>

    <script>
    ```


        class Drag {
            constructor(id) {
                this.oDIV = document.querySelector(id);
                this.x = 0;
                this.y = 0;
                this.init();
            }
    
            init() {
                this.oDIV.onmousedown = function (ev) {
                    this.x = ev.clientX - this.oDIV.offsetLeft;
                    this.y = ev.clientY - this.oDIV.offsetTop;
                    this.oDIV.style.cursor = 'move';
    
                    document.onmousemove = this.fnMove.bind(this);
                    document.onmouseup = this.fnUp.bind(this);
                }.bind(this);
            }
    
            fnMove(ev) {
                this.oDIV.style.left = ev.clientX - this.x + "px";
                this.oDIV.style.top = ev.clientY - this.y + "px";
            }
    
            fnUp() {
                document.onmousemove = null;
                document.onmouseup = null;
            }
        }
    
        class LimitDarg extends Drag {
    
            //移动时限制范围
            fnMove(ev) {
                super.fnMove(ev);
                if ( parseInt(this.oDIV.style.left) < 0) {
                    this.oDIV.style.left = "0px";
                }
                if ( parseInt(this.oDIV.style.top) < 0) {
                    this.oDIV.style.top = "0px";
                }
                if (parseInt(this.oDIV.style.left) > (document.documentElement.clientWidth - this.oDIV.offsetWidth)) {
                    this.oDIV.style.left = (document.documentElement.clientWidth - this.oDIV.offsetWidth) + "px";
                }
                if (parseInt(this.oDIV.style.top) > (document.documentElement.clientHeight - this.oDIV.offsetHeight)) {
                    this.oDIV.style.top = (document.documentElement.clientHeight - this.oDIV.offsetHeight) + "px";
                }
            }
    
        }
    
        //实现拖拽
        new Drag("#dv1");
        //实现有限制的拖拽
          new LimitDarg("#dv2");
    </script>
    </body>
    </html>
    ```

## Symbol和generator

+ Symbol

  + Symbol介绍

    - symbol是es6中新增的一种数据类型

    - 定义

      - ```javascript
        let syml =  Symbol("aaa");
        console.log(syml); //Symbol(aaa)
        ```

    - 注意事项

      - symbol 不能new
      - Symbol()返回的是一个唯一值
      - ymbol是一个单独的数据类型，叫基本类型.typeof 检测出来的数据类型是symbol属于基本数据类型

  + Symbol使用

    + ```javascript
           let syml = Symbol("aa");
             let json = {
               a:"apple",
               b:"banaba",
               [syml]:"ssdsd"
             };
             console.log(json[syml]); //ssdsd

              
              for(let key in json){
                  console.log(json[key]);
              }

              //如果symbol作为key循环遍历出不来
              for(let item in json){
                  console.log(item);
              }
       ```
      ```

      ```

+ generator

  + generator函数是一个生成器，用于解决异步编程深度嵌套问题，现在使用promise

  + 语法

    + ```javascript
       function * show() {
               //   配合yield(产出) 使用
              }
       ```
      ```

      ```

  + 使用

    + ```javascript
             

      //手动调用
           function * gen() {
                  yield "welcome";
                  yield "to";
                  return "jesscia";
              }

             var gl= gen();
              console.log(gl);  //返回的是一个对象
              console.log(gl.next()); //{value: "welcome", done: false}
              console.log(gl.next());//{value: "to", done: false}
              console.log(gl.next()); //{value: "jesscia", done: true}
              console.log(gl.next());//{value: "undefined", done: true}
              console.log(gl.next());//{value: "undefined", done: true}
              console.log(gl.next());//{value: "undefined", done: true}
      //循环遍历
              function * gen() {
                  yield "welcome";
                  yield "to";
                  return "jesscia";
              }

             var gl= gen();
             //for of可以自动遍历 generator
              //注意只遍历yield中的内容
              for(var item of gl){
                  console.log(item);
              }
      ```


      //generator配合解构使用
      //解构解的是yeild对应的值
              function* gen() {
                  yield "welcome";
                  yield "to";
                  return "jesscia";
              }
    
              var [a, ...b] = gen();
              console.log(a, b);

      //generator配合扩展运算符使用
    
              function* gen() {
                  yield "welcome";
                  yield "to";
                  return "jesscia";
              }
    
              console.log(...gen());


      //generator配合axios进行数据请求
      //请求地址：https://api.github.com/users/colarlady
              function* gen() {
                  var val = yield "colarlady";
                  yield axios.get(`https://api.github.com/users/${val}`);
              }
    
              var g1 = gen();
              var name = g1.next().value;
             // console.log(g1.next(name).value);  //得到的是一个promise对象
              g1.next(name).value.then(res => {
                  console.log(res.data);
              })
      ```

## async和await

+ async和await处理异步请求

+ 语法:

  + ```javascript
    async function fn(){  //表示这个函数中有异步执行的任务
        let result = await XXX  //表示后面需要这个执行完成
    }
    ```

+ 特点

  + await只能放到async函数中
  + 相比于generator语义化更强
  + await后面可以是promise对象，也可以是数字，字符串等
  + async函数返回的是一个promise
  + 只要await后面的Promise状态编程reject,整个async就会中断

+ 特点验证

+ ```javasc
  //读取文件

  const fs = require('fs')

  //简单封装，将fs封装成一个promise
  const readFile = function(filename){
      return new Promise((resolve,reject)=>{
          fs.readFile(filename,(err,data)=>{
              if(err) reject(err);
              resolve(data);
          })
      })
  }
  ```


  //1.promise方式
  // readFile('data/a.txt').then(res=>{
  //     console.log(res.toString());
  //     return readFile('data/b.txt');
  // }).then(res=>{
  //     console.log(res.toString());
  //     return readFile('data/c.txt');
  // }).then(res=>{
  //     console.log(res.toString());
  // })

  //2.generator方式

  // function * gen(){
  //     yield readFile('data/a.txt');
  //     yield readFile('data/b.txt'); 
  //     yield readFile('data/c.txt');
  // }

  // let g1 = gen();
  // g1.next().value.then(res=>{
  //     console.log(res.toString());
  //     return g1.next().value;
  // }).then(res=>{
  //     console.log(res.toString());
  //     return g1.next().value;
  // }).then(res=>{
  //     console.log(res.toString());
  // })

  //3.async方式

  async function fn(){
      let f1 = await readFile('data/a.txt');
      console.log(f1.toString());
      let f2 = await readFile('data/b.txt');
      console.log(f2.toString());
      let f3 = await readFile('data/c.txt');
      console.log(f3.toString());
  }

  fn();
  console.log(fn());
  ```

+ async出现错误中断

  + ```javascript
    async function fn(){

       let b =  await  Promise.resolve('success');
       console.log(b);
       let a =   await  Promise.reject('出错了');
       console.log(a);
    }

    // fn().then(res=>{
    //     console.log(res);
    // },err=>{
    //     console.log(err);
    // });

    fn().then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    });

    //如何解决async函数中抛出错误，不影响后续代码
    //1.
        // try{

        // }catch(e){

        // }
    //2.
        // promise自己来catch
      
    //建议await都要try{}catch()
  ```

+ async异步可以是字符串

  + ```javascript
       async function fn(){
                return 'welcome'
            }
            fn().then(res=>{
                console.log(res);
            })
       ```
    ```

  ​
    ```

## Set和weakSet

+ set数据结构类似于数组，但是里面的值不能重复

+ 使用

  + ```javascript
     let set = new Set(['a','b','c']);
            console.log(set);  //[a,b,c]

            let set2 = new Set(['a','b','c','a','b']);
            console.log(set2); //[a,b,c]
     ```

+ 循环

  + ```javascript
    let set = new Set(['a','b','c']);
    for(var item of set){
        console.log(item);
    }

    for(var key of set.keys()){
        console.log(key);
    }

    for(var item of set.values()){
        console.log(item);
    }

    for(let[k,v] of set.entries()){
           console.log(k+"-----"+v);
    }
    ```

+ API

  + 添加一项

    + ```javascript
      let set = new Set();
      set.add('a');
      set.add('b');
      console.log(set);
      ```

  + 删除一项

    + ```javascript
      set.delete('b')
      console.log(set);
      ```

  + has()判断set中是否有某一项

    + ```javascript
       console.log(set.has('b'));
       console.log(set.has('a'));
       ```
      ```

      ```

  + size获取数组项的个数

    + ```javascript
       console.log(set.size);
       ```
      ```

      ```

  + 清空数组

    + ```javascript
         set.clear();
         ```
      ```

      ```

+ 应用

  + 数组去重

    + ```javascript
      let Arr = [1,2,3,4,5,6,7,1,4,5,2];
      let set = new Set(Arr);
      console.log([...set]);
      ```

  + set数据结构转换成数组

    + ```javascript
      let set = new Set([1,2,3]);
      let arr = [...set];
      ```

  + set里面存储对象

    + ```javascript
          let set = new Set();
          let json = {
              a:1,
              b:2,
              c:3
          };
          set.add(json);
          let json2 = {
              a:2,
              b:3,
              c:1
          }
          set.add(json2);
          console.log(set); 
      ```

## Map和WeakMap

+ map

  + map类似于json，但是json的key值只能有字符串

  + 获取项

    + ```javascript
      let map = new Map();
              let json = {
                  a:1,
                  b:2,
                  c:3
              };
              map.set('a','aaa');
              map.set(json,'aaa');
      ```

  + 设置项

    + ```javascript
       //获取某一项
         console.log(map.get(json));
       ```
      ```

      ```

+ 循环map

  + ```javasc
    let map = new Map();
    let json = {
                a:1,
                b:2,
                c:3
            };
    map.set('a','aaa');
    map.set(json,'aaa');
    map.set('aaa',json);
    ```


           console.log("======================");
           for(let key of map.keys()){
               console.log(key);
           }
    
             console.log("======================");
            for(let item of map.values()){
               console.log(item);
           }
     
    ```

+ map的API

  + 获取某一项

    + ```javascript
       console.log(map.get(json));
       ```

  + 删除某一项

    + ```javsc
      map.delete('aaa');
      ```

  + 判断有没有某一项

    + ```javsc
       console.log(map.has('aaa'));
       ```

  + 清空

    + ```javascript
       map.clear();
       ```

## Proxy

+ Proxy基本使用

  + Proxy如其名， 它的作用是在对象和和对象的属性值之间设置一个代理，获取该对象的值或者设置该对象的值， 以及实例化等等多种操作， 都会被拦截住， 经过这一层我们可以统一处理，我们可以认为它就是“代理器

  + new Proxy(参数一，参数二)创建代理器

    + ```javascript
      //如果实例化的时候不给第二个参数设置get和set, 相当于没有这个代理器
      var obj = new Proxy({}, {
          get : function( target , prop ) {
              console.log("我要获取值了");
              return target[prop];
          },
          set : function( target, prop, value) {
              console.log("我要设置值了");
              target[prop] = value;
          }
      });
      obj.vvvv = 1; 
      obj.vvvv;
      ```

    + ```javascript
      //　如果给一个对象设置两个代理器或者更多的话， 所有的代理器都会生效
      var obj = new Proxy({}, {
          get : function( target , prop ) {
              console.log("我要获取值了");
              return target[prop];
          },
          set : function( target, prop, value) {
              console.log("我要设置值了");
              target[prop] = value;
              }
      });
      obj = new Proxy(obj, {
          get : function( target , prop ) {
              console.log("我要再获取值了");
              return target[prop];
          },
          set : function( target, prop, value) {
              console.log("我要再设置值了");
              target[prop] = value;
          }
      });
      obj.vvvv = 1;
      obj.vvvv;
      ```

    + ```javascript
      //通过代理器， 能够对用户设置的值进行验证，  只有验证通过了才设置到对象上
      let validator = {
          set: function(obj, prop, value) {
              if (prop === 'age') {
                  if (!Number.isInteger(value)) {
                      throw new TypeError('The age is not an integer');
                  }
                  if (value > 200) {
                      throw new RangeError('The age seems invalid');
                  }
              };
              obj[prop] = value;
          }
      };

      let person = new Proxy({}, validator);

      person.age = 100;
      console.log(person.age); // 100
      person.age = 'young'; // 抛异常
      person.age = 300; // 值太大了，也抛异常
      ```

  + 参数一为一个对象

  + 参数二也是一个对象

    + 对象的参数为**以下的列表**

    + 　　handler.getPrototypeOf()
      　　handler.setPrototypeOf()
        　　handler.isExtensible()
        　　handler.preventExtensions()
        　　handler.getOwnPropertyDescriptor()
        　　handler.defineProperty()
        　　handler.has()
        　　handler.get()
        　　handler.set()
        　　handler.deleteProperty()
        　　handler.ownKeys()
        　　handler.apply()
        　　handler.construct()

    + handler.getPrototypeOf()

      + 获取原型

      + getPrototypeOf方法必须返回一个对象， 否则会报错

      + ```javascript
        var obj = {};
        var proto = {};
        var handler = {
            getPrototypeOf(target) {
                console.log(target === obj);   // true
                console.log(this === handler); // true
                return proto;
            }
        };

        var p = new Proxy(obj, handler);
        console.log(Object.getPrototypeOf(p) === proto);    // true
        ```

      + 5种触发**getPrototypeOf**的方法

        + ```javascript
          var obj = {};
          var p = new Proxy(obj, {
              getPrototypeOf(target) {
                  return Array.prototype;
              }
          });
          console.log(
              Object.getPrototypeOf(p) === Array.prototype,  // true
              Reflect.getPrototypeOf(p) === Array.prototype, // true
              p.__proto__ === Array.prototype,               // true
              Array.prototype.isPrototypeOf(p),              // true
              p instanceof Array                             // true
          );
          ```

    + handle.setPrototypeOf()

      + 当对象被设置原型的时候会执行我们设定的代码

        + ```javascript
          let handler = {
              setPrototypeOf : function(target, value) {
                  console.log("setPrototypeOf");
                  target.__proto__ = value;
                  target.hehe = "1111";
                  return target;
              }
          };
          let proxy = new Proxy( {}, handler );
          proxy.__proto__ = Object.prototype
          console.log(proxy);
          输出：setPrototypeOf
          又输出： {hehe: "1111"}
          ```

    + handle.constructor()

      + ```javascript
        var p = new Proxy(function() {}, {
            construct: function(target, argumentsList, newTarget) {
                console.log("called: " + argumentsList.join(", "));
                return { value: argumentsList[0] * 10 };
            }
        });

        console.log(new p(1)); 
        //输出：called: 1
        //输出：Object {value: 10}
        ```

+ Proxy的api

  + Proxy.revocable()

    - Proxy.revocable()返回一个可以取消的Proxy代理， 当实例化完毕后，在 **执行 Proxy实例对象**.revoke();   那么这个proxy实例相当于被内存回收， 不存在一样

    - ```javascript
      var revocable = Proxy.revocable({}, {
          get: function(target, name) {
              return "[[" + name + "]]";
          }
      });
      var proxy = revocable.proxy;
      console.log(proxy.foo); // "[[foo]]"
      revocable.revoke();
      console.log(proxy.foo); // 抛出异常
      proxy.foo = 1           // 抛出异常
      delete proxy.foo;       // 抛出异常
      typeof proxy            // "object"， 但是它还是一个对象....
      ```

+ Proxy实际应用

  + 通过**construct**和**apply**两个变量， 可以实现一个：继承构造函数的工具函数extend

    + ```javascript

      ```

    + ​

  + Proxy和reflect配合使用

    + ```javascript

      ```

    + ​

## Reflect

+ ES6为什么提出Reflect

  + - 有些方法返回了更加有用的值

      -  Object.defineProperty(obj, name, desc) 设置成功返回
      -  Reflect.defineProperty设置成功返回true或者false

    - 函数操作

      -  **Reflect.has(obj, name)**,
      - Reflect.deleteProperty(obj, name);
      - 。。。

    - 更加可靠的函数执行方式

      - ```
        f.apply(obj, args)
        Function.prototype.apply.call(f, obj, args)
        Reflect.apply(f, obj, args)
        ```

    - 可变参数形式的构造函数

      - ```javascript
        var obj = Reflect.construct(F, args)
        ```

    - 设置this指向

      - ```javascript
        var name = ... // get property name as a string
        Reflect.get(obj, name, wrapper) // if obj[name] is an accessor, it gets run with `this === wrapper`
        Reflect.set(obj, name, value, wrapper)
        ```

    - 避免直接访问_proto_

      - ```javascript
        //ES5提供了 Object.getPrototypeOf(obj)，去访问对象的原型
        //ES6提供也提供了Reflect.getPrototypeOf(obj) 和  Reflect.setPrototypeOf(obj, newProto)， 这个是新的方法去访问和设置对象的原型
        ```

+ Reflect的使用

  + Reflect.apply()

    + Reflect.apply其实就是ES5中的 Function.prototype.apply() 替身

    + ```javascript
      //Reflect.apply()
      //参数一：需要执行的函数
      //参数二：this
      //参数三：执行函数的参数
      let fn = function() {
          this.attr = [0,1,2,3];
      };
      let obj = {};
      Reflect.apply(fn, obj, [])
      console.log(obj);  
      ```

  + Reflect.construct()

    + 通过传参的形式，实例化构造函数

    + 我们可以给Reflect.construct传第三个参数 ， 第三个参数为一个超类， 新元素会继承这个超类

    + ```javascript
      var Fn = function(arg) {
          this.args = [arg]
      };
      console.log( new Fn(1), Reflect.construct(Fn,[1]) ); // 输出是一样的
      ```

  + Reflect.defineProperty()

    + Reflect.defineProperty返回的是一个**布尔值**， 通过直接赋值的方式把**属性**和**属性值**添加给对象返回的是一整个对象， **如果添加失败会抛错**；

    + ```javascript
      <script>
      var obj = {};
      if( Reflect.defineProperty(obj, "x", {value : 7 }) ) {
          console.log("added success");
      }else{
          console.log("添加失败");
      };
      </script>
      ```

  + Reflect.deleteProperty()

    + Reflect.deleteProperty和Reflect.defineProperty的使用方法差不多， Reflect.deleteProperty和 delete obj.xx的操作结果是一样， 区别是使用形式不同：一个是操作符，一个是函数调用

    + ```javascript
      Reflect.deleteProperty(Object.freeze({foo: 1}), "foo"); // false
      delete Object.freeze({foo: 1}).foo; //输出：false；
      ```

  + Reflect.get()

    + 这个方法的有两个必须的参数： 第一个为obj目标对象， 第二个为属性名对象， 第三个是可选的，是作为读取器的上下文(this);

    + ```javascript
      var Reflect = require('harmony-reflect');

      var obj = {
          "foo" : 1,
          get bar() {
              return this.foo;
          }
      };
      var foo = {};
      foo.foo = "heheda";
      console.log(Reflect.get(obj, "bar", foo));
      ```

  + Reflect.set()

    + ```javascript
      var obj = {};
      Reflect.set(obj, "prop", "value"); // 输出：true
      console.log( obj.prop ); // 输出："value"

      var arr = ["duck", "duck", "duck"];
      Reflect.set(arr, 2, "goose"); // true
      console.log( arr[2] ); // "goose"

      Reflect.set(arr, "length", 1); // true
      console.log( arr );// ["duck"];
      ```

  + Reflect.getOwnPropertyDescriptor()

    + 通过Reflect.getOwnPropertyDescritptor获取属性描述

    + ```javascript
      Reflect.getOwnPropertyDescriptor({x: "hello"}, "x");
      //也可以这样获取：
      Object.getOwnPropertyDescriptor({x:"1"},"x");
      //这两个的区别是一个会包装对象， 一个不会：
      Reflect.getOwnPropertyDescriptor("hello",0); //抛出异常
      Object.getOwnPropertyDescriptor("hello",0); //输出： {value: "h", writable: false, enumerable: true, configurable: false}
      ```

  + Reflect.getPropertyOf()

    + Reflect.getPrototypeOf和Object.getPrototypeOf是一样的, 他们都是返回一个对象的原型

    + ```javascript
      Reflect.getPrototypeOf({}); // 输出：Object.prototype
      Reflect.getPrototypeOf(Object.prototype); // 输出：null
      Reflect.getPrototypeOf(Object.create(null)); // 输出： null
      ```

  + Reflect.setPropertyOf()

    + Reflect.setPrototypeOf()方法和Object.setPrototypeOf差不多一样样的， 会给对象设置原型， 就是更改对象的**__proto__**属性了

    + ```javascript
      Reflect.setPrototypeOf({}, Object.prototype); // 输出true

      // 给该对象数组[[Prototype]] 为null.
      Reflect.setPrototypeOf({}, null); // true
      // 此时的obj.__proto__为undefine

      //把对象冻结以后重新设置[[prototype]]
      Reflect.setPrototypeOf(Object.freeze({}), null); // false

      // 如果原型链循环依赖的话就会返回false.
      var target = {};
      var proto = Object.create(target);
      Reflect.setPrototypeOf(target, proto); // false
      ```

  + Reflect.has()

    + Reflect.has这个方法有点像操作符：in ， 比如这样： xx **in** obj;

    + ```javascript
      Reflect.has({x:0}, "x") //输出： true；
      Reflect.has({y:0}, "y") //输出：true
      ； var obj = {x:0}; console.log( "x" in obj); var proxy = new Proxy(obj, { has : function(target, args) { console.log("执行has方法"); return Reflect.has(target,...args); } }); console.log( "x" in proxy); //输出：true； console.log(Reflect.has(proxy, "x")) //输出：true；
      ```

  + Reflect.isExtensible()

    + Reflect.isExtensible和Object.isExtensible的区别是， 如果参数不对，一个会抛错， 另一个只是返回true或者false

    + ```javascript
      // 现在这个元素是可以扩展的；
      var empty = {};
      Reflect.isExtensible(empty); // === true

      // 使用preventExtensions方法， 让这个对象无法扩展新属性；
      Reflect.preventExtensions(empty);
      Reflect.isExtensible(empty); // === false

      // 这个对象无法扩展新属性， 可写的属性依然可以改动
      var sealed = Object.seal({});
      Reflect.isExtensible(sealed); // === false

      // 这个对象完全被冻结了
      var frozen = Object.freeze({});
      Reflect.isExtensible(frozen); // === false
      ```

  + Reflect.ownKeys()

    + Reflect.ownKeys， Object可没有ownKeys方法, Reflect.ownKeysz他的作用是返回对象的keys;

    + ```javascript
      console.log(Reflect.ownKeys({"a":0,"b":1,"c":2,"d":3})); //输出 ：["a", "b", "c", "d"]
      console.log(Reflect.ownKeys([])); // ["length"]
      var sym = Symbol.for("comet");
      var sym2 = Symbol.for("meteor");
      var obj = {[sym]: 0, "str": 0, "773": 0, "0": 0,
          [sym2]: 0, "-1": 0, "8": 0, "second str": 0};
      Reflect.ownKeys(obj); //输出：/ [ "0", "8", "773", "str", "-1", "second str", Symbol(comet), Symbol(meteor) ]
      ```

## 数字变化和Math新增

+ Math新增的API

  + Math.trunc()截取只保留整数部分

    + ```javascript
       console.log(Math.trunc(4));  //4
       console.log(Math.trunc(4.43)); //4
       console.log(Math.trunc(4.99));//4
       ```
      ```

      ```

  + 判断一个数是整数还是负数

    + ```javascript
             console.log(Math.sign(-5));
             console.log(Math.sign(5));
             console.log(Math.sign(-0));
             console.log(Math.sign(0));
         ```
      ```

      ```

  + 计算一个数的立方根

    + ```javascript
       console.log(Math.cbrt(729));  //9
       ```
      ```

      ```

+ 数值变化

  + ```javascript
        //二进制数字:let a = 0b101011
        //八进制数字: let b = 0o7371;
        //十六机制: let c = #ccc;
    ```

+ Number

  + Math上很多的方法都被挂在了Number对象上

  + 判断是不是NaN

    + ```javacript
       let a = 12;
       console.log(Number.isNaN(a));
       console.log(Number.isNaN(NaN));
       ```
      ```

      ```

  + 判断是不是数字

    + ```javascript
        let str = 'welcome';
              console.log(Number.isFinite(a));
              console.log(Number.isFinite(str));
        ```
      ```

      ```

  + 判断是不是整数

    + ```javascript
       let b = 12.5
              console.log(Number.isInteger(a));
              console.log(Number.isInteger(b));
       ```
      ```

      ```

  + 转Int

    + ```javascript
      Number.parseInt()
      ```

  + 转float

    + ```javascript
      Number.parseFloat()
      ```

  + 判断是否是安全整数

    + 安全整数 -(2^53-1) -----(2^53-1)

    + ```javascript
        let c = 2**53-1;
        console.log(Number.isSafeInteger(c));
        ```
      ```

    + 最大安全整数:Number.MAX_SAFE_INTEGER

    + 最小安全整数:Number.MIN_SAFE_INTEGER
      ```

## ES2018新增

+ ​

