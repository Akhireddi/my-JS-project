//An object is a collection of key-value pairs in js, the key-value pairs are called properties and functions are called methods
//ways to create
//1.object literal : a literal means a fixed value written directly in the code
let person = {
    name : "akhi",
    age : 22,
    isStudent : true,
    greet: function(){
        console.log("Hello, " + this.name);//here this refers to the current object
    }
};
console.log(person.name);
person.greet();

//2.using new object
let car = new Object();
car.brand = "tesla";
car.model = "3";
console.log(car);

//3.constructor function
function Bike(name, cost){
    this.name = name;
    this.cost = cost;
}
let user = new Bike("Akhila", 22000);
console.log(user);

//Accessing object properties
let Student = {
    name : "Reddy",
    class : "LKG"
};
console.log(Student.name);
console.log(Student.class);

//Adding/updating/deleting
Student.age = "22";//add
Student.name = "Akhila";//update
delete Student.class;//delete
console.log(Student);

//Looping through objects
let obj = {
    a : "fruit",
    b : "flower",
    c : "basket"
};
for (let key in obj){
    console.log(key, obj[key]);
}
console.log(Object.keys(obj));//refres to keys in the property
console.log(Object.values(obj));//refers to values in the props

console.log(Object.entries(obj));//refres to the properties
