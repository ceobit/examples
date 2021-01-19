// AEIOU:
//   Vowels. Create a function that takes a string in its parameters and counts the number
//   of vowels (i.e. in English, “a, e, i, o, u”) in the string.
//   i.e. findVowels(“this is a string”)

const findVowels = str => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const arr = str.split('');
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (arr[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count;
}

console.log(findVowels('this is a striing'));

const findVowels2 = str => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const arr = str.split('');
  let count = 0;
  for (let i = 0; i < arr.length; i++){
    // if (vowels.includes(arr[i])) { //first way
    //   count++
    // }
    if (vowels.indexOf(arr[i]) >= 0) { //second way
      count++
    }
  }
  return count;
}

console.log(findVowels2('this is a striing'));

// No Duplicates!
//   A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.
//   Create a program which transforms an array into a set of unique values. See the examples below. Example:
// [1, 4, 4, 7, 7, 7] ➞ [1, 4, 7]
//   [1, 6, 6, 9, 9] ➞ [1, 6, 9]
//   [2, 2, 2, 2, 2, 2] ➞ [2]
//   [5, 10, 15, 20, 25] ➞ [5, 10, 15, 20, 25]

const unique = arr => {
  const uniqueArr = [];
  for (let i = 0; i<arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

console.log(unique([1, 4, 4, 7, 7, 7]));

// Dictionary. Create a function that takes an initial string and an array of words, and returns a
// filtered array of the words that start with the same letters as the initial string.
//   Notes:
// If none of the words match, return an empty array.
//   Keep the filtered array in the same relative order as the original array of words.
//   Examples:
// dictionary(“bu”, [“button”, “breakfast”, “border”]) ➞ [“button”]
// dictionary(“tri”, [“triplet”, “tries”, “trip”, “piano”, “tree”]) ➞ [“triplet”, “tries”, trip”]
// dictionary(“beau”, [“pastry”, “delicious”, “name”, “boring”]) ➞ []

const dictionary = (str, arr) => {

  const auxArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(str)) {
      auxArr.push(arr[i]);
    }
  }
  return auxArr;
}

console.log(dictionary('ord', ['button', 'breakfast', 'border']));