class Cars {
  constructor(model, color, year) {
    // 1 way
    // this.model = model;
    // this.color = color;
    // this.color = color;
    // this.color = color;
    // this.color = color;
    // this.color = color;
    // this.color = color;
    // this.color = color;
    // this.color = color;

    //2 way
    Object.assign(this, {model, color, year});
  }

  get printModel() {
    console.log(`${this.model} ${this.color} ${this.year}`);
  }

  set printModel(obj) {
    //1 way string
    // const arr = str.split(', ');
    // this.model = arr[0];
    // this.color = arr[1];
    // this.color = arr[1];
    // this.color = arr[1];
    // this.color = arr[1];
    // this.color = arr[1];

    //2 way
    Object.assign(this, {...obj});
  }

  print() {
    console.log(`${this.model} ${this.color} ${this.year}`);
  }
}

const bmw = new Cars('BMW', 'RED', 2019);
bmw.printModel;
// bmw.printModel = 'AUDI, BLACK';
bmw.printModel = {model: 'AUDI', color: 'BLACK', year: 2020};
bmw.print();

//API

// getWeather(day = today, city = Hamburg)
// setWeather = {day: tomorrow, city: Berlin}

// sendInfo
// getInfo

//Info(name) = sendInfo
//Info = getInfo

drinks = [
  {name: 'tomato', price: 5},
  {name: 'lemonade', price: 50},
  {name: 'lime', price: 10},
  {name: 'banana', price: 40},
];

// function sortDrinkByPrice(drinks) {
//   return drinks.sort((a, b) => a.price - b.price);
// }

// console.log(sortDrinkByPrice(drinks));

function sortDrinkByPrice1(drinks) {


  return drinks.map((el, i) => {
    if (i < drinks.length-1) {
      return el.price > drinks[i+1].price ? drinks[i + 1] : el;  //el = drinks[i]
    }
  });
}

console.log(sortDrinkByPrice1(drinks));



function concat(...args) {
 //return [].concat(...args);
  console.log(args.flat());
}

concat([1, 2, 3], [4, 5], [6, 7])// ➞ [1, 2, 3, 4, 5, 6, 7]
//
// concat([1], [2], [3], [4], [5], [6], [7])// ➞ [1, 2, 3, 4, 5, 6, 7]
//
// concat([1, 2], [3, 4]) //➞ [1, 2, 3, 4]
//
// concat([4, 4, 4, 4, 4])// ➞ [4, 4, 4, 4, 4]

function getLength(arr) {
  //
  // const hasNested = arr.filter(el => Array.isArray(el));
  //
  // if (hasNested.length === 0) {
  //   return arr.length;
  // }
  // return getLength(arr.flat());

  return arr.flat(Infinity).length;
}

console.log(getLength([1, [2, 3]])); //➞ 3
//
console.log(getLength([1, [2, [3, 4]]])) // -> 4;
//
//
// console.log(getLength([1, [2, [3, [4, [5, 6]]]]])) //➞ 6
//
// console.log(getLength([1, [2], 1, [2], 1])) //➞ 5

// map
//1) return other array
//2) const arr = [1,2,3].length = 3 then const newArr = arr.map((el) => {});   newArr.length = 3
//3)

const arr = [1, 2, 3];

const print = (num, index) => {
  console.log(`${num} has index ${index}`);
}

arr.forEach(print);

const hallo = () => {
  const name = 'Peter';
  printName(name);
}

const printName = name => {
  console.log(name);
}

hallo();

// const inc = el => {
//   return el + 1;
// }
//
// const newArr = arr.map(inc);
//
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   // newArr.push(arr[i] + 1);
//   console.log(arr[i]);
// }

//console.log(newArr);

function countTrue(arr) {
  if (arr.length === 0) {
    return 0;
  }

  // return arr.reduce((acc, cur) => {
  //   cur === true ? acc++ : 0
  //   return acc;
  // }, 0);

  return arr.filter(el => el).length;

}

console.log(countTrue([true, false, false, true, false]));
// ➞ 2
//
console.log(countTrue([false, false, false, false])) //➞ 0
//
// countTrue([]) //➞ 0

console.log('tuckIn');
function tuckIn(arr1, arr2) {
  console.log([arr1[0], ...arr2, arr1[1]]);
}

tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])// ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

tuckIn([15,150], [45, 75, 35])// ➞ [15, 45, 75, 35, 150]

tuckIn([[1, 2], [5, 6]], [[3, 4]]) //➞ [[1, 2], [3, 4], [5, 6]]

function freeShipping(order) {
 return  Object.values(order).reduce((acc, cur) => acc + cur) > 50
}

console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }));
console.log(freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }) );


freeShipping({ "Flatscreen TV": 399.99 }) //➞ true

freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }) //➞ true


class Rectangle {
  constructor(sideA, sideB) {
    this.sideA = sideA
    this.sideB = sideB
  }
  getArea(){return this.sideA*this.sideB}
  getPerimeter(){return (this.sideA + this.sideB) *2}
}


class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return 3.14 * this.radius * this.radius;
  }

  getPerimeter() {
    return 2 * 3.14 * this.radius;
  }
}


// unquote and use run to test these cases:

let q = new Circle(4.44);
console.log(q.getArea());
console.log(q.getPerimeter());

// Binary converter, convert any given number to binary.
//   Bounce : your code should be using one line only
// Example :
//   20 -> 10100
// 10-> 1010
// 44-> 101100
const num = 20;
console.log(num.toString(2));
