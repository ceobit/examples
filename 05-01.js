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

const isEvenNumber = (num) => {
  let result = num % 2 === 0 ? '30' : num;
  console.log(result);
}

isEvenNumber(33);
isEvenNumber(40);
isEvenNumber(2);
isEvenNumber(1);
isEvenNumber(22);