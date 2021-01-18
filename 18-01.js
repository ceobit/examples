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