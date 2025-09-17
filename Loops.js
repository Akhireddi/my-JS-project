//1.forloop
const marks = [1,2,3,4,5,6];
function get(){
    for(let i=0;i<=5;i++){
        console.log(marks[i])
    }
}
get();

//for
for(mark of marks) console.log(mark);

//2.forEach =>used to iterate over the elements
//            of an array and apply a specified 
//            function to each element
const scores = [22,33,4,55,66,77];
scores.forEach(double);
function double(scores){
    console.log(scores*2);
}

//3.forEach inside a function
function Fruits(arr){
    arr.forEach(function(element, index){
        console.log(index, element);
    });
}
Fruits(["apple","banana","kiwi"]);

//4.while
let i = 0;
while(i < 6){
    console.log(i);
    i++;
    if(i === 4) break;
}

let j =0;
while(j< 5){
    j++;
    if(j === 2){
        continue;
    }
    console.log(j);
}

let num = 1;
while(num<10){
    num++;
    if(num % 2 === 0){
        continue;
    }
    console.log(num)
}

//5.map = > it creates new array by applying function to each element for the original array
//syntax => let/co nst newArray = array.map(function(element,index,arr){
            //return value of array
             //});

const items = [
    {name: 'bike', price:2000},
    {name: 'choco', price:200},
    {name: 'net', price:300},
    {name: 'ball', price:10},
    {name: 'mat', price:20},
]
const itemNames = items.map((x) => {
    return x.name
})
console.log(itemNames);

//6.reduce => executes a callback function on each element of the array, 
//           reducing it to a simple output value
const numbers = [1,2,3,4,5];
let sum = numbers.reduce((acc,num)=> {
    return acc + num;
},0);
console.log(sum);

//max
const marks1 = [22,33,44,55,66];
let max = marks1.reduce((acc,x)=> {
    return x > acc ? x : acc; 
},marks1[0]);
console.log(max);
