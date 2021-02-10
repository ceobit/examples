// Scrabble. Write a program that, given an array
// of scrabble tiles, counts the maximum score that a player
// can earn from the tiles in their hand. Example:
//  [ { tile: “N”, score: 1 },
//    { tile: “K”, score: 5 },
//    { tile: “Z”, score: 10 },
//    { tile: “X”, score: 8 },
//    { tile: “D”, score: 2 },
//    { tile: “A”, score: 1 },
//    { tile: “E”, score: 1 } ]

const scores = [
  {tile: 'N', score: 1},
  {tile: 'K', score: 5},
  {tile: 'Z', score: 10},
  {tile: 'X', score: 8},
  {tile: 'D', score: 2},
  {tile: 'A', score: 1},
  {tile: 'E', score: 1},
];

const scrabble = arr => arr.map(el => el.score).reduce((acc, cur) => acc + cur, 0);

console.log(scrabble(scores));

// 4. Switch Keys and Values. Create a function to get a copy of an object.
// The copy must switch the keys and values.
// Example:
// let person = {
//   name: “John”,
//   job: “teacher”
// }
// Expected Output:
// {“John”: name, “teacher”: job}

let person = {
  name: 'John',
  job: 'teacher'
}

const copyObj = obj => {
  return Object.entries(obj).reduce((acc, [value,key]) => {
    acc[key] = value;
    return acc;
  }, {})
}

console.log(copyObj(person));



// 5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.
// Examples:
// { a: 1, b: 2, c: 3 } ➞ [[“a”, “b”, “c”], [1, 2, 3]]
// {key: true} ➞ [[“key”], [true]]

const obj =  { a: 1, b: 2, c: 3 }
const keyValues = obj => {
  return [].concat([Object.keys(obj)],[Object.values(obj)]);
}

console.log(keyValues(obj));



const car = {
  brandModel: 'Audi',
  modelYear: '2021',
  priseVitVat: 20,
  colors: ['red', 'black', 'white'],
};

newObject = {};
Object.assign(newObject, car);
console.log(newObject);

const newCloneSpread = {...car};

console.log(newCloneSpread);

newCloneSpread.brandModel = 'BMW';
newCloneSpread.colors[0] = 'orange'; //problem, I don't want modified

console.log(car);

//Recursion
const factorial = num => {
  if (num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
};
console.log(factorial(7));

// Fibo   1 1 2 3 5 8 13 21

const fibo = num => {
  if (num <= 1) {
    return num;
  }
  return fibo(num - 2) + fibo(num - 1);
};

console.log(fibo(6));

function deepCopy(obj) {
  if (typeof obj === 'object') {
    return Object.keys(obj).
      map(key => ({[key]: deepCopy(obj[key])})).
      reduce((acc, cur) => Object.assign(acc, cur), {});
  } else if (Array.isArray(obj)) {
    return obj.map(deepCopy);
  }
  return obj;
}

const objObj = deepCopy(car);
console.log(objObj);

// objObj.color[0] = 'yellow';
//
// console.log(car);
