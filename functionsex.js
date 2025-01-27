// function addToCart(){
//     alert("product is added to cart successfully");
//     document.body.style.background="red";
// }

//! without parameters

// function demo(){
//     console.log("function is executing.....");
// }
// demo();
// demo();

// ! function with parameters and arguments
//! let a = 10; // a=parameter , 10=arguments

// function  add(a,b){
//   console.log(a+b);
// }
// add(5,6);
// add(8,9);
// add(3,4);

// ! named function
// function test(){
//     console.log("named function is executing...");
// }
// test();

// ! anonymus function
// function(){

// }
// ();

//!function expression
// let a = 10;
// let x = function(){
//     console.log("anonymus is not executing but executing with variable");
// };
// // console.log(x);
// x();

//! IIFE
// (
//     function(){
//         console.log("IIFE");
//     }
// )();

// ! arrow function
// function demo (a) {
// console.log("hello");
// }
// demo();

// let x = ()=>console.log("Arrow function");
// x();

// let x = a => console.log(a);
// x(4);

// let x = _ => console.log("Arrow function");
// x(4);


// ! implicit returns and explicit returns.

// function test1(a,b){
//     console.log("Hello i am printing before return keyword");
//         return a+b;
//         console.log("Hello i am printing after return keyword");
// }
// console.log(test1(5,5));

// let x = (a,b) => {return a*b};
// console.log(x(5,5));

// let y = (a,b) => a+b;
// console.log(y(100,200));


// ! higher order function & callback function.
// function hof(a){ //! higher order function
//     return a();
// }
// let x = hof(function(){return "Callback function"});//! callback function
// console.log(x);


// let y = function(){return "Callback function"};
// console.log(y());

// let users = ["Manoj" , "Asif" ,"Varshith" ,"Sathish" , "Tanuja"];
// console.log(users);
// users.map(function(user){console.log(user)})

var a =10;
let b=45;
function x(){
    var user = "Vasanth";
    let company = "Google";
    const sal = 1234567890;
    console.log(user);
    console.log(company);
    console.log(sal);
    console.log(a , b);
}
x();