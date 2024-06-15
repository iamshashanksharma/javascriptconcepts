/*
Global variable : - 
   when you create a variable out on open it is called global variable not in function , module , if statement
   in the browser , the global scope is window 

*/

// function scoping :- 
/*
const age  = 100;
function go()
{
    const hair  = "blonde";
}
go();
console.log(age); // 100
console.log(hair); // Reference error : hair is not defined 
*/


// Because variable made inside the function are not accessible outside until returned 

const age = 100;
function go()
{
    const age = 200;
    const hair = " blonde";
    console.log(age); // 200
    console.log(hair); // blonde
}

// block scope :
/*
function abc()
{
    let i = 1;
    if(i ==1)
    {
    const fname = "shashank";
    console.log(fname); // this works
    }
   // console.log(fname); // fname is not defined because const is block scope
}
abc();

*/

