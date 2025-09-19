/**A callback is simply a function passed as an argument to another function,
 *    which is then executed later inside that function*/
function greet(name, callback){
    console.log("Hello "+ name);
    callback();
}
function goodBye(){
    console.log("good bye !");
}
greet("Akhila", goodBye);
//sayBye is the callback function.
//greet takes a function as an argument and executes it.

//2.example
function myfunc(value){
    value()
}
myfunc(function callback(call){
    console.log("this is call back function");
    return call;
})

//3. Anonymous Callback
greet("siri", function(){
    console.log("anonymous");
})

//Callbacks with Asynchronous Code

//JavaScript is single-threaded, but we often need to do things like waiting for a file to load,
//  making API requests, or handling events.Callbacks help here.
