
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
}

console.log(createGrid(3, '*'));

// 2 way
const createGrid1 = (size, char) => {
  const resultArr = [];
  Array(size).fill(char).forEach(el => resultArr.push(Array(size).fill(char)));
  return resultArr;
}

console.log(createGrid1(3, '*'));

// 3 way
const createGrid2 = (size, char) => {
  const resultArr = [];
  char.repeat(size).split('').forEach(el => resultArr.push(char.repeat(size).split('')));
  return resultArr;
}

console.log(createGrid2(3, '*'));

