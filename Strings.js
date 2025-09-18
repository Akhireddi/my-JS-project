/**String in JS is a sequence of characters enclosed in single quotes,double quotes"" and `` backticks
 */
//ways to declare a string
let str = "Hello";
let str1 = 'World';
let str2 = `hi there`;

//String Features
//1. stringa are immutale,they annot be changed if once created ,But can be reassigned
//2.indexing : characters can be accessed by using indexes.
//length : number of characters in a string (includes spaces).

let name = 'Java script';
console.log(name.length);
console.log(name[0]);

//Common string methods
let word = "Hello this is Akhila";

//case conversion
console.log(word.toUpperCase()); // "HELLO JAVASCRIPT"
console.log(word.toLowerCase()); // "hello javascript"

// Searching
console.log(word.indexOf("this")); 
console.log(word.includes("Hello")); 

// Extracting parts
console.log(word.slice(0, 5));   
console.log(word.substring(6, 10)); 

// Replacing
console.log(word.replace("this", "World this"));

// Splitting
console.log(word.split(" "));

// Trimming spaces
let spaced = "   Hi!   ";
console.log(spaced.trim()); 

// Repeating
console.log("Hi ".repeat(3));
