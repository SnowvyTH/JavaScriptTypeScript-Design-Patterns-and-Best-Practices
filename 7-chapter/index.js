// old way
const obj = { a: 1, b: 2, c: 3 }
Object.keys(obj).forEach(key => {
    console.log(key)
    console.log(obj[key])
})
console.log("===============")
// new way
Object.entries(obj).forEach(([key, value]) => {
    console.log(key)
    console.log(value)
})
console.log("===============")
Object.values(obj).forEach(value => console.log(value))
console.log("===============")
const valueArray = Object.values(obj)
console.log(valueArray)
console.log("===============")
const valueArray2 = Object.entries(obj)
console.log(valueArray2)