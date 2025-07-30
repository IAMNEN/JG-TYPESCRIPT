function calculatetax(income, taxyear) {
    if (taxyear < 2020)
        return income * 1.2;
    return income * 1.3;
}
var tax1 = calculatetax(20000, 2021);
console.log(tax1);
