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