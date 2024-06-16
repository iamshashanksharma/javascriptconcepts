// syntax for arrays is let arr = [];

let fruits = ["apple", 'mango', 'pear'];
console.log(fruits[0]);   // Apple
console.log(fruits[1]);   // Mango
console.log(fruits[2]);   // Pear

// replace :- 

fruits[2] = "Strawberry";
console.log(fruits);
// total count of element in an array is length 

console.log(fruits.length);   // highest index of an array +1 ;

// At :- get last element with 'at'

let delFruits = ["apple", "orange", "plum"];
console.log(delFruits[delFruits.length -1]);  // Plum 

// same thing can be done with "at"
console.log(delFruits.at(-1));

// Methods : 1) push /pop , 2) shift / unshift 

/*
Push : - appends the element at the last 
shift :- get an element from the beginning so that second element becomes first 

        Shift <--- [array] <---- Push
        unshift ---> [array] ----> pop 
*/

let vegetables = ["potato", 'onion', 'beans'];
vegetables.pop();
console.log(vegetables); // [potato , onion]
vegetables.push("ladyfinger");
console.log(vegetables);  // [potato , onion , ladyfinger]
vegetables.shift();
console.log(vegetables); // [onion,ladyfinger]
vegetables.unshift("brocolli");
console.log(vegetables); // [brocolli , onion, ladyfinger]
