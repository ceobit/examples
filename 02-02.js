// Object yourPersonObj.
// Create an object named person2.
//  Loop through the object and print both the property
// and value of the object.

const person2 = {
  name: 'Sofia',
  age: 3,
  city: 'Hamburg'
}

for (const [key, value] of Object.entries(person2)) {
  console.log(`${key}: ${value}`);
}

// Create a function that returns an array of the properties of a javascript object.
const objProp = person2 => {
  return [key, value] = Object.entries(person2);
}

console.log(objProp(person2));

// Given the following object
// const student = {
//   firstName: "Zain",
//   lastName: "Oil",
//   class: 48 };
// Create a method that prints the following:
//   "Zain Oil a student in class 48"

const student = {
  firstName: "Zain",
  lastName: "Oil",
  class: 48,
  print: function() {
    console.log(`${this.firstName} ${this.lastName} a student in class ${this.class}`);
  }
};

student.print();
