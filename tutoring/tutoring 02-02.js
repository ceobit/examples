// object

const obj = {}; // 1 way

// const obj1 = new Object(); //2 way

const obj1 = {
  name: 'Daria',
  age: 11,
  colors: {
    name: 'red'
  }
}

obj.name2 = 'Sofia';
obj.age = 3;
obj.city = 'Hamburg';


console.log(obj);
console.log(obj1);

console.log(obj1.name);
console.log(obj1['name']);

const keys = Object.keys(obj);

const [name, age, someElse] = Object.keys(obj)
console.log(name);
console.log(age);
console.log(someElse);

const [first, second, third] = [[0,1], 1, 2];

console.log(first[1]);
console.log(second);
console.log(third);

//const fullObjects = Object.assign(obj1, obj);// forget
//const fullObjects = {...obj, obj1};

const fullObjects = Object.assign({},  obj1);

console.log(fullObjects);
fullObjects.city = 'Berlin';
console.log(fullObjects);
console.log(obj);

// const arr = Object.entries(fullObjects);
//
// console.log(arr);
//
// for (let [a, b] of arr) {
//   console.log(`${a}: ${b}`);
// }






// const programming = {
//
//   languages: ["JavaScript", "Python", "Ruby"],
//
//   isChallenging: true,
//
//   isRewarding: true,
//
//   difficulty: 8,
//
//   jokes:
//
//     "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
//
//   // print: function() {
//   //   console.log(this.languages);
//   // }
// };
// //
//
// programming.newKey = 100500;
//
// console.log(programming);
//
//
//  programming.print = function  () {
//    console.log(this.languages);
//  };
//
// programming.print();
//
//
