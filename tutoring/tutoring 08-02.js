const zodiac = [
  {signName: 'Not real day!', from: '0000'},
  {signName: 'Capricorn', from: '0101'},
  {signName: 'Aquarius', from: '0121'},
  {signName: 'Pisces', from: '0220'},
  {signName: 'Aries', from: '0321'},
  {signName: 'Taurus', from: '0421'},
  {signName: 'Gemini', from: '0521'},
  {signName: 'Cancer', from: '0622'},
  {signName: 'Leo', from: '0723'},
  {signName: 'Virgo', from: '0824'},
  {signName: 'Libra', from: '0924'},
  {signName: 'Scorpio', from: '1024'},
  {signName: 'Sagittarius', from: '1123'},
  {signName: 'Capricorn', from: '1222'},
  {signName: 'Not real day!', from: '1232'},
  {signName: 'empty', from: '0000'},
];
// const func = data => {
//   const dayAndMonth = data.slice(0, 5).split('-').reverse();  // 0130;
//   const i = 0;
//   while (zodiac[i].from < dayAndMonth) {
//     //1 step 0000 < 0130 - true
//     //2 step 0101 < 0130 - true
//     //3 step 0121 < 0130 = our solution - true
//     //4 step 0220 < 0130 - false!!!
//     // i++
//   }
//
// };
//
// console.log(func('30-01-1990'));

const toCamelCase = (stringi) => {
  const newStringi = stringi.toLowerCase().split('_');
  // console.log(newStringi);
  const modifier = newStringi.map((name, i) => {
    if (i > 0) {
      return name[0].toUpperCase() + name.substring(1, name.length);
    } else return name;
  }).join('');

  let result = modifier[0].toLowerCase() + modifier.substring(1);
  return result;
};
console.log(toCamelCase('hello_world'));
console.log(toCamelCase('javascript_is_fun'));
// console.log('-------------Pig Latin Translation ------------');

const daughterAges = [11, 11, 3];

// {1: 11, 2: 11, 3: 3}  ['daughter_1: 11', 'daughter_2: 11']

const obj = daughterAges.reduce((acc, cur, i) => {
  acc[`daughter_${i + 1}`] = cur;
  return acc;
}, []);
console.log(obj);

for (let el in obj) {
  console.log(typeof el);
}

// const obj1 = {
//   name: 'Roman',
//   age: 30,
// };

// const {name, age1, props} = obj1;

// console.log(Object.entries(obj1));

const obj1 = [
  {
    name: 'Roman',
    age: 30,
  },
  {
    name: 'Vivi',
    age: 20,
  },
];

for (const el of obj1) {
  console.log(el);
}


const arr = ['Hallo', 'Word', 'I love JS', 'other word', 'again other words'];

console.log(arr[1]);

const [, yoo,yea] = arr; // array desctruction
console.log(yoo, yea);
console.log(arr);
const obj2 = {
  name: 'Roman',
  age: 30,
};

const {age} = obj2; //obj desctruction
console.log(age);

//console.log(name, age1, props);

//obj.forEach(el => console.log(typeof el));