
/*
* 1. Declare a variable with the value of “I can walk in the park all day!“. Print the word “park” to the console.
 2. Declare a variable with the value of “Hello World”. Covert the value to upper case and print the converted value to the console.
 3. Declare another variable with the value of “Earthlings”. Convert the value to lower case and print the converted value to the console.
 4. Declare a variable with the value “JavaScript”. Print the the characters “aSc” to the console using the substring() method.
 5. Check if the sentence “nice shoes” contains the letter l.
 6. Create a new string from a given string with the first character of the given string added at the front and back. eg. of output: JavaScript => JJavaScriptJ.
 * */

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
