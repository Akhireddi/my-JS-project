 
//Basics
 var a = 10;
 console.log(a);

 let b = 20;
console.log(b);

 const c = 30;
 console.log(c);

//**************** */

 //Declaring variables in functions
 //var
 function demo(){
     var a = 100;
console.log(a);
 }
 console.log(a);//impossible because var is function scoped

 var d = 25;
 function demo(){
     console.log(d);
 }
 demo();//var can be accessible because function is called
 console.log(d);//var d is global scoped so we can access d.

//************/

//let
 function demo2(){
     let e = 35;
 }
console.log(e);//e cannot be accessed outside the block scope
 demo2();
  console.log(e);//cannot be accessed even if u call the function

 function demo2(){
    let e = 35;
    console.log(e);
 }
 demo2();//can be accessed if u call the funtion

let f = 66;
 function demo3(){
    let f = 10;
    console.log(f);
 }
// //demo3();
 console.log(f);//f is accessable as 66 .because the let f = 66 is outside the function

 let j = 66;
function demo3(){
     let j = 10;
    console.log(j);
 }
 demo3();//now you have called a function so let f = 10 is accessable here
 console.log(f);//also let f = 66; is accessed here

 //******************** */

//const 
 const g = 40;
 function demo4(){
     console.log(g);
 }
 demo4();//same as let 

 const h = 40;
function demo4(){
   console.log(h);
}
demo4();
 console.log(h);

 const i = 45;
  function demo5(){
    const i = 55;
   console.log(i);//only 55 is accessable
}
demo5();
console.log(i);//only 45 is accessable

