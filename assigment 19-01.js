// AEIOU:
//   Vowels. Create a function that takes a string in its parameters and counts the number
//   of vowels (i.e. in English, “a, e, i, o, u”) in the string.
//   i.e. findVowels(“this is a string”)

const findVowels = str => {
  const vowels = /[aeiou]/;
  return str.split(vowels).length - 1;
}

console.log(findVowels('this is a string'));