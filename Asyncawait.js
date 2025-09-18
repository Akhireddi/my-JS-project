//1.Async function always returns a promise
//   -> if it returns a value then also it wraps in a proise and return the promise
const p = new Promise((resolve, reject) => {
    resolve("resolved the data")
})
/**async function get(){
    return p;
}
const it = get();
it.then(res => console.log(res)); */

//****************** */

//2.normally handeling promise
function getD(){
    p.then(res => console.log(res));
    console.log("namaste JS");
}
getD();

//*************** */

//3.using async and await
//   -> we use the combo of async and await to handle promises
//await can only be used inside a async function
async function HandleP(){
    const val = await p;//when u write await before promise it will resolve the promise
    console.log(val);
}
HandleP();

//******************* */

//4. how js engine handle promise normally
const pm = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve("with normal handling")
    }, 4000);
});
function getP(){
    //Js engine will not wait for promise to resolve
    pm.then(res => console.log(res));
    console.log("handled normally ");
}
getP();

//******************* */

//5.how JS engine handles promises with async and await
const pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
 resolve("with asyn & await");
    },3000);
});
async function getAA(){
    //JS engine will wait for promise to resolve
    const val1 = await pr;
    console.log("async and aait handled promise")
}
getAA();
