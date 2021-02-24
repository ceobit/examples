// Longhand

const arr = [1, 2, 3, 5, 6];
const something = arr[2];

const test = () => {
  console.log('test');
};
const test1 = () => {
  console.log('test1');
};
const test2 = () => {
  console.log('test2');
};
const test3 = () => {
  console.log('test3');
};
const test4 = () => {
  console.log('test4');
};

switch (something) {
  case 1:
    test1();
    break;
  case 2:
    test2();
    break;
  case 3:
    test3();
    break;
  case 4:
    test4();
    break;
  default:
    console.log('Hallo');
}

// Shorthand
const obj = {
  1: test,
  2: test1,
  3: test2,
  4: test3,
  5: test4,
};

obj[something] && obj[something]();

function sum(arr, n) {
  if (n <= 0) {
    console.log(`func = 0 n=${n}`);
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

console.log(sum([2, 3, 4, 5], 3));
// 1 step func = 4     n =  3
// 2 step func = previous result of function + current result (4 + 3) = 7;    n =  2
// 3 step func = previous result of function + current result (7 + 2) = 9;    n =  1
// 4 step func = previous result of function + current result (9 + 0) = 9;    n =  0

var contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return 'No such property';
      }
    } else {
      return 'No such contact'; //why does this not work here???
    }
  }
  return 'No such contact';
}

console.log(lookUpProfile('Kristian', 'lastName'));

let modays = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30',
  '31',
];
//here i created the date with the first part of the month zb 02-09
const months = {
  '01': modays.slice(0, 20).map((el) => el + '-01'),
  '02': modays.slice(0, 19).map((el) => el + '-02'),
  '03': modays.slice(0, 21).map((el) => el + '-03'),
  '04': modays.slice(0, 20).map((el) => el + '-04'),
  '05': modays.slice(0, 21).map((el) => el + '-05'),
  '06': modays.slice(0, 21).map((el) => el + '-06'),
  '07': modays.slice(0, 23).map((el) => el + '-07'),
  '08': modays.slice(0, 23).map((el) => el + '-08'),
  '09': modays.slice(0, 23).map((el) => el + '-09'),
  10: modays.slice(0, 23).map((el) => el + '-10'),
  11: modays.slice(0, 22).map((el) => el + '-11'),
  12: modays.slice(0, 22).map((el) => el + '-12'),
};
const astraobj = {
  //here are the dates of the previous month    here are the dates of the first month

  aquarius: [
    [modays.slice(20).map((el) => el + '-01')],
    `${months['02']}`,
  ].join(),
  pisces: [
    [modays.slice(21).map((el) => el + '-02')],
    `${months['03']}`,
  ].join(),
  aries: [[modays.slice(20).map((el) => el + '-03')], `${months['04']}`].join(),
  taurus: [
    [modays.slice(21).map((el) => el + '-04')],
    `${months['05']}`,
  ].join(),
  gemini: [
    [modays.slice(20).map((el) => el + '-05')],
    `${months['06']}`,
  ].join(),
  cancer: [
    [modays.slice(21).map((el) => el + '-06')],
    `${months['07']}`,
  ].join(),
  leo: [[modays.slice(20).map((el) => el + '-07')], `${months['08']}`].join(),
  virgo: [[modays.slice(21).map((el) => el + '-08')], `${months['09']}`].join(),
  Libra: [[modays.slice(20).map((el) => el + '-09')], `${months['10']}`].join(),
  scorpio: [
    [modays.slice(21).map((el) => el + '-10')],
    `${months['11']}`,
  ].join(),
  sagi: [[modays.slice(20).map((el) => el + '-11')], `${months['12']}`].join(),
  capricorn: [
    [modays.slice(21).map((el) => el + '-12')],
    `${months['01']}`,
  ].join(),
};
//{ signName: "Capricorn", from: "0101" },
//console.log(astraobj.gemini);
const zodiac = (string) => {
  let result;
  let dateinstring = string.substring(0, 5);
  //console.log(experiment.includes(dateinstring));
  //console.log(dateinstring);
  for (let propi in astraobj) {
    // console.log(astraobj[propi]);
    if (astraobj[propi].includes(dateinstring)) {
      return propi;
    }
  }
  return 'give a right date';
};
console.log(zodiac(`03-06-1984`));
console.log(zodiac(`30-10-1990`));


const countLetters = (str) => {
  let strToArr = str.split("");
  let counter = 0;
  let objectLetters = {};
  let letter;
  for (let i = 0; i < strToArr.length; i++) {
    letter = strToArr[i];
    counter = 0;
    for (let j = 0; j < strToArr.length; j++) {
      if (letter === strToArr[j]) {
        counter++;
      }
    }
    objectLetters[letter] = counter;
  }
// objectLetters[letter] = counter;
return objectLetters;
};
console.log(countLetters("tree")); //output is {letter: 6}