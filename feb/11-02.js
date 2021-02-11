function Product(productName, prise, inventory) {
  Object.assign(this, { productName, prise, inventory });
  this.printOut = function printOut() {
    console.log(`${this.productName} selling prise ${this.prise}, we have ${this.inventory} in our store`);
  }
}

const pepsi = new Product('Pepsi', 2.33,2232);
const cola = new Product('Cola', 2.5,5700);
pepsi.printOut();
cola.printOut();


const car = {
  modelName: 'Audi',
  modelNumber: '434645DS467J',
  engineCapacity: 250,
  get data() {
    console.log(`${this.modelName} has number: ${this.modelNumber} and engine capacity =  ${this.engineCapacity}`);
  },
  set data({...props}) {
    Object.assign(this, props)
  }
}

car.data;
car.data = {modelName: 'Ford', modelNumber: '12123243545', engineCapacity: 140};

car.data;


// classes
class Animals{
  #kind;
  constructor(kind, hometown){
    this.#kind = kind;
    this.hometown = hometown;
  }

  display() {
    console.log(`${this.#kind} ${this.hometown}`);
  }
}

const cat = new Animals('cat', 'home');
cat.display();

class Tv {
  constructor(_brand, _channel = 1, _volume = 10) {
    this.brand = _brand;
    this.channel = _channel;
    this.volume = _volume;
  }
  incVolume(volume) {
    this.volume += volume;
  }
  decVolume(volume) {
    volume > this.volume ? console.log(`volume should be less than ${this.volume}`) : this.volume -= volume;
  }
  rest() {
    this.volume = 10;
  }
}

const lg = new Tv('LG', 400, 50);
lg.incVolume(230);
lg.decVolume(500);
lg.rest();