//bad
const value = 0
const result = value || 3000
console.log(result)

//good
const value2 = 1000
const result2 = value2 ?? 3000
console.log(typeof(result2))

let value3 = 1000
value3 ??= 3000
console.log(value3)