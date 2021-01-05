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
