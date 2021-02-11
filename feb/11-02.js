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
