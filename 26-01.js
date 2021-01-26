// Write a function that it returns  “Two for me and one for you” when no arguments are passed
// e.g
// console.log(twofer("Fran")) ---> "Two for me and one for Fran"
// console.log(twofer()) ---> "Two for me and one for you"


console.log('1 task');
// 1 way
((name = 'you')=> {
  console.log(`Two for me and one for ${name}`);
})();

//2 way
const twofer = (name='you') => {
  console.log(`Two for me and one for ${name}`);
}

twofer('Fran');
twofer();

// Write a function  that it still calculates the power of a number even if the exp argument is not passed to it. The default exp should be set to 2.
// e.g
// console.log(exponent(3, 3)) ---> 27
// console.log(exponent(3)) ---> 9

console.log('2 task');
const exponent = (base, exp = 2) => {
  console.log(Math.pow(base, exp));
}
exponent(3,3);
exponent(3);

// Write a function that it returns the total amount of arguments passed to it.
//   e.g
// console.log(howManyArgs()) ---> 0
// console.log(howManyArgs(1, false, "hello")) ---> 3
// console.log(howManyArgs("better")) ---> 1

console.log('3 task');
const howManyArgs = (...args) => {
   console.log(args.length);
}
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
}

sum(1);
sum(1, 15);
sum(25, 25, 20);

console.log('4 task average');
const average = (...args) => {
  const average = args.reduce((acc, cur) => acc + cur, 0);
  console.log(average/args.length);
}

average(0);
average(1, 2);
average(1, 3, 6, 10);
average(12, 14, 16);