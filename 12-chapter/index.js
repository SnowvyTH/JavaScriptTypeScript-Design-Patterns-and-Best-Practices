const obj = {}
const hiddenKey = Symbol('hidden')

obj['fullname'] = 'John'
obj[hiddenKey] = 'secret password'

for (const key in obj) {
    console.log(key)
}

console.log(Object.values(obj))
console.log(Object.entries(obj))
const s = Object.getOwnPropertySymbols(obj)
const password = obj[s[0]]
console.log(password)

Object.getOwnPropertySymbols(obj).forEach(sym => {
    console.log(obj[sym])
})