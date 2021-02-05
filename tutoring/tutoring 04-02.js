// / Bonus
// // Create a function that returns an object has following output,
// // try this one in Advance array methods :muscle::skin-tone-2:
// // Examples:
// // ABC -> { A: 1, B: 1, C: 1 } QQQ -> { Q: 3}

//1 way
const countOfLetters = str => {
  const arr = str.split('');
  const obj = {};  // const auxArr = [AA].length
  for (let i = 0; i < arr.length; i++) {
    obj.hasOwnProperty(arr[i]) ? obj[arr[i]] += 1 : obj[arr[i]] = 1;
  }

  const obj1 = {};

  obj1['name'] = 'Sofia';

  //console.log(obj1);

  return obj;
}

// {'A': 1, 'B': 1, 'C': 2 }
//2 way reduce
const countOfLetters1 = str => {
// syntax WebStorm

  const arr = str.split('');
  return arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {})



}

console.log(countOfLetters1('AABCC'));
console.log(countOfLetters1('QQQ'));