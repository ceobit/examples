// / Bonus
// // Create a function that returns an object has following output,
// // try this one in Advance array methods :muscle::skin-tone-2:
// // Examples:
// // ABC -> { A: 1, B: 1, C: 1 } QQQ -> { Q: 3}

const countOfLetters = str => {
  return str.split('').reduce((acc, cur) => (acc[cur] = (acc[cur] || 0) + 1, acc), {});
}

const countOfLetters1 = str => {
 const arr =  str.split('');
 const result = {};
 for (let i = 0; i < arr.length; i++) {
   if (result.hasOwnProperty(arr[i])) {
     result[arr[i]] = result[arr[i]] + 1;
   } else
   {
     result[arr[i]] = 1;
   }
 }
 return result;
}

console.log(countOfLetters('ABC'));
console.log(countOfLetters('QQQ'));


// // Zodiac sign, write a function that tells the user his/her Zodiac sign. The user should enter only his birthday like dd-mm-yy
// // for farther information check https://en.wikipedia.org/wiki/Zodiac
// // Examples:
// // zodiac(“14-02-2002”)  -> Aquarius
// // zodiac(“10-06-1984")  -> Gemini

const zodiac = [
  {
    name: 'Aries',
    start: '21-03',
    end: '20-04'
  },
  {
    name: 'Taurus',
    start: '20-04',
    end: '21-05'
  },
  {
    name: 'Gemini',
    start: '21-05',
    end: '21-06'
  },
  {
    name: 'Cancer',
    start: '21-06',
    end: '23-07'
  },
  {
    name: 'Leo',
    start: '23-07',
    end: '23-08'
  },
  {
    name: 'Virgo',
    start: '23-08',
    end: '23-09'
  },
  {
    name: 'Libra',
    start: '23-09',
    end: '23-10'
  },
  {
    name: 'Scorpio',
    start: '23-10',
    end: '22-11'
  },
  {
    name: 'Sagittarius',
    start: '23-11',
    end: '22-12'
  },
  {
    name: 'Capricorn',
    start: '22-12',
    end: '20-01'
  },
  {
    name: 'Aquarius',
    start: '20-01',
    end: '19-02'
  },
  {
    name: 'Pisces',
    start: '19-02',
    end: '21-03'
  },
];

const getZodiac = date => {

 const reverseDate = date => new Date(`${date.slice(-4)}-${date.slice(3,5)}-${date.slice(0,2)}`);
  const year = date.slice(-4);

  for (let el of zodiac) {
    if (reverseDate(`${el.start}-${year}`) < reverseDate(date) && reverseDate(`${el.end}-${year}`) >= reverseDate(date)) {
      return el.name;
    }
  }
  return '';
}

console.log(getZodiac('10-06-1984'));
console.log(getZodiac('30-10-1990'));
