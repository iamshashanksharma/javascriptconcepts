// variable is the named storage for data
// real life analogy : variable is just like a named box in which data is kept 

let message; // here message variable is created
message = "Hello";  // here string "Hello" is kept in the storage area named as message 
console.log(message); // prints what is inside the message variable name 
message = "world";   // Here the value is changed in the variable 
console.log(message); //new value prints world

// copying one variable data to another
let text = "Hello world";
let copy;
copy = text;
console.log(text); // "Hello world"

//variable naming rules 
// 1) variable should only contain letters , digits , $, _ 
// 2) The first character should not be number

let $ = 1;   // valid variable name 
let _ = 2;   // valid variable name 
console.log($ + _) ; // 3

/* let 1push = 1; // invalid variable name 
console.log(1push); */

// Reserved words like let , class , return should not be used as variable name 

// constants

const date = "10.09.2000"; 
// date = "20.10.2000"; // cannot be changed as it is const
console.log(date);