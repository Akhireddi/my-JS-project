/** String interpolation means inserting variables or expressions directly inside a string
 * this is done using literals -> strings written with (``)
 * advantages -> no need for concatenation
 *            ->can embed variables,expressions and even function calls
 */
let name = "lily";
let age = 22;
let msg = `Hello, my name is ${name} and i am ${age } years old`;
console.log(msg);

//1.interpolation with expressions
let a = "fruit";
let b = "flower";
console.log(`this is a ${a} and that is a ${b}`);

//2.multi line string
let poem = `rain rain go away
come again another day
littile jonny wants to play`;
console.log(poem);

//3. function calls inside interpolation
function greet(name){
    return `hello ${name}`;
}
console.log(`${greet("akhila")}`);        

//So, string interpolation = using ${expression} inside backticks (``).
