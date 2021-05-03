const obj = {
  name: 'Peter',
  a: 67,
}


const obj2 = {
  name: 'Anna'
}

const obj3 = {
  name: 'Sofia'
}


function print() {
  console.log(this.name);
};

const firstObj = print.bind(obj);
const secondObj = print.bind(obj2);
const thirdObj = print.bind(obj3);

thirdObj

firstObj();
secondObj();
thirdObj();

console.log('/////');thirdObj

// print.apply(obj, ['Anna', 'Eva', 'Sofia']);

//bind
const func = print.bind(obj);
// func();


// const numbers = [5, 6, 2, 3, 7];

// const max = Math.max.apply(null, []);
// const max2 = Math.max(5, 6, 2, 3, 7);



// console.log(max);
// console.log(max2);
// expected output: 7


// all comments in your html page should be printed in console
// but first let's understand apply method
const lettersArr = ["a", "b"];
const lettersArr2 = ["c", "d"];

// lettersArr.concat(lettersArr2);
// [...lettersArr, ...lettersArr2];

const numbers = [0, 1, 2];
lettersArr.push.apply(lettersArr, numbers);
lettersArr2.push(numbers);


// console.info(lettersArr); // ["a", "b", 0, 1, 2]
// console.log(`\n`);
// console.info(lettersArr2); // ["a", "b", 0, 1, 2]
/*  to put it in words
apply it’s a method will take a value and array(or array-like object )
will execute the function that it’s being applied to (push in our example but it can be any other function/method )
so in our case we passed the whole array to compare it with the result of the function call so I don’t have repeat or I don’t push until my function came back with a result */
// get me now all the comments please 😅

let allComments = (element) => {
  let arr = [];
  element.childNodes.forEach((node) => {
    node.nodeType === 8
      ? arr.push(node)
      : arr.push.apply(arr, allComments(node));
  });
  return arr;
};
console.log(allComments(document));

let arr = [];
let allComments2 = (element) => {
  element.childNodes.forEach((node) => {
    node.nodeType === 8
      ? arr.push(node)
      : allComments2(node);
  });
  return arr;
};
console.log(allComments2(document));
