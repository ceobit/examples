//closure
const count = () => {
  let counter = 1;
  return () => {
    return counter++;
  };
};

const counter = count();
const counter2 = count();
console.log(counter());
console.log(counter());
console.log(counter());

console.log(counter2());

//recursion fibo 11235813
console.log('\nFIBO ');
const fibo = n => {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibo(n-1)+fibo(n-2);
}

console.log(fibo(5));

console.log('\nCARRY SUM ');
// sum(1)(2)(3) console: 1 3 6

function sum(num) {
  let result = num;
  console.log(result);

  return function func(num) {
    result += num;
    console.log(result);
    return func;
  }
}

sum(1)(2)(3);