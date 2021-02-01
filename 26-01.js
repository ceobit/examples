// Write a function that it returns  “Two for me and one for you” when no arguments are passed
// e.g
// console.log(twofer("Fran")) ---> "Two for me and one for Fran"
// console.log(twofer()) ---> "Two for me and one for you"

console.log('1 task');
// 1 way
((name = 'you') => {
  console.log(`Two for me and one for ${name}`);
})();

//2 way
const twofer = (name = 'you') => {
  console.log(`Two for me and one for ${name}`);
};

twofer('Fran');
twofer();

// Write a function  that it still calculates the power of a number even if the exp argument is not passed to it. The default exp should be set to 2.
// e.g
// console.log(exponent(3, 3)) ---> 27
// console.log(exponent(3)) ---> 9

console.log('2 task');
const exponent = (base, exp = 2) => {
  console.log(Math.pow(base, exp));
};

exponent(3, 3);
exponent(3);

// Write a function that it returns the total amount of arguments passed to it.
//   e.g
// console.log(howManyArgs()) ---> 0
// console.log(howManyArgs(1, false, "hello")) ---> 3
// console.log(howManyArgs("better")) ---> 1

console.log('3 task');
const howManyArgs = (...args) => {
  console.log(args.length);
};

howManyArgs();
howManyArgs(1, false, 'hello');
howManyArgs('better');

// Write a function which accepts any amount of numbers and return the sum of their addition
// e.g
// console.log(sum(1)) ---> 1
// console.log(sum(1, 15)) ---> 16
// console.log(sum(25, 25, 20)) ---> 70
// Bonus: Write a function which accepts any amount of numbers and returns the average.
//   e.g
// console.log(average(0)) ---> 0
// console.log(average(1, 2)) ---> 1.5
// console.log(average(1, 3, 6, 10)) ---> 5
// console.log(average(12, 14, 16)) ---> 14

console.log('4 task Sum');

const sum = (...args) => {
  const sum = args.reduce((acc, cur) => acc + cur, 0);
  console.log(sum);
};

sum(1);
sum(1, 15);
sum(25, 25, 20);

console.log('4 task average');
const average = (...args) => {
  const average = args.reduce((acc, cur) => acc + cur, 0);
  console.log(average / args.length);
};

average(0);
average(1, 2);
average(1, 3, 6, 10);
average(12, 14, 16);

// c4n y0u r34d th15? Create a function that takes a string as an argument
// and returns a coded (h4ck3r 5p34k) version of the string.
// NB: for your program to work properly, the function should replace
// all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.
// Examples:
// hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
// hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
// hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"

const hackerSpeak = str => {
  const arr = str.split('');
  return arr.map(el => {
      switch (el) {
        case 'a' :
          return '4'
        case 'e' :
          return '3'
        case 'i' :
          return '1'
        case 'o' :
          return '0'
        case 's' :
          return '5'
        default:
          return el
      }
  }).join('');
};

console.log(hackerSpeak('java script is fun'));

// Odds and Evens.
// Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
// [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]

// const OddsAndEven = arr => {
//   return arr.map(el => {
//     return el % 2 === 0 ? el - 1 : el + 1;
//   });
// };

const OddsAndEven = (...arr) => {
  // console.log(arr);
  return arr.map(el => {
    return el % 2 === 0 ? el - 1 : el + 1;
  });
};

console.log(OddsAndEven(3, 5, 2, 4));
console.log(OddsAndEven(6, 9, 10, 20));

// how many chr in a str(not case sens)
// howManyStr(“I like pizza”,“p”) -> 1

const howManyStr = (str, char) => {
  arr = str.toLowerCase().split('');
  return arr.reduce((acc, cur) => {
    cur === char ? acc += 1 : 0;
    return acc;
  }, 0);
};

console.log(howManyStr('I like pizza', 'i'));