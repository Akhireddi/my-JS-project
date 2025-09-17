//conditional statements lets u execute different blocks of code depending on whether a condition is true or false
//they doesnt return values.instead they control flow if execution

//1.if
let age = 25;
if(age >=18){
    console.log("you are adult")
}

//2.if else
let score = 22;
if(score >= 18){
    console.log("pass");
}else{
    console.log(fail);
}

//3.if...else if.. else
let marks = 20;
if(marks >=90){
    console.log("A+");
}else if(marks >= 80){
    console.log("B+");
}else if(marks >= 75){
    console.log("c+");
}else{
    console.log("fail")
}

//4.switch
let food = 3 ;
switch(food){
    case 1 : console.log("serve bf");
    break;
    case 2 : console.log("serve lunch");
    break;
    case 3 : console.log("serve dnr");
    break;
    default: console.log(invalid);
}
