const decimal = require('decimal.js')

console.log(0.1 + 0.2)

const result = new decimal.Decimal(0.1).plus(0.2)
const result2 = Number(result)
console.log(result2)