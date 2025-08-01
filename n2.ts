function kg(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

console.log("Your Answer is ->", kg(20));
console.log("Your Answer is ->", kg("40"));

