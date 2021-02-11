
class Cars {
  constructor(model , color, year) {
    // 1 way
    // this.model = model;
    // this.color = color;
    // this.color = color;
    // this.color = color;
    // this.color = color;
    // this.color = color;
    // this.color = color;
    // this.color = color;
    // this.color = color;

    //2 way
    Object.assign(this, {model, color, year});
  }

  get printModel() {
    console.log(`${this.model} ${this.color} ${this.year}`);
  }

  set printModel(obj) {
    //1 way string
    // const arr = str.split(', ');
    // this.model = arr[0];
    // this.color = arr[1];
    // this.color = arr[1];
    // this.color = arr[1];
    // this.color = arr[1];
    // this.color = arr[1];

    //2 way
    Object.assign(this, {...obj});
  }

  print() {
    console.log(`${this.model} ${this.color} ${this.year}`);
  }
}

const bmw = new Cars('BMW', 'RED', 2019);
bmw.printModel;
// bmw.printModel = 'AUDI, BLACK';
bmw.printModel = {model: 'AUDI', color: 'BLACK', year: 2020};
bmw.print();

//API

// getWeather(day = today, city = Hamburg)
// setWeather = {day: tomorrow, city: Berlin}

// sendInfo
// getInfo

//Info(name) = sendInfo
//Info = getInfo
