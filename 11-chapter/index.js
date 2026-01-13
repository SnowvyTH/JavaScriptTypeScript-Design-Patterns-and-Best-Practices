// old way
const obj = {}
obj['fullname'] = 'Mary';
obj['age'] = 20
console.log(obj)
console.log(Object.keys(obj).length)
delete obj['age']
console.log(obj)
console.log('=======================')

// new way good
const map = new Map()
map.set('fullname', 'Bob')
map.set('age', 20)
console.log(map)
console.log(map.get('age'))
console.log(map.size)