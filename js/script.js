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

function total(product) {
  return product.price * product.quantity;
}

function updatePrice(product, percentage) {
  product.price = product.price * (1 + percentage / 100);
}

const p1 = new Product("Laptop", 1000.0, 5);
const p2 = new Product("Headphones", 200.0, 2);

const total1 = total(p1);
const total2 = total(p2);
console.log(total1, total2);

updatePrice(p1, 10);
console.log(p1.price);
