/**Closures in JS is where an innerfunction has access to variable from its outer function.
 *       even after the outer function has finished executing
 * => in simple words a closure remembers the environment(variables,parameters,functions) where it was created
 */

//1.example
function Counter(){
   let Count = 5;
    function increment(){
        Count++;
        console.log(Count);
    }
    function decrement(){
        Count--;
        console.log(Count);
    }
    return {
        increment : increment,
        decrement : decrement
    }
}
let z = Counter();
z.increment();
z.increment();
z.increment();
z.increment();
z.decrement();
z.decrement();
z.decrement();

//2.hello name example
function Student(name){
let msg = "hello " + name ;
    function inner(){
        console.log(msg);
    }
    return inner;
}
let y = Student("Akhila");
y();

//3.OWN ATM example
function ATM(){
    let money = 10000;
    function Deposit(amt){
        money=money+amt;
        console.log(money);
    }
    function withdraw(amt){
        money=money-amt;
        console.log(money);
    }
    function CheckBalance(a){
        money=money;
        console.log(money);
    }
    return {
        Deposit : Deposit,
        withdraw : withdraw,
        CheckBalance : CheckBalance
    }
}
let a = ATM();
a.Deposit(2000);
a.withdraw(3000);
a.CheckBalance();
