/**JSON JSON stands for JavaScript Object Notation.
  => It is a lightweight data format used to store and exchange data between a server and a client (browser).
  => JSON is text-based (a string format).
  => It looks very similar to JavaScript objects, but it’s always written in double quotes and has stricter rules.
JSON is language-independent (can be used in Java, Python, C#, etc.), but it was inspired by JavaScript object syntax.
 */

//JS OBJECT
let obj = {
    name : "akhila",
    age : 22
} 

//JSON 
let PersonJSON = `{
    "name": "akhila",
    "age" : 22 
}`

//JSON has 2 built in functions
//1.Convert object => JSON stringify
let jsonstr = JSON.stringify(obj);
console.log(jsonstr);

//2.Convert JSON => object(parse)
let obj1 = JSON.parse(PersonJSON);
console.log(obj);

//3.reprsentation of an array of data
let Companies = `[
    {
        "name" : "TCS",
        "noOfEmployee" : 20000,
        "location" : "hyderabad"
    },
    {
        "name" : "cognizant",
        "noOfEmployee" : 15000,
        "location" : "hyderabad"
    },
    {
        "name" : "BHEL",
        "noOfEmployee" : 25000,
        "location" : "banglore"
    },
    {
        "name" : "ISRO",
        "noOfEmployee" : 200,
        "location" : "chennai"
    }
]`
console.log(JSON.parse(Companies));
