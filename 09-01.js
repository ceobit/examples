function print (el) {
  console.log(el);
}

// Task 2
// Declare a variable with the value of a sentence bigger than 5 words. Create a function that will print on the console specific words of the sentence:
//   a- The first word;
// b- The last word;
// c- All the words execpt the last one;
// d- Every other word of your sentence.

function handleSentence(template) {
  const wordArray = template.split(' ');
  print(wordArray[0]); //The first word
  print(wordArray[wordArray.length - 1]); //The last word
  print(wordArray.filter((_, index) => index < wordArray.length - 1).join(' ')); //All the words execpt the last one
  print(wordArray.join(' ')); //Every other word of your sentence

}

const template = 'Declare a variable with the value';
handleSentence(template);


// Task 3
// Declare a variable with the value of "It is niCe to pRaCtIcE my JavaScript SKILLS". Then do the following tasks:
// a- Convert it all to upper case;
// b- convert all but the first and last word to upper case;
// c- convert only the first letter of every word to upper case;
// d- convert all the words to lowercase.

const template2 = 'It is niCe to pRaCtIcE my JavaScript SKILLS';
print(template2.toUpperCase()); // Convert it all to upper case

const wordArray2 = template2.split(' ');
print(wordArray2[0].toUpperCase()); // convert all but the first to upper case;
print(wordArray2[wordArray2.length -1].toUpperCase()); // convert all but the last word to upper case;
print(wordArray2.map(el => (el[0].toUpperCase() + el.slice(1))).join(' ')); // convert only the first letter of every word to upper case;
print(template2.toLowerCase()); // convert all the words to lowercase.
