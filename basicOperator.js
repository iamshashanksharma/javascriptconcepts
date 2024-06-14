/*
Terms to remember :- 

operand : --- in what operators are applied to  5 * 2 -- left operand 5 and right operand 2

operator --- unary ---> single operand  let x = 1 ; x = -x ; x // -1 
             binary ----> two operand let x = 1 , y = 3; y-x // 2


 a % b // remainder
 a**b // a pow b
 4 ** (1/2)  // 4 pow 1/2 or square root result - 2            
 8 ** (1/3)  //  2
*/ 

// string concatenation with binary + 

let s = "my" + "string";
console.log(s);

// if any of the operand is string then the other is converted to string too

console.log("1" + 2); // "12"
console.log(2 + '1'); // "21"
console.log(2+2+"1"); // "41"
console.log("1"+2+2); // "122"

// binary + operator that supports string concatenation other operator converted to number

console.log(6 - "2")  //4
console.log("6"/2)  //3