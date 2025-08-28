let product = {
  title: "Pen",
};

let { title, price = 10 } = product;

console.log(title);
console.log(price);
