// AEIOU:
//   Vowels. Create a function that takes a string in its parameters and counts the number
//   of vowels (i.e. in English, “a, e, i, o, u”) in the string.
//   i.e. findVowels(“this is a string”)

// first way
const findVowels = str => {
  const vowels = /[aeiou]/; //regular expression
  return str.split(vowels).length - 1;
}

console.log(findVowels('this is a string'));

// second way
const findVowels1 = str => {
  const vowels = ['a','e','i','o','u'];
  const arrayFromStr = str.split('');
  let count = 0;
  arrayFromStr.forEach(el => vowels.indexOf(el) >= 0 ? count++ : null)
  return count;
}

console.log(findVowels1('this is a string'));

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

//
// Dictionary. Create a function that takes an initial string and an array of words, and returns a
// filtered array of the words that start with the same letters as the initial string.
//   Notes:
// If none of the words match, return an empty array.
//   Keep the filtered array in the same relative order as the original array of words.
//   Examples:
// dictionary(“bu”, [“button”, “breakfast”, “border”]) ➞ [“button”]
// dictionary(“tri”, [“triplet”, “tries”, “trip”, “piano”, “tree”]) ➞ [“triplet”, “tries”, trip”]
// dictionary(“beau”, [“pastry”, “delicious”, “name”, “boring”]) ➞ []
//
const dictionary = (str, arr) => {
  let matchArr = [];
  arr.forEach(el => el.includes(str) ? matchArr.push(el) : null);
  return matchArr;
}

console.log(dictionary('bu', ['button', 'breakfast', 'border']));
console.log(dictionary('tri', ['triplet', 'tries', 'trip', 'piano', 'tree']));
console.log(dictionary('beau', ['pastry', 'delicious', 'name', 'boring']));
