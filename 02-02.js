// Object yourPersonObj.
// Create an object named person2.
//  Loop through the object and print both the property
// and value of the object.

const person2 = {
  name: 'Sofia',
  age: 3,
  city: 'Hamburg',
};

for (const [key, value] of Object.entries(person2)) {
  console.log(`${key}: ${value}`);
}

// Create a function that returns an array of the properties of a javascript object.
const objProp = person2 => {
  return Object.entries(person2);
};

console.log(objProp(person2));

// Given the following object
// const student = {
//   firstName: "Zain",
//   lastName: "Oil",
//   class: 48 };
// Create a method that prints the following: "Zain Oil a student in class 48"

const student = {
  firstName: 'Zain',
  lastName: 'Oil',
  class: 48,
  print: function() {
    console.log(
      `${this.firstName} ${this.lastName} a student in class ${this.class}`);
  },
};

student.print();

// Get Values. Create a function that returns an array of all values of an object’s properties.
//   Examples:
// getObjectValues({
//   choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk"
// })
// Expected output:
//   ["tea", "coffee", "milk"]

const objChoice = {
  choice1: 'tea',
  choice2: 'coffee',
  choice3: 'milk',
};

const getObjectValues = obj => {
  return Object.values(obj);
};

console.log(getObjectValues(objChoice));

// List Properties. Create a function that returns an array of properties of a javascript object.
//   Example
// let student = {
//   name: "Mike",
//   class: "4A"
//   course: "English"
// }
// Expected output:
//   ["name", "class", "course"]

const studentNew = {
  name: 'Mike',
  class: '4A',
  course: 'English',
};

const getObjectKeys = obj => {
  return Object.keys(obj);
};

console.log(getObjectKeys(studentNew));


