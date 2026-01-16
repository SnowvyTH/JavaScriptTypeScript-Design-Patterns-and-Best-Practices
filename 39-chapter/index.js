let users = ["john", "mary", "bob"]
let userCount = users.length

// bad
for (let i = 0; i < userCount; i++) {
    console.log(users[i])
}
console.log('---- For of ----')
// good
for (const user of users) {
    console.log(user)
}
let text = "Hello JavaScript"
for (const element of text) {
    console.log(element)
}
let capitals = new Map([
    ["Thailand", "Bangkok"],
    ["Japan", "Tokyo"]
])
for (const [c, cap] of capitals) {
    console.log(`${c}: ${cap}`)
}

let fruits = ['apple', 'banana']
let colors = ['red', 'yellow']

for (const fruit of fruits) {
    for (const color of colors) {
        console.log(`${fruit} มีสี ${color}`)
    }
}