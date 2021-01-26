//объединеие массива

const print = arr => {
  const [name, age, address] = arr;
  console.log(`I'm ${name}, I'm ${age}, I live ${address}`);
}

print (['Roman', 30, 'Hamburg']);

// const max = numArr => {
//   console.log(...numArr);
//   console.log(Math.max(...numArr));
// }
//
// max([50, 80, 2]);