// old way
const fruits = ['apple', 'banana', 'cherry']
//console.log(fruits.indexOf('apple'))
if (fruits.indexOf('apple') !== -1) {
    console.log('hello apple')
} else {
    console.log('apple not found')
}

// new way good
console.log('------ include ------')
console.log(fruits.includes('apple')) // true or false
if (fruits.includes('apple')) {
    console.log('hello apple')
} else {
    console.log('apple not found')
}

// ร่วมกับ filter
const fruitsToCheck = ['apple', 'banana', 'cherry', 'mango']
let filterFruits = fruitsToCheck.filter(f => fruits.includes(f))
console.log(filterFruits)