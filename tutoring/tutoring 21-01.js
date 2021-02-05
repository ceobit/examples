// map

// map is an array method!  contains/do 3 things
// 1) Return new array
// 2) Starts a loop on the original array
// 3) Call a function for each element of array

/////////
// first way without map()
const arr = ['Mark', 'John', 'Alice'];
const funcWithOutMap = arr => {

  const handleArr = (name, index) => {
    return `${name} has index ${index}`;
  };

  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(handleArr(arr[i], i));
  }

  console.log(newArr);
};

funcWithOutMap(arr);

// second way with map
const funcWithMap = arr => {
  const newArr = arr.map((name, index) => {
    return `${name} has index ${index}`;
  });
  console.log(newArr);
};

funcWithMap(arr);
///////// ////

// different ways to return array
const func = arr => {
  // first way - best in that case
  return arr.map(el => el);

  // second way
  let NewArr = [];
  NewArr = arr.map((el, i) => el);
  return NewArr;

  // 3 way
  const NewArray1 = arr.map(el => el);
  return NewArray1;
};

console.log(func(arr));

const changeElement = arr => {
  const NewArr = arr.map(name => {
    return name === 'John' ? 'Frank' : name;
  });
  console.log(NewArr);
};

changeElement(arr);


