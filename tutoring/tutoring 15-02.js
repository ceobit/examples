//let printArray = n => [...Array(n)].map((_,b)=> 1 + b);

//console.log(printArray(5));

const printArray = num => [...Array(num + 1).keys()].slice(1);

console.log([...Array(5 + 1).keys()]);

const obj = {
  0: 'Elena',
  1: 'Steve',
};

Object.keys(obj);

console.log(typeof []);

const numArr = [5, 7, 9, 0, 6, 4, 2];
console.log([...numArr.entries()]);

const printArray7 = (n) => Array.from({length: n}, (_, i) => i + 1);
console.log(printArray7(5));

// 1 step '5555' - strings with length = 4 - it's source for new array
// 2 step using call back function (_, i) => i + 1) we modified '5555' to new array

//[...Array(n)].map((_, i) => i + 1)

// const arr = [];
//
// const arr1 = new Array(5);
//
// console.log(Array(5).fill(undefined));
// console.log([...Array(5)].length);
//
// console.log(arr1.fill(1));

// Examples
// simpleTimer(0) ➞ "00:00:00"
// simpleTimer(59) ➞ "00:00:59"
// simpleTimer(60) ➞ "00:01:00"
// simpleTimer(3599) ➞ "00:59:59"

//  hours = Math.floor(6000 / 3600) = 1
//  minutes  = (6000 / 3600) rest part

const hours = Math.floor(6015 / 3600);  //6000  1 hour
const minutes = 6000 % 3600 / 60;
const seconds = 6015 - (hours * 3600) - (minutes * 60);

const simpleTimer = seconds => {

  const hours = Math.floor(seconds / 3600);  //6000  1 hour
  const minutes = seconds % 3600 / 60;
  const restSeconds = seconds - (hours * 3600) - (minutes * 60);

  return `${hours}:${minutes}:${restSeconds}`;
};

console.log(simpleTimer(59));
console.log(simpleTimer(60));
console.log(simpleTimer(3599));
console.log(simpleTimer(7200));
// console.log(simpleTimer(359999));

const vowelCount = str => {
  const wordArr = str.toLowerCase().split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return wordArr.reduce((acc, cur) => {
    vowels.includes(cur) ? acc++ : acc;
    return acc;
  }, 0);
};

const vowelCount1 = str => {
  const wordArr = str.toLowerCase().split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let i = 0; i < wordArr.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      wordArr[i] === vowels[j] ? count++ : null
    }
  }
  return count;
};

console.log(vowelCount1('hello'));
console.log(vowelCount1('test'));
console.log(vowelCount1('fbw'));
console.log(vowelCount1('hEllo'));


const numArray = [17, 98, 5, 0, 678, 43, 55, 44, 34]
console.log(numArray.sort((a, b) => a - b));

const numbers = [1, 4, 9, 16];
function subtractTwo() {
  return numbers.map((el) => el - 2);
}

console.log(subtractTwo());