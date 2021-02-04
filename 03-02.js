function factorialize(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}

console.log(factorialize(5));

function findLongestWordLength(str) {
  const arr = str.split(' ').sort((a, b) => b.length - a.length);
  console.log(arr);
  return arr[0].length;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');

function largestOfFour(arr) {
  return arr.map(el => Math.max(...el));
}

largestOfFour(
  [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

function truncateString(str, num) {
  return `${str.slice(0, num)}...`;
}

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));

function findElement(arr, func) {
  const arr1 = arr.filter(el => func(el));
  return arr1[0];
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

console.log(typeof true);

function titleCase(str) {
  const arr = str.toLowerCase().split(' ');
  const arr1 = arr.map(el => el[0].toUpperCase() + el.slice(1));
  return arr1.join(' ');
}

console.log(titleCase('I\'m a little tea pot'));

function mutation(arr) {
  for (let el of arr[1]) {
    if (!arr[0].includes(el)) {
      return false;
    }
  }
  return true;
}

console.log(mutation(['hello', 'hey']));
console.log(mutation(['hello', 'heo']));

function chunkArrayInGroups(arr, size) {
  let arr1 = [];
  arr1.push([
    ...arr.filter((el, i) => {
      if (i < size) {
        return el;
      }
    })]);
  console.log(arr1);
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);


const bool = true;
const num = 1;

console.log(bool === num);
