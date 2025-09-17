/**Array is a special object in js used to store 
   multiple values in single variable, in ordered way.
. each value in an array is called an element.starts from an index [0].*/

//1.using []
let flowers = ["hibiscus","rose","jasmine"];

//2.using new array
let arr = new Array(5);//creates an empty array of length 5
let arr2 = new Array(1,2,3);

//3.adding/removing
flowers.push(4);//adds at end
console.log(flowers);
flowers.pop();//removes at end
console.log(flowers);
flowers.unshift("lilly");//add at first
console.log(flowers);
flowers.shift();//remove from start
console.log(flowers);

//4.searching 
console.log(flowers.indexOf("rose"));
console.log(flowers.includes("hibiscus"));

//5.iteration
let nums = [3,4,5];
nums.forEach(n => console.log(n));
let doubled = nums.map(n => n*2);
console.log(doubled);
let even = nums.filter(n => n% 2 == 0);
console.log(even);
let sum = nums.reduce((a,b) => a+b,0);//a - accumulator,b - current value, 0 - initial value
console.log(sum);

//6.modification of array
let arr3 = [1,2,3,4,5];
arr3.splice(2,1,34);//removes 1 element from index 2 and replaces with 34
console.log(arr3);
let arr4 = arr3.slice(1,4);
console.log(arr4);
console.log(arr3.slice(-2));//returns last 2
console.log(arr3);

//7.combining converting
let a = [4,5];
let b = [5,6];
let c = a.concat(b);

let str = ["Hello","world"].join("-");
console.log(str);
let str1 = "1,2,3,4";
let arrsplit = str1.split(",");
console.log(arrsplit);

//8.passing an array inside function
function Add(x){
    x.forEach(item => console.log(item));
}
let fruits = ["apple", "banana","mango"];
Add(fruits);

//9.returning an array from a function
function getEven(nums){
    return nums.filter(n => n % 2 == 0);
} 
let nums1 = [1,2,3,4,5,6,7,];
console.log(getEven(nums1));

//10.modifying inside a function
function addItem(x, item){
    x.push(item);
}
let colors = ["red","blue"];
addItem(colors, "pink");
console.log(colors);

//11.creating in functions
function range(n){
    let arr5 = [];
    for(let i =0;i<=n;i++){
        arr5.push(i);
    }
    return arr5;
}
console.log(range(3));
