//1.using for loop
let arr = [1,2,3,4];
for (let i=0;i<arr.length;i++){
    console.log(arr[i]+i);
}
//2.uding while loop
let arr1 = [23,3,4,5,6];
let i=0;
while(i< arr1.length){
    console.log(arr1[i]*3);
    i++;
}

//3.for of loop
for(let num of arr){
    console.log(num);
}

//4.using for..in loop
let arr2 = ["red","blue","green"];
for(let x in arr2){
    console.log(x,arr2[x]);
}

/**5.forEach loop - forEach is an array method that executes a callback function 
                 once for each element in the array.
-> Does not return a new array (unlike map()).
-> Cannot use break or continue inside forEach.
-> The callback function can take up to three parameters:
-> value → the current element
-> index → the current element’s index
-> array → the array itself*/
let nums = [1,2,3,4,5,6,7];
nums.forEach((value, index)=> {
    console.log(`index: ${index}, value:${value}`);
});

//map(),filter(),reduce() also used for iteration
