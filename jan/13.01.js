// 11. XO Create a function that takes a string, checks if it has the same number of ’x’s and ’o’s and returns either true or false.
// Notes:
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
// Examples:
// isEqualNumXandO(“ooxx”) ➞ true
// isEqualNumXandO(“xooxx”) ➞ false
// isEqualNumXandO(“ooxXm”) ➞ true (case insensitive)
// isEqualNumXandO(“zpzpzpp”) ➞ true (returns true if no x and o)
// isEqualNumXandO(“zzoo”) ➞ false

const isEqualNumXandO = (text) => {
  const str = text.toLowerCase();

  if (!str.includes('x') && !str.includes('o')) {
    return true;
  }
  return str.split('x').length - 1 === str.split('o').length - 1;
}
//
// console.log(isEqualNumXandO('ooxx'));
// console.log(isEqualNumXandO('xooxx'));
// console.log(isEqualNumXandO('ooxXm'));
// console.log(isEqualNumXandO('zpzpzpp'));
// console.log(isEqualNumXandO('zzoo'));

const isFirstSuperior = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[i]) {
      return true;
    }
  }
  return false;
}

console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"])); //true
console.log(isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"])); // true
console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4])); //false
console.log(isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"])); // false




