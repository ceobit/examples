const matchHouses = step => {

  if (step === 0) return 0;

  if (step === 1) return 6;

  return matchHouses(step - 1) + 5;
}


console.log(matchHouses(1)); // 6
console.log(matchHouses(2)); // 11
console.log(matchHouses(3)); // 16
console.log(matchHouses(4)); // 21

const matchHouses1  = step => {
  if (step === 0) return 0;

    return step * 5 + 1;
}


console.log(matchHouses1(1)); // 6
console.log(matchHouses1(2)); // 11
console.log(matchHouses1(3)); // 16
console.log(matchHouses1(4)); // 21

matchHouses(0)// ➞ 6
matchHouses(2)// ➞ 11
matchHouses(3)// ➞ 16
matchHouses(4)// ➞ 21