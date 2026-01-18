// const person = { name: 'mary', age: 30}

// const keys = Object.keys(person)

const person = { name: 'mary', age: 30}
const keys = Object.keys(person) as Array<keyof typeof person>

keys.forEach(key => {
    const value = person[key]
    console.log(value)
})