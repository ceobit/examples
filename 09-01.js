// Create a function that can print any parameters that you give it.

function print (el) {
  console.log(el);
}

// Task 2
// Declare a variable with the value of a sentence bigger than 5 words. Create a function that will print on the console specific words of the sentence:
//   a- The first word;
// b- The last word;
// c- All the words execpt the last one;
// d- Every other word of your sentence.

function handleSentence(template, num) {
  // [1, 6, 8,0, '567', {}, [], ] - it is array

  const wordArray = template.split(' '); // from string to array
  console.log(wordArray);

  print(wordArray[0]); //The first word
  print(wordArray[wordArray.length - 1]); //The last word
  print(wordArray.filter((_, index) => index < wordArray.length - 1).join(' ')); //All the words execpt the last one
  print(wordArray.filter((el, index) => (index+1) % num === 0).join(' '));

}
//
const template = 'Hi, my name is Vivi, i am from Germany?';
handleSentence(template, 3);

// Task 3
// Declare a variable with the value of "It is niCe to pRaCtIcE my JavaScript SKILLS". Then do the following tasks:
// a- Convert it all to upper case;
// b- convert all but the first and last word to upper case;
// c- convert only the first letter of every word to upper case;
// d- convert all the words to lowercase.

const template2 = 'It is niCe to pRaCtIcE my JavaScript skills';
print(template2.toUpperCase()); // Convert it all to upper case
//
const wordArray2 = template2.split(' '); // from string to array
print(wordArray2);
print(wordArray2[0]+' '+wordArray2.filter((el, i) => i > 0).join(' ').toUpperCase());// convert all but the first to upper case
print(wordArray2[0]+' '
  + wordArray2.filter((el, i) => i > 0 && i < wordArray2.length -1).join(' ').toUpperCase()
  +' '+wordArray2[wordArray2.length - 1]);// convert all but the first and last word to upper case


// example loop
for (let index = 0; index < wordArray2.length; index = index + 1) {
  console.log(`word is: ${wordArray2[index]} index = ${index}`);
}

// loop
const charIndex = 0;
for (let i = 0; i < wordArray2.length; i = i + 1) {
  console.log(`first letter is: ${wordArray2[i][charIndex].toUpperCase()}${wordArray2[i].slice(1)}`);
}

// same solution, only other way
print(wordArray2.map(el => (el[0].toUpperCase() + el.slice(1))).join(' ')); // convert only the first letter of every word to upper case;

print(template2.toLowerCase()); // convert all the words to lowercase.
