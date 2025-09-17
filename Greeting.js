
//1. simple
let name = "Akhila";
console.log("hello"+ name);

//2.using function
function greet(name){
    console.log(`Hello, ${name}`);//It’s used inside backticks ` ` to insert variables or expressions directly into a string.
}
greet("Ram");

//3.using input prompt
function greet(name){
    alert(`Hello, ${name}`);
}
let user = prompt("enter ur name : ");
greet(user);