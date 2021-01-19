// Repeat it.
//   Create a program with two variables: “item” and “times”.
//   Create a program that repeats the “item” as many times as specified by “times”.
//   The first variable (“item”) is the item that needs repeating while the second argument (“times”)
//   is the number of times the item is to be repeated. Print the result in an array. Examples:
// (“example”, 3) ➞ [“example”, “example”, “example”]

const repeat = (item ,times) => {
 return new Array(times).fill(item);
}

console.log(repeat('Hello', 5));

