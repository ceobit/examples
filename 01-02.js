// Write a function that accepts several parameters and calculates
// the number of money that will have been saved as pension until a person retires.
// The function should be self invoked and should have the following parameters:
//   The current age of the person // e.g. 40
// The retirement age of the person // e.g. 60
// The monthly wage the person earns // e.g. 1000
// The percentage (as integer) that the person saves each month // e.g. 10%
// If the person has already retired then the message ‘You’re already retired!’
// should be printed. If not, then the program should calculate how many years remain
// until the person retires, the monthly income and take a specific percent of this income every month as saved money.
//   Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and
//   she saves the 5% of it. How much money will she have saved until she retires?
//   Output: $30000

((curAge, retAge, wage, spare ) => {
  const result = curAge >= 65 ? `You’re already retired!` : `$${(retAge - curAge) * 12 * wage * spare / 100}`;
  console.log(result);
})(40, 65,2000, 5);

const monthCheck = (str) => {
  let months = [
    "december",
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
  ];
  let seasons = ["Winter", "Spring", "Summer", "Autumn"];

  const currentSe = (monthName) => {
    return seasons[(months.indexOf(monthName) - months.indexOf(monthName) % 3) / 3];
  };

  let month = str
  .toLowerCase()
  .split(" ")
  .filter((word) => months.includes(word))
  .join("");
  return month === ""
    ? `We couldn’t find any month in your text, sorry try again`
    : `You have entered ${month}, which is in ${currentSe(month)}`;
};
console.log(monthCheck("I love April"));
console.log(monthCheck("I love june"));
console.log(monthCheck("I love may"));
console.log(monthCheck("I love september"));
console.log(monthCheck("I love november"));
console.log(monthCheck("I love december"));
console.log(monthCheck("We need Kartoffel"));

const monthCheck1 = (str) => {
  let months = [
    "december",
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
  ];
  let seasons = ["Winter", "Spring", "Summer", "Autumn"];

  const currentSe = (monthName) => {
    return seasons[Math.floor(months.indexOf(monthName)/3)];
  };

  let month = str
  .toLowerCase()
  .split(" ")
  .filter((word) => months.includes(word))
  .join("");
  return month === ""
    ? `We couldn’t find any month in your text, sorry try again`
    : `You have entered ${month}, which is in ${currentSe(month)}`;
};
// console.log(monthCheck1("I love April"));
// console.log(monthCheck1("I love june"));
// console.log(monthCheck1("I love may"));
// console.log(monthCheck1("I love september"));
// console.log(monthCheck1("I love november"));
// console.log(monthCheck1("I love december"));
// console.log(monthCheck1("We need Kartoffel"));