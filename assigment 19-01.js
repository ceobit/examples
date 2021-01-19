// AEIOU:
//   Vowels. Create a function that takes a string in its parameters and counts the number
//   of vowels (i.e. in English, “a, e, i, o, u”) in the string.
//   i.e. findVowels(“this is a string”)

// first way
// const findVowels = str => {
//   const vowels = /[aeiou]/;
//   return str.split(vowels).length - 1;
// }
//
// console.log(findVowels('this is a string'));

//second way
const findVowels = str => {
  const vowels = ['a','e','i','o','u'];
  const arrayFromStr = str.split('');
  let count = 0;
  arrayFromStr.forEach(el => vowels.indexOf(el) >= 0 ? count++ : null)
  return count;
}

console.log(findVowels('this is a string'));

// No Duplicates!
//   A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.
//   Create a program which transforms an array into a set of unique values. See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
//   [1, 6, 6, 9, 9] ➞ [1, 6, 9]
//   [2, 2, 2, 2, 2, 2] ➞ [2]
//   [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]

//first way
const unique = arr => {
  return [...new Set(arr)];
}

console.log(unique([1, 4, 4, 7, 7, 7]));

//second way
const unique2 = arr => {
  return arr.reduce((uniq, item) =>
    uniq.includes(item) ? uniq : [...uniq, item], []);
}

console.log(unique2([1, 4, 4, 7, 7, 7]));

