// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).
// Store Mark’s and John’s mass and height in variables.
//   Calculate both their BMIs and store their BMIs in variables.
//   Create a boolean variable containing information about whether Mark has a higher BMI than John.
//   Print a string to the console containing the variable from step 3 using string interpolation.
//   (e.g. “Is Mark’s BMI higher than John’s? Why yes, it’s [boolean], it is”).
// Create an if statement which prints the name and BMI of the person with the highest BMI.

const calcBMI = (mass, height) => {
  return mass / (height * height);
}

const heightMark = 1.80;
const heightJohn = 1.72;
const massMark = 89;
const massJohn = 90;

const BMIMark = Math.round(calcBMI(massMark, heightMark));
const BMIJohn = Math.round(calcBMI(massJohn, heightJohn));

const bool = BMIMark > BMIJohn;
console.log(`Is Mark’s BMI higher than John’s? Why yes, it’s ${bool}, it is`);
BMIMark > BMIJohn ? console.log(`Mark's BMI is highest ${BMIMark}`) : console.log(`John's BMI is highest ${BMIJohn}`);



// More conditions
// Make a variable for firstName and age and give each variable values.
// Create an if/else statement to check whether the person’s age is less than 13. If so, print “firstName is a child”.
// If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”.
// If the person’s age is equal to and more than 20 and less than 30, then print “firstName is a young adult”.
// If none of these conditions apply, print “firstName is a adult”.

const checkAge = (firstName, age) => {
  if (age <= 13) {
    console.log(`${firstName} is a child`);
  } else if (age > 13 && age <= 20) {
    console.log(`${firstName} is a teenager`);
  } else if (age > 20 && age <=30) {
    console.log(`${firstName} is a young adult`);
  } else {
    console.log(`${firstName} is a adult`);
  }
}

const firstName = 'Roman';
const age = 30;
checkAge(firstName, age);

// Capitalize.
//   Create a program that capitalizes the first letter of each element in an array of names. Examples:
// [“matt”, “sara”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]
// [“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
// [“Cynthia”, “Karen”, “Jane”, “Carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]

const capitalize = arr => {
  return arr.map(el => {
    return el[0].toUpperCase() + el.slice(1);
  });
}

console.log(capitalize(['matt', 'sara', 'lara']));

// City Names.
//   Create an array of city names. Loop through the array and add the city names to a string. Examples:
// [Berlin, Paris, Prague, Rome] ➞ expected output: “Berlin, Paris, Prague, Rome”.

const fromArrToStr = str => {
  return str.join(', ');
}
console.log(fromArrToStr(['Berlin', 'Paris', 'Prague', 'Rome']));

// Hello
// Create an array filled with your friends’ or family’s names. Loop over the array and greet each friend. Bonus: Print the indexes of each item in the array. Examples:
// [Maria, Mike, Paul, Doven] ➞ expected output: “Hello Maria! Hello Mike! Hello Paul! Hello Doven!”
// Bonus [Susan, Rezvane, Mark] ➞ expected bonus output: “Susan is at index 0 of my friends and family array, Rezvane is at index 1 of my friends and family array, Mark is at index 2 of my friends and family array”.
const greeting = arr => {
  let str = ''
  let str2 = '';
  arr.forEach((el, i) => {
    str +=`Hello ${el}! `;
    str2 +=`${el} is at index ${i} of my friends and family array, `;
  });
  console.log(str);
  console.log(str2);
}

greeting(['Maria', 'Mike', 'Paul', 'Doven']);

// Odds and Evens.
//   Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
// [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
//   [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]

const plusOrMinus = arr => {
  return arr.map(el => {
    return el % 2 === 0 ? el - 1 : el + 1;
  })
}

console.log(plusOrMinus([3, 5, 2, 4]));
console.log(plusOrMinus([6, 9, 10, 20]));