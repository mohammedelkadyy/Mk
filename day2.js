let x; // define variable it's name x
x = 10; // assign 10 in variable x

// var seems like let but there's a difference
// prefer let

const z = 5; // define constant it's name z and asssign 5 in constant z (assignment will be allowed only once)

let m = x + z; // m = 15 // how js interpreter will work
// let m = x + z
// let m = 10 + 5
// let m = 15

function sum(o1, o2) {
    return o1 + o2;
}

m = sum(1, 2);
// sum(o1 = 1, o2 = 2)
// return 1 + 2
// return 3
// m = 3

for (let i = 1; i <= 100; i++) {
    console.log(i);
}
// 0
// 1
// 2

let arr = ['A', 'B', 'C'];

for (let i = 0; i < arr.length; i++) { // [1]initializer; [2|5|foreach-round]condition; [4|foreach-round]counter
    console.log(arr[i]); // [3|foreach-round]
}
// A
// B
// C

let o = 0;

// o equal 0: console.log("Accepted"); o = 1;
// else: console.log("Not Accepted"); o = 0;

if (o == 0) {
    console.log("Accepted");
    o = 1;
} else {
    console.log("Not Accepted");
    o = 0;
}

let result = "";
result = result + "A";
console.log(result); // "A"
result += "B";
// result = result + "B"
console.log(result); // "AB"


let fruits = ['Apple', 'Orange', 'Banana'];
// AppleOrangeBanana

// let array = ["Apple","Orange","Lemon"];
// let result = ""

// for(let i = 0; i < array.length; i++)
// {
//     // result=result+(array[i])
//     result += array[i]
// }

// console.log(result);

// 0
// -1
// -2
// -3
// -4
// -5

// only use for loop and console.log
for (let i = 0; i >= -5; i--) {
    console.log(i);
}

// let i = 0;
// let arr = ['a', 'b'];
// arr[i]


// x / y where x < y then x %(mod) y = x
// x / y where x dividable by y then x % y = 0
// x / y where x > y but no dividable by then ..

// from 1 to 10 print each number 
// 1 odd
// 2 even
// 3 odd
// 4 even


// loop 1 : 10 [done]
for (let i = 1; i <= 10; i++) {
    // if condition mod 2
    if (i % 2 == 0) { // even
        // console.log i even
        console.log(i + " even");
    } else { // odd
        // console.log i odd
        console.log(i + " odd");
    }
}

