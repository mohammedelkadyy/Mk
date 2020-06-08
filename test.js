// JavaScript

// Variable 
// let 
// var 
// const 

// let x define variable (once)
// x = 1 assignment

let n;
n = 5;

let x = 1;
x = 2;

let y = 3;

let sum = x + y;
sum = 9;

var z = 9; // var vs let?

const DIR = "Right";

// functions
// Is there a way to not right all these?
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   index:  0  1  2  3        ....     9
let x = array[0] + array[1] + array[2] /* + ... */ + array[9];

let sum = x + z;

let n1 = 0;
let n2 = 1;
let n3 = 2;
let n4 = 3;
let n5 = 4;
let n6 = 5;
let n7 = 6;
let n8 = 7;
let n9 = 8;
let n10 = 9;

let sum1 = int_sum(n1, n6); // function call
let sum2 = int_sum(n2, n7);
let sum3 = int_sum(n3, n8);
let sum4 = int_sum(n4, n9);
let sum4 = int_sum(n5, n10);

// Define function
// first, second parameters
function int_sum(first, second, name) {
    let sum = (first * 2) + second; // 7
    return name + sum; // S: 7
}

// use it (call)
let s = int_sum(1, 5, "Hamada: ")
console.log(s) // S: 7

// f(x) = 3x // define
// f(5) = 3*5 = 15 // use
// f(x, y) = 3x + 2y // define
// f(1, 5) = 1 * 3 + 2 * 5 = 13 // use

// Print
console.log(sum);

idx = 5
idx += 3 // idx = idx + 3
idx += 1
idx++ // >>> idx += 1 >>> idx = idx + 1

// Loops     
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let idx = 0; idx < array.length; idx++) // array.length = 10 (count)
{
    sum = sum + array[idx];
    // code ...
}

// > idx = 0 sum = 0
// idx = 0 sum = 1
// idx = 1 sum = 3
// idx = 2 sum = 6

// If conditions
