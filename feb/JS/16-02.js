// 1 way
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
    return seasons[Math.floor(months.indexOf(monthName) / 3)];
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

//2 way Object
const seasons = {
  Winter: ["december", "january", "february"],
  Spring: ["march", "april", "may"],
  Summer: ["june", "july", "august"],
  Autumn: ["september", "october", "november"],
};

const monthCheck1 = (str) => {
  const months = [].concat(...Object.values(seasons));

  let month = str
    .toLowerCase()
    .split(" ")
    .filter((word) => months.includes(word))
    .join("");

  const [value] = [
    ...Object.values(seasons).filter((value) => value.includes(month)),
  ];
  return Object.keys(seasons).find((key) => seasons[key] === value);
};

console.log(monthCheck1("I love june"));

// 3 way
const monthCheck2 = (str) => {
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

  let month = str
    .toLowerCase()
    .split(" ")
    .filter((word) => months.includes(word))
    .join("");

  if (months.indexOf(month) < 3) return seasons[0];
  else if (months.indexOf(month) >= 3 && months.indexOf(month) < 6)
    return seasons[1];
  else if (months.indexOf(month) >= 6 && months.indexOf(month) < 9)
    return seasons[2];
  else return seasons[3];
};

console.log(monthCheck2("I love june"));

// 1 way
const createGrid = (size, char) => {
  const resultArr = [];
  let auxArr = [];
  for (let i = 0; i < size; i++) {
    auxArr = [];
    for (let j = 0; j < size; j++) {
      auxArr.push(char);
    }
    resultArr.push(auxArr);
  }
  return resultArr;
};
// 1 step i = 0;   j = 0   auxArr = [];  resultArr = [];
// 2 step i = 1;   j = 1   auxarr = [*]; resultArr = [];
// 3 step i = 1;   j = 2   auxarr = [*, *]; resultArr = [];
// 4 step i = 1;   j = 3   auxarr = [*, *, *]; resultArr = [[*,*,*]];
// 5 step i = 2;   j = 1   auxarr = [*]; resultArr = [[*,*,*]];
// 6 step i = 2;   j = 2   auxarr = [*, *]; resultArr = [[*,*,*]];
// 6 step i = 2;   j = 3   auxarr = [*, *, *]; resultArr = [[*,*,*], [*,*,*]];
// 7 step i = 3;   j = 1   auxarr = [*]; resultArr = [[*,*,*], [*,*,*]];
// 7 step i = 3;   j = 2   auxarr = [*, *]; resultArr = [[*,*,*], [*,*,*]];
// 7 step i = 3;   j = 3   auxarr = [*,*,*]; resultArr = [[*,*,*], [*,*,*], [*,*,*];

// console.log(createGrid(3, '*'));

// 2 way
const createGrid1 = (size, char) => {
  const resultArr = [];
  Array(size)
    .fill(char)
    .forEach((el) => resultArr.push(Array(size).fill(char)));
  console.log(Array(size).fill(char));
  return resultArr;
};

console.log(createGrid1(3, "*"));

// 3 way
const createGrid2 = (size, char) => {
  const resultArr = [];
  char
    .repeat(size)
    .split("")
    .forEach((el) => resultArr.push(char.repeat(size).split("")));
  console.log(char.repeat(size).split(""));
  return resultArr;
};

console.log(createGrid2(3, "*"));


const hackerSpeak4 = (str) => {
  const replacements = { a: "4", e: "3", i: "1", o: "0", s: "5" };
  return Object.entries(replacements).reduce((acc, el) => acc.replace(el[0], el[1]), str);
};
console.log(hackerSpeak4("this is an encoded message"));



// Validate Pin
function validPin(pinCode) {
  const number = Number(pinCode);
  //checks if pin is not a number
  if (isNaN(number)) {
    return false;
  }

  const pinSplit = pinCode.split("");
  const lengthOfPin = 4;
  //checks pin length
  if (pinSplit.length !== lengthOfPin) {
    return false;
  }
  //checks if last value is odd or even
  if (parseInt(pinCode[lengthOfPin - 1]) % 2 !== 0) {
    return false;
  }
  let result = 0;
  let checkIdenticalNumbers = [];
  for (let i = 0; i < pinSplit.length; i++) {
    result += parseInt(pinSplit[i]);
    if (pinSplit[0] !== pinSplit[i]) {
      checkIdenticalNumbers.push(pinSplit[i]);
    }
  }
  //checks if all numbers are identical
  if (checkIdenticalNumbers.length === 0) {
    return false;
  }
  //checks if total value of pin is less than 5
  if (result < 5) {
    return false;
  }
  return true;
}
console.log(validPin("1100"));
console.log(validPin("1230"));