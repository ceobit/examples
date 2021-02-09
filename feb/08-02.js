const first = callback => {
  const name = 'first';
  console.log('first');
  callback(name);
}

const second = ownerName => {
  console.log(`I'm callback from ${ownerName}`);
}

first(second);




