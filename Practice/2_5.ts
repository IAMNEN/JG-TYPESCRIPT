let product = {
  header: "Pen",
};

let { header, price = 10 } = product;

console.log(header);
console.log(price);
