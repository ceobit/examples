// / Bonus
// // Create a function that returns an object has following output,
// // try this one in Advance array methods :muscle::skin-tone-2:
// // Examples:
// // ABC -> { A: 1, B: 1, C: 1 } QQQ -> { Q: 3}

const countOfLetters = str => {
  return str.split('').
    reduce((acc, cur) => (acc[cur] = (acc[cur] || 0) + 1, acc), {});
};

const countOfLetters1 = str => {
  const arr = str.split('');
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] ? result[arr[i]] += 1 : result[arr[i]] = 1;
  }
  return result;
};

console.log(countOfLetters1('ABCC'));
console.log(countOfLetters('QQQ'));

// // Zodiac sign, write a function that tells the user his/her Zodiac sign. The user should enter only his birthday like dd-mm-yy
// // for farther information check https://en.wikipedia.org/wiki/Zodiac
// // Examples:
// // zodiac(“14-02-2002”)  -> Aquarius
// // zodiac(“10-06-1984")  -> Gemini

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

const getZodiac = date => {

  if (+date.slice(0, 2) > 31 || +date.slice(3, 5) > 12) {
    return 'Not real day!';
  }

  const reverseDate = date.slice(0, 5).split('-').reverse().join('');

  const newArr = zodiac.filter(el => el.from < reverseDate).
    sort((a, b) => a.from - b.from);

  return newArr[newArr.length - 1].signName;

};

console.log(getZodiac('30-10-1990'));
console.log(getZodiac('14-02-2002'));
console.log(getZodiac('10-06-1984'));
console.log(getZodiac('14-08-1987'));
console.log(getZodiac('22-11-1991'));
console.log(getZodiac('13-12-1968'));
console.log(getZodiac('32-12-1984'));
