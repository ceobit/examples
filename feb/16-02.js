// 1 way
const monthCheck = (str) => {
  let months = [
    'december',
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
  ];
  let seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];

  const currentSe = (monthName) => {
    return seasons[Math.floor(months.indexOf(monthName) / 3)];
  };

  let month = str.toLowerCase().
    split(' ').
    filter((word) => months.includes(word)).
    join('');
  return month === ''
    ? `We couldn’t find any month in your text, sorry try again`
    : `You have entered ${month}, which is in ${currentSe(month)}`;
};
console.log(monthCheck('I love April'));
console.log(monthCheck('I love june'));
console.log(monthCheck('I love may'));
console.log(monthCheck('I love september'));
console.log(monthCheck('I love november'));
console.log(monthCheck('I love december'));
console.log(monthCheck('We need Kartoffel'));

//2 way Object
const seasons = {
  'Winter': ['december', 'january', 'february'],
  'Spring': ['march', 'april', 'may'],
  'Summer': ['june', 'july', 'august'],
  'Autumn': ['september', 'october', 'november'],
};

const monthCheck1 = (str) => {

  const months = [].concat(...Object.values(seasons));

  let month = str.toLowerCase().
    split(' ').
    filter((word) => months.includes(word)).
    join('');

  const [value] = [
    ...Object.values(seasons).
      filter(value => value.includes(month))];
  return Object.keys(seasons).find(key => seasons[key] === value);
};

console.log(monthCheck1('I love june'));

// 3 way
const monthCheck2 = (str) => {

  let months = [
    'december',
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
  ];
  let seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];

  let month = str.toLowerCase().
    split(' ').
    filter((word) => months.includes(word)).
    join('');

  if (months.indexOf(month) < 3) return seasons[0];
  else if (months.indexOf(month) >= 3 && months.indexOf(month) < 6) return seasons[1];
  else if (months.indexOf(month) >= 6 && months.indexOf(month) < 9) return seasons[2];
  else return seasons[3];

};

console.log(monthCheck2('I love june'));