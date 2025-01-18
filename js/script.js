// Fazer um programa para armazenar em memória os dados de dois produtos
// (nome, preço e quantidade)
//  Mostrar esses Dados na Tela
// Exemplo:
//     Laptop, $1000.00, 5
//     Headhphones, $200.00, 2

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  toString() {
    return `${this.name}, $${this.price.toFixed(2)}, ${this.quantity}`;
  }
}

const p1 = new Product("Laptop", 1000.0, 5);
const p2 = new Product("Headphones", 200.0, 2);

console.log(p1.toString());
console.log(p2.toString());

// function Product(name, price, quantity) {
//   this.name = name;
//   this.price = price;
//   this.quantity = quantity;

//   this.toString = function () {
//     return `${this.name}, $${this.price.toFixed(2)}, ${this.quantity}`;
//   };
// }

// const p1 = new Product("Laptop", 1000.0, 5);
// const p2 = new Product("Headphones", 200.0, 2);

// console.log(p1.toString());
// console.log(p2.toString());
