//1.setTimeOut web API
console.log("start");

setTimeout(function cb(){
    console.log("akhila")
},5000);

console.log("end");

//2.addeventListener
console.log("start");

document.getElementById("btn").addEventListener("click",function cb(){
    console.log("call back");
});
console.log("end");

//3.fetch => goes and requests a API call
//          (fetch returns a promise)
console.log("start");
setTimeout(function cbT(){
    console.log("cbT called")
},5000);
fetch("any API")//give any API
    .then(function cbF(){
    console.log("Cb Api");
});
console.log("end");
