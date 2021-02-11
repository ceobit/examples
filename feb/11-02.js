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
  set data(props) {
    [this.modelName, this.modelNumber, this.engineCapacity] = [...props.split(',')];
  }
}

car.data;
car.data = 'Ford,12123243545,140';
car.data;
