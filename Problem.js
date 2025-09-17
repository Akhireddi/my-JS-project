//Traverse through an array by adding 2 
//    to the ith element of the array


//for loop
let num = [1,2,3,4];
for(let i = 0; i< num.length;i++){
    console.log(num[i] + 2);
}

//using forEach
let nums = [9,8,7,6];
nums.forEach((value, index, arr)=> {
    arr[index] = value +2;
})
console.log(nums);

//using map()
let sum = num.map(value => value+2);
console.log(sum);
