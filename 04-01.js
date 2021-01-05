
/* TASK #1
 1. Declare a variable with the value of “I can walk in the park all day!“. Print the word “park” to the console.
 2. Declare a variable with the value of “Hello World”. Covert the value to upper case and print the converted value to the console.
 3. Declare another variable with the value of “Earthlings”. Convert the value to lower case and print the converted value to the console.
 4. Declare a variable with the value “JavaScript”. Print the the characters “aSc” to the console using the substring() method.
 5. Check if the sentence “nice shoes” contains the letter l.
 6. Create a new string from a given string with the first character of the given string added at the front and back. eg. of output: JavaScript => JJavaScriptJ.
*/

let text = 'I can walk in the park all day!';
console.log(text.slice(18, 22));

let text1 = 'Hello World';
console.log(text1.toUpperCase());

let text2 = 'Earthlings';
console.log(text2.toLowerCase());

let text3 = 'JavaScript';
console.log(text3.substring(3,6));

let text4 = 'nice shoes';
console.log(text4.includes('l'));

let text5 = text3.charAt(0) + text3 + text3.charAt(0);
console.log(text5);

/*TASK #2
  7. Create a new string from a given string, taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
// eg. of output: javascript => iptJavaScriptipt
  8. Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes “Java”.
  9. Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ
  10. Create 3 different variables about yourself using strings as values e.g. let firstName = “Maria”. Print the sentence to the console using string interpolation e.g. “My name is Maria. I live in Berlin and I am a teacher”.
  11. Declare a variable and assign the value “the quick brown fox” (all in lower case). Capitalize the first letter of that string. Print the result to the console.
*/

// 7
let subStr = text3.slice(-3);
let text7 = `${subStr}${text3}${subStr}`;
console.log(text7);

// 8
let loveJS = 'I love JavaScript';
let text8  = loveJS.toUpperCase();
console.log(text8);
console.log(text8.includes('Java'));

// 9
let firstChar = text3.slice(0, 1);
let lastChar = text3.slice(-1);
let restChars = text3.slice(1, -1);
console.log(`${lastChar}${restChars}${firstChar}`);

// 10
const name = 'Roman';
let city = 'Hamburg';
let profession = 'programmer';
console.log(`My name is ${name}. I live in ${city} and I am a ${profession}`);

// 11
let text11 = 'the quick brown fox';
let firstLetter = text11.slice(0, 1);
let restLetters = text11.slice(1);
console.log(`${firstLetter.toUpperCase()}${restLetters}`);

