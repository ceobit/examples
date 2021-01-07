//1. Create two variables.
// One variable should contain a string value and
//the other should contain a number. Concatenate the string and the number.

//2. Check if the following numbers are even numbers.
// Use a ternary and if the number is even print 30 is even,
// else print that it is odd.
// 33, 40, 2,1,22

let str = 'JavaScript';
let num = 100500;
console.log(str+num);

const isEvenNumber = num => console.log(num % 2 === 0 ? `${num} is even` : `${num} is not even`);

isEvenNumber(33);
isEvenNumber(40);
isEvenNumber(2);
isEvenNumber(1);
isEvenNumber(22);

// Create a variable with the value of “123”. Convert it to a number.
// Create a variable with the value of “130.7". Convert it to a number.
// Declare a variable named isDog. If true, print ‘pat, pat’ and if not, print ‘find me a dog to pat!’


let num1 = parseInt('123'); // or let num1 = +'123';
console.log(num1);


let num2 = parseFloat('130.7'); // or let num2 = +'130.7';
console.log(num2);

let isDog;
console.log(isDog ? `pat, pat` : `find me a dog to pat!`);

// 1. Minimum and maximum
// a. Lowest Number
// Print out the lowest number between -1 and 4.
console.log(Math.min(-1, 2, 3, 4));
// b. Highest Number
// Print out the highest number between -1 and 4.
console.log(Math.max(-1, 2, 3, 4));
// 2. Rounding
// a. Round up
// Round up each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 43.342.
const roundUp = num => console.log(Math.ceil(num));
roundUp(3321.32321);
roundUp(326.76);
roundUp(76788.7);
roundUp(-9.78);
roundUp(43.342);
//   b. Round down
// Round down each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 28.329.
const roundDown = num => console.log(Math.floor(num));

roundDown(3321.32321);
roundDown(326.76);
roundDown(76788.7);
roundDown(-9.78);
roundDown(43.342);
//   Strings and Numbers
// 1. Concatenation.
//   Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
//   let introSentence = "Hi, my name is Nancy and I am";
// let age = 25;
// Expected Output:
//   "Hi, my name is Nancy and I am 25"
// In this case, what is the + operator doing? Comment your answer in the js file.
let introSentence = "Hi, my name is Nancy and I am";
let age = 25;
console.log(introSentence +' '+age); //adding a number and a string will return a string

// 2. Converting
// Create a variable with the value of “1005”. Convert it to a number.
//   Create a variable with the value of “10.05". Convert it to a number.
let str3 = '1005';
let num3 = +str3;
console.log(num3);

let str4 = '10.05';
let num4 = parseFloat(str4);
console.log(num4);

let JS = 'JavaScript';
console.log(JS.slice(-3));

