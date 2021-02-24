//arr.every(callback(element[, index[, array]])[, thisArg])

// arr.every((el, index, arr) => {
//   arr[0]
// })

// let arr = [1, 2, 3, 4];
// arr.every( (elem, index,arr1) => { // find a reason to use third parameter here
//   arr1[index+1] -= 1;
//   arr1[0] = 100;
//   console.log(`[${arr1}][${index}] -> ${elem}`)
//   return elem < 2
// })
//
// console.log(arr);


//to check if an array has no unique values or only has same values:
const array1 = [1, 1, 3, 2];
const firstNum = array1[0];
console.log(array1.every((currentValue) => currentValue == firstNum));
// expected output: true
