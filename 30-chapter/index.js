console.log("5" + 10) // แปลง 10 เป็น string

// good
console.log(Number("5") + 10)
console.log("5" - 2) // แปลง 5 เป็น number

console.log(true + 1)
console.log(false + 1)

// good
console.log(Boolean(0)) // false
console.log(Boolean(1)) // true
console.log(Boolean("")) // false
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false
console.log(Boolean("hello")) // true