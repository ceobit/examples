const func = () => {
  const names = ['Olga', 'Zain', 'Angelo', 'Roman'];
  const salary = [4000, 5000];

  const connectArray = names.map((name, index) => {
    if (index < 2) {
      return `${name} has salary = ${salary[0]}`;
    } else return `${name} has salary = ${salary[1]}`;
  });

  let aux = '';

  for (let i = 0; i < names.length; i++) {
    if (i < 2) {
      aux += `${names[i]} has salary = ${salary[0]} `;
    } else {
       aux += `${names[i]} has salary = ${salary[1]} `;
    }
  }
  console.log(aux);

 console.log(connectArray);
}

//func();

const func1 = () => {
  const names = ['Olga', 'Zain', 'Angelo', 'Roman'];

  const searchArray = names.filter((el, index) => index > 1);
  console.log(searchArray);

  const searchArray2 = names.map((el, index) => {
    if (index > 1 && index !== undefined) {
      return el
  }
  });

  console.log(searchArray2);
}

func1();