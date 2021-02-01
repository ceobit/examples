(() => {  //wrapper I try to protect my code here

// closure

// A closure is a function that has access to its outer function scope
// even after the outer function has returned. This means a closure can
// remember and access variables and arguments of its outer function even
// after the function has finished.

//scope

  const a = 1; // global scope

  function outer() {
    const b = 2; // outer scope

    function inner() {
      const c = 3; // inner scope
      console.log(c); //inner
      console.log(b); //outer
      console.log(a); //global
    }

    inner();
    console.log(b); //outer
    console.log(a); // global
  }

  outer();

  console.log(a); //global

  console.log('it other example');

  const getCounter = () => {
    let counter = 0; // outer scope
    return () => {
      // inner scope
      return counter++;
    };
  };

  const countOfCustomers = getCounter();  //count is closure
  console.log(countOfCustomers()); //0
  console.log(countOfCustomers()); //1
  console.log(countOfCustomers()); //2

  const countOfProducts = getCounter();
  console.log(countOfProducts()); //0
  console.log(countOfProducts()); //1

  let sum = 0; //global
  const funct = () => {
    // outer scope
    return sum++;
  };

  console.log(funct());
  console.log(funct());
  console.log(funct());

  console.log('it other example');

// nested function
  const myName = () => {
    //outer scope
    const name = 'Roman';

    const myAge = () => {
      //inner scope
      return 30;
    };

    console.log(`My name is ${name}, i'm ${myAge()}`);
  };

  myName();

//GLOBAL (myAge) //1 level
  //DIFFERENT FUNCTIONS (my name) //2 level
  //NESTED FUNCT 3 level
  //DIFFERENT FUNCTIONS (my name1) //2 level

  const notAnon = (() => {
    return 'Not Anon IIFE';
  })();

  console.log(notAnon);

  (() => {
    console.log('Anon IIFE'); //Immid involc funct expres
    const a = 0;

    function funct() {
      console.log(a);
    }
  })();

})();

let months = [
  [
    'december',
    'january',
    'february'],
  [
    'march',
    'april',
    'may'],
  [
    'june',
    'july',
    'august'],
  [
    'september',
    'october',
    'november'],
];
console.log(months[0][0]);
console.log(months[0].indexOf('january'));

const arr = [[0, 1, 2], [0, 1, 2], [0, 1, 2]];
console.log(arr[2][2]);