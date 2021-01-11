const nameArr = ['roman', 'natalia'];
for (let i = 0; i < nameArr.length; i++) {
  console.log(`${nameArr[i][0].toUpperCase()}${nameArr[i].slice(1)}`);
}

// The odd/even reporter.
//   Write a program that will iterate from 0 to 20. For each iteration,
//   it will check if the current number is even or odd, and report that to the screen (e.g. “2 is even”).

for (let i = 0; i <= 20; i++) {
  i % 2 === 0 ? console.log(`${i} is even`) : console.log(`${i} is odd`);
}

//Write programs that produce the following outputs:
// 100 200 300 400 500 600 700 800 900 1000
// 0 2 4 6 8 10
// 3 6 9 12 15
// 9 8 7 6 5 4 3 2 1 0
// 1 1 1 2 2 2 3 3 3 4 4 4
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

const printCrazyNumbers = () => {
  let set = '';
  for (let i = 100; i <= 1000; i += 100) {
    set += i + ' ';
  }
  console.log(set);

  set = '';
  for (let i = 0; i <= 10; i += 2) {
    set += i + ' ';
  }
  console.log(set);

  set = '';
  for (let i = 3; i <= 15; i += 3) {
    set += i + ' ';
  }
  console.log(set);

  set = '';
  for (let i = 9; i >= 0; i--) {
    set += i + ' ';
  }
  console.log(set);

  set = '';
  for (let i = 1; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      set += i + ' ';
    }
  }
  console.log(set);

  set = '';
  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 4; j++) {
      set += j + ' ';
    }
  }
  console.log(set);

  // 1 variant
  set = '';
  let j = 0;
  for (let i = 0; i < 15; i++) {
    i % 5 === 0 ? j = 0 : j++;
    set += j + ' ';
  }
  console.log(set);

  // 2 variant
  set = '';
  for (let i = 0; i <= 4; i++) {
    set += i + ' ';
  }
  console.log(set.repeat(3));

  // 3 variant
  let countNum = 0;
  text = '';
  for (let i = 1; i < 4;) {
    text += countNum + ' ';
    if (countNum !== 0 && countNum % 4 === 0) {
      i++;
      countNum = 0;
    } else {
      countNum++;
    }
  }
  console.log(text);

};

printCrazyNumbers();