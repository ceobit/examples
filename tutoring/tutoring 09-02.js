const myAge = 50;

const print10 = () => {
  console.log(`I'm 10 years old`);
}

const print30 = () => {
  console.log(`I'm 30 years old`);
}

const print50 = () => {
  console.log(`I'm 50 years old`);
}

switch (myAge) {
  case 10:
    print10();
    break;
  case 30:
    print30();
    break;
  case 50:
    print50();
    break;
  default:
    console.log('You are old');
}


const obj = {
  10: print10,
  30: print30,
  50: print50
}


obj[myAge] && obj[myAge]();  // if obj[myAge] is true then execute obj['10']()
obj[myAge] || obj['10'](); // if obj[myAge] if false then execute obj['10']()


obj[myAge]() // print50()


const nameOfCity = str => {
  const city = str.toLowerCase();
  return (city.startsWith('los') || city.startsWith('new')) && str;
};

console.log(nameOfCity('Los Angeles'));
console.log(nameOfCity('New York'));
console.log(nameOfCity('Berlin'));
console.log(nameOfCity('Moscow'));
console.log(nameOfCity('los Angeles'));


const arr = ['Moscow', 'Berlin', 'Paris'];
console.log(arr[0].slice(0, 1));

//return [].reduce()
//const newVar = [].reduce()

//[].reduce()    [] =>  0 {} []
//[].map()       [, , ,] => [, , ,]
//[].filter()    [, , ,] => [, ,]
//[].find()      [, , ,]  => value
//[].forEach()   [, , ,] => console.log(,,,) str = += el

const obj1 = {
  key1: ['Hadi', 'Nancy', 'Olga'],
  key2: ['Vivi', 'Angelos', 'Roman']
}

const names = ['Leo', 'Angelos'];

let result = '';
console.log(Object.values(obj1));
for (let i = 0; i <= names.length; i++) {
  result = [].concat(...Object.values(obj1)).includes(names[i]) ? names[i] : 'OTHER NAME';
  console.log(result)
}


//  **Seasons** Create a function that accepts a text from user and check if the user has entered a month name, if so print out that month and in which season it is.
// // I will be nice again to you and offer the arrays :wink:
const months = [
  "december",
  "january",
  "february",
  "march",
  "april",
  "may",
  "jun",
  "july",
  "august",
  "september",
  "october",
  "november",
];


// SPECIAL FOR ANGELOS

//   const seasons = ["Winter", "Spring", "Summer", "Autumn"];
// Examples :
// > monthCheck("I love Jun"); -> Jun is in Summer
// > monthCheck("We need Kartoffel"); -> I couldn’t find any month in your text, sorry try again
const monthCheck = stringi => {

  const newStringi = stringi
  .toLowerCase()
  .split(" ")
  .filter((month) => months.includes(month))
  .join();

  const seasonsObj = {
    spring: ["march", "april", "may"],
    summer: ["jun", "july", "august"],
    autumn: ["september", "october", "november"],
    winter: ["december", "january", "february"],
  };

  for (let [key, value] of Object.entries(seasonsObj)) {
     if (value.includes(newStringi)) {
       return key;
     }
  }
  return 'Not found'
};
console.log(monthCheck("I love Jun"));
console.log(monthCheck("I hate february"));
console.log(monthCheck("I hate november"));
console.log(monthCheck("I hate april"));
console.log(monthCheck("I hate October"));
console.log(monthCheck("I hate february"));
console.log(monthCheck("We need Kartoffel"));
