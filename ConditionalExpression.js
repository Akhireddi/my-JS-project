//ConditionalExpression : evaluates a condition and returns a value best ex:ternary operator
//ternary op : condition ? valueofTrue : valueofFalse
//cannot replace complex blocks easily
//readable for simple conditions
//1.
let height = 5.5;
let conclusion = (height > 5.3) ? "tall" : "Short" ;
console.log(conclusion);

//2.using in a function call
let marks = 69;
console.log(marks >= 50 ? "pass" : "fail");

//3.in a function using nested ternary
function match(){
    let score = 55;
    let decision = (score >=50) ? "win" :
                    (score >= 40) ? "draw" :
                    (score >= 30) ? "lose" : "nextmatch";
    console.log(decision);
}
match();
