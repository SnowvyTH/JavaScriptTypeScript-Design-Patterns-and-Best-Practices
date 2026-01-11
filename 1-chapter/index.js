// old way
function testVar() {
    if (true) {
        var message = 'this is var message'
    }
    console.log(message)
}

testVar()

for (var i = 0; i < 5; i++) {
    console.log(i)
}
console.log(i)
console.log('============================')
for (let i = 0; i < 5; i++) {
    console.log(i)
}