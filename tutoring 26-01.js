
const oddOrEven = (arr) => {
  let currentValue;
  for (let i = 0; i < arr.length; i++) {
    currentValue = arr[i];
    console.log(currentValue % 2);
    if (currentValue % 2) {
      // console.log(currentValue - 1);
    } else {
      // console.log(currentValue + 1);
    }
  }
};
oddOrEven([3, 5, 2, 4]);



// .filter
// - Getting an array with items that align with your condition:
// `Array.prototype.filter(<function>)`
// const names = ["Zain", "Nancy", "Olga", "Leonard", "Eduardo"];
// // const filteredArr = names.filter((name) => name.length > 4);
//
// const filteredArr = names.filter((name) => name[5] ); // is this the same as name.length > 4???
// console.log(filteredArr);




// const print = arr => {
//
//
//   const arr1 = [1,2];
//   const arr2 = [3,4];
//   const arr3 = [5,6];
//   console.log([...arr1, ...arr2, ...arr3]);
//
// const funct = (arr) =>

  // const name = arr[0];
  // const age = arr[1];
  // const address = arr[3];
  // console.log(`I'm ${age}, I live ${city}`);
// }

// print (['Roman', 30, 'Hamburg']);

// const max = (...numArr) => {
//   console.log(numArr);
//   console.log(Math.max(...numArr));
// }
//
// max(50, 80, 2);



// map is an array method!  contains/do 3 things
// 1) Return new array
// 2) Starts a loop on the original array
// 3) Call a function for each element of array

// const func = (el, index) => {
//   return el + 1;
// }
//
// const newArray = [1, 3, 6].map(func)
// console.log(newArray);

// const funct1 = arr => {
//   return arr.reduce((acc, curr) => {
//     return acc[curr]
//   }, [])
// }
//
// let a = 1
// for (let i = 0; i<2; i++) {
//   console.log(`a++ ${a++}`); // with a++
//   console.log(`a++ ${a}`);
// }
//
//
// let b = 1;
// console.log(`++b ${++b}`); // with ++b
//
// // Odds and Evens.
// // Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
// // [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// // [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]
// // using ...
// const oddOrEven = (...args) => {
//   return args.map((item) => (item % 2 === 0 ? ++item : --item));
// };
// console.log(oddOrEven(2, 4, 5, 6, 7));
// // using array
// const oddOrEven2 = (arr) => {
//   return arr.map((item) => (item % 2 === 0 ? ++item : --item));
// };
// console.log(oddOrEven2([2, 4, 5, 6, 3]));
//
// // sum -= 1
// // sum = sum - 1
// // sum += 2   ++sum
//
//




