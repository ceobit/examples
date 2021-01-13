let stars = '';
for (let i = 5; i >= 0; i--) { // loop for lines
  i < 5 ? stars +='\n' : null;
  for (let j = 1; j <= i; j++) { // loop for count of
    stars = stars + '*';
  }
}
console.log(stars);
//   stars = ***** + \n + **** + \n + *** + \n + ** +\n +* +/n



// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 5; j++) {
//     // our code
//   }
// }
// case: i <= 3 and j <= 5      case: j <= i
// 1 step i = 1; j = 1         i = 1   j = 1
// 2 step i = 1; j = 2;        i = 2   j = 1
// 3 step i = 1; j = 3;        i = 2   j = 2
// 4 step i = 1; j = 4;        i = 3   j = 1
// 5 step i = 1; j = 5;        i = 3   j = 2
// 6 step i = 2; j = 1;        i = 3   j = 3
// 7 step i = 2; j = 2;
// 8 step i = 2; j = 3;
// ......
// n step i = 3; j = 1;
// last step i = 3; j=5


for (let i = 1; i <= 3; i++) {
  // console.log(`it is i ${i}`);
  for (let j = 1; j <= i; j++) {
    console.log(`it is j ${j}`);
  }
}

