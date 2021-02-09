const myAge = 50;

const print10 = () => {
  console.log(`I'm 10 years old`);
}

const print30 = () => {
  console.log(`I'm 30 years old`);
}

const print50 = () => {
  console.log(`I'm 50 years old`);
}

switch (myAge) {
  case 10:
    print10();
    break;
  case 30:
    print30();
    break;
  case 50:
    print50();
    break;
  default:
    console.log('You are old');
}


const obj = {
  10: print10,
  30: print30,
  50: print50
}


obj[myAge] && obj[myAge]();  // if obj[myAge] is true then execute obj['10']()
obj[myAge] || obj['10'](); // if obj[myAge] if false then execute obj['10']()


obj[myAge]() // print50()


const nameOfCity = str => {
  const city = str.toLowerCase();
  return (city.startsWith('los') || city.startsWith('new')) && str;
};

console.log(nameOfCity('Los Angeles'));
console.log(nameOfCity('New York'));
console.log(nameOfCity('Berlin'));
console.log(nameOfCity('Moscow'));
console.log(nameOfCity('los Angeles'));


const arr = ['Moscow', 'Berlin', 'Paris'];
console.log(arr[0].slice(0, 1));

//return [].reduce()
//const newVar = [].reduce()

//[].reduce()    [] =>  0 {} []
//[].map()       [, , ,] => [, , ,]
//[].filter()    [, , ,] => [, ,]
//[].find()      [, , ,]  => value
//[].forEach()   [, , ,] => console.log(,,,) str = += el

const obj1 = {
  key1: ['Hadi', 'Nancy', 'Olga'],
  key2: ['Vivi', 'Angelos', 'Roman']
}

const names = ['Leo', 'Angelos'];

let result = '';
console.log(Object.values(obj1));
for (let i = 0; i <= names.length; i++) {
  result = [].concat(...Object.values(obj1)).includes(names[i]) ? names[i] : 'OTHER NAME';
  console.log(result)
}
