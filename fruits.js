const fruits = ['banana', 'lemon', 'banana', 'orange', 'orange', 'banana'];

const getResult = (fruits) => {
  const obj = fruits.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});

 const keys = Object.keys(obj);
keys.sort((a,b) => obj[b]-obj[a]);

  console.log(keys);


  // const arr = [...new Set(fruits)];
  // console.log(arr.sort((a, b) => b.length - a.length));
};

getResult(fruits);