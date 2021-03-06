console.log('--------Exercise 1-------');
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples:

// isLEQZero(3) ➞ false
// isLEQZero(0) ➞ true
// isLEQZero(-4) ➞ true
// isLEQZero(10) ➞ false

const isLEQZero = num => console.log(num <= 0);

isLEQZero(3);
isLEQZero(0);
isLEQZero(-4);
isLEQZero(10);

console.log('--------Exercise 2-------');

//  Dog Years. Create a function which calculates how old a dog is in dog years. The function should accept one argument that is the dog's age in human years.
//PS:  calculate the dog's age in dog years based on the calculation of 1 human year = 7 dog years.

// Example:

// dogAge(4) ➞ "Your doggy is 28 years old in dog years!"

const dogAge = HumanYear => {
  const dogYears = 7;
  console.log(HumanYear * dogYears);
};

dogAge(4);

console.log('--------Exercise 3-------');

//  A Lifetime Supply...
// You just won a lifetime supply of your favorite snack! The snack company needs to calculate what that actually means and how much they need to give you over your "lifetime". Create a function to help you calculate that amount for yourself to make sure you get the right amount. The function should accept two arguments: person age and the amount he will eats per day. The function should calculate the amount that will be consumed for the rest of your life given a constant maximum age of 100.

// Examples:

// calcLifetimeSupply(25, 2) ➞ "The snack company should provide you with 54,788 units, until you are a ripe old age of 100. Happy snacking!"

// calcLifetimeSupply(40, 3) ➞ "The snack company should provide you with 65,745 units, until you are a ripe old age of 100. Happy snacking!"

const calcLifetimeSupply = (age, amount) => {
  const maxAge = 100;
  const dayYear = 365;
  const result = (maxAge - age) * dayYear * amount;
  console.log(
    `The snack company should provide you with ${result} units, until you are a ripe old age of 100. Happy snacking!`);

};
calcLifetimeSupply(25, 2);
calcLifetimeSupply(40, 3);

console.log('--------Exercise 4-------');

//  Number to Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string.
// For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
//  here are the months array as a small help :)
//   let months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

// Examples:

// monthName(3) ➞ "March"
// monthName(12) ➞ "December"
// monthName(6) ➞ "June"

const monthName = monthNumber => {
  const monthArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'];
  console.log(monthArray[monthNumber - 1]);
};

monthName(3);
monthName(12);
monthName(6);

console.log('--------Exercise 5-------');
// Try to do it by yourself and don't look in yesterday solution. I trust you :)
// Count Occurrences.
// Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.

// Example:

// countOccurrences("this is a string", "i") ➞ 3

const countOccurrences = (str, chr) => str.split(chr).length - 1;
console.log(countOccurrences('this is a string', 'i'));

console.log('--------Exercise 6-------');

/*  draw this shapes in your console
First shape
T
TT
TTT
TTTT
Second shape
****
***
**
*
Third shape
1
12
123
1234
12345
Bounce: Forth shape
Be creative and show us your Artistic side
*/

const draw = () => {
  console.log('First shape');

  let picture1 = '';
  for (let i = 1; i <= 4; i++) {
    i > 1 ? picture1 += '\n' : null;
    for (let j = 1; j <= i; j++) {
      picture1 += 'T';
    }
  }
  console.log(picture1);

  console.log('Second shape');

  let picture2 = '';
  for (let i = 4; i >= 1; i--) {
    i < 4 ? picture2 += '\n' : null;
    for (let j = 1; j <= i; j++) {
      picture2 += '*';
    }
  }
  console.log(picture2);

  console.log('Third shape');
  let j = '';
  for (let i = 1; i <= 5; i++) {
    j += i + '';
    console.log(j);
  }

  console.log('Forth shape');

  let picture4 = '';
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
      picture4 += `ʕ•ᴥ•ʔ`;
    }
    picture4 += `\n`;
  }
  console.log(picture4);

};

// draw();

console.log('--------Exercise 7-------');

/*  Finish the following function so it outputs looks like this:
1
12
123
1234
12345
 const numbersCount = () => {
  for (let i = 0; i <= 5; i++) {
    // something
    for (let j = 1; j <= i; j++) {
        // something
    }
      // something
  }
};
numbersCount();
Bonus: create another function by doing some changes to the previous function in order to have the following outputs :
  12345
  1234
  123
  12
  1
*/

const numbersCount = () => {

  let str = '';
  for (let i = 0; i <= 5; i++) {
    str += `\n`;
    for (let j = 1; j <= i; j++) {
      str += j;
    }
  }
  console.log(str);

};
numbersCount();

const numbersCountReverse = () => {

  let str = '';
  for (let i = 5; i >= 0; i--) {
    str += `\n`;
    for (let j = 1; j <= i; j++) {
      str += j;
    }
  }
  console.log(str);
};
numbersCountReverse();

console.log('--------Exercise 8-------');

/* create a function should that checks if a store contains a specific product in it's inventory.
for example:
let storeArr= ["milk", "eggs", "cheese", "butter"];
// try includes might help :)
// Examples
inventoryCheck("cheese") returns true
inventoryCheck( "ham") returns false
*/

const inventoryCheck = product => {
  let storeArr = ['milk', 'eggs', 'cheese', 'butter'];
  console.log(storeArr.includes(product));
};

inventoryCheck('cheese');
inventoryCheck('ham');

console.log('--------Exercise 9-------');
// Extra work :)
// create a repo for this app. we are coming later to it :)
// Create a program that generate a random password with the length of 30 character, every time you call the function should give you a different password

// Examples you will have other passwords for sure

// passwordGen()  ➞ Y3mI9x7bvPY86T?oM§hIbgh!MLwA77N
// passwordGen()  ➞ Oy$tkBGoo5fg§mO4AdV&Kh8XXZR4d7K
// passwordGen()  ➞ v0ZwDrn@hfI€kOKWH§k6kqub6zfpuyP
const passwordGen = () => {
  let text = '';
  const possible = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!№$%^&*~@#';

  for (let i = 0; i < 30; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  console.log(text);
};

passwordGen();
passwordGen();
passwordGen();

console.log('--------END of Exercise-------');

// const common = (a, b, c) => {
  // let sum = 0;
  // let indB, indC;
  // a.map((el) => {
  //   indB = b.indexOf(el);
  //   indC = c.indexOf(el);
  //   if (indB > -1 && indC > -1) {
  //     b.splice(indB,1);
  //     c.splice(indC,1);
  //     sum += el;
  //   }
  // })
  // return sum;

// let intersection = a.filter(x => {
//   return b.indexOf(x) > -1;
// })
//   console.log(intersection);
// };
//
// // common([1, 2, 3], [5, 3, 2], [7, 3, 2]);
// //  common([1,2,2,3],[5,3,2,2],[7,3,2,2]);
//  common([1,1,1,1],[1,1,1,0],[1,0,1,1]);



console.log('////////////////////////////////////');

// two ways of solving the drawing task
const drawing = () => {

  // First way
  let picture = '';
  for (let i = 1; i <= 4; i++) { // loop for each line
    i > 1 ? picture += '\n' : null; // add newline character after each line
    for (let j = 1; j <= i; j++) { //loop for each character
      picture += 'T';
    }
  }
  console.log(`${picture} \n`);

  // Second way
  let picture1 = 'T';
  for (let i = 1; i <= 4; i++) {
    console.log(picture1.repeat(i));
  }
}

drawing();


