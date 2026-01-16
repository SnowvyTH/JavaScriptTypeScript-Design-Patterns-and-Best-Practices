let book = { title: 'js', price: 300 }
// ระวังเราจะเผลอ reassign โดยไม่ตั้งใจ
book = 'new book'
console.log(book)

const book2 = { title: 'js', price: 300 }
// ระวังเราจะเผลอ reassign โดยไม่ตั้งใจ
//book2 = 'new book'
book2.author = 'Mary Doe'
book2.title = 'php'
console.log(book2)

for (let index = 0; index < 5; index++) {
    let numbers = [] // ระวัง
    numbers.push(index)
    console.log(numbers)
}
console.log("===================")
for (let index = 0; index < 5; index++) {
    const numbers = []
    numbers.push(index)
    console.log(numbers)
}

let arr = [1, 2, 3]
const arr2 = [1, 2, 3]