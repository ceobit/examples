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