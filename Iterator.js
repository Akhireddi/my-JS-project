/** Iterator  : in JS is an object that allows you to traverse (loop through) 
 * a collection(like arrays,strings,maps,sets)
 *  -> it follows the iterator protocol 
 * . must have method called next()
 * . Each call to next() returns an object with two properties:
        -> value → the current element
        -> done → a boolean (true if iteration is finished, else false).
 * */

//1. manual
function createIterator(array){
    let index = 0;
    return {
        next: function(){
            if(index < array.length){
                return {value:array[index++],done : false}
            }else{
                return {value: undefined, done : true}
            }
        }
    }
};
let nums = [20,30,40,50,60];
let iterator = createIterator(nums);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


//2. we have built in iterators in JS
let arr = [ 1,2,3,4,5];
let it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());


//3.for...of loop (uses iterator internally)
let str = "JAVA SCRIPT";
for(let item of str){
    console.log(item);
}


/**imp points
    Iterator = object with next() method.

    done tells if iteration is complete.

    Built-in iterables (array, string, map, set) already have iterators.

    for..of and spread syntax (...) use iterators internally.
*/
