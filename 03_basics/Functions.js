//  here we discuss several way to define and use function

//traditional way using function keyword
function sum(a, b){
    return a+b
}
console.log(` the sum of number is ${sum(4,5)}`);


//function expression
multi = function(a,b){
    return a*b
}
console.log(`the multiplication is ${multi(3,4)}`);


//rest operator 
function rest(...n){           //  ... rest operator
    return n
}
console.log(rest(5));
console.log( `this is rest ${rest(5,6,7,8,9,8)}`);


//arrow function   // ()=>{}
const addTwo = (a,b)=>{
    return a+b
}
console.log(addTwo(8,9));
  

const mulTwo = (a,b)=> a*b   //implicit return
console.log(mulTwo(8,9));


//Immediately Invoked Function Expression (IIFE)
//  (function definition)()
(function hello(){
    console.log("it is IIFE");
})()



