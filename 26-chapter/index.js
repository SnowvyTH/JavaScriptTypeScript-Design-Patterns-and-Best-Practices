// old way
function add(a, b) {
    b = b!== undefined ? b : 10
    return a + b
}

console.log(add(5))

// new way
function add2(a, b = 10) {
    return a + b
}

console.log(add2(5))

// {}
function logMessage(message, ...moreMessages) {
    const message2 = moreMessages.length > 0 ? moreMessages : ['default']
    console.log(message, moreMessages)
}

logMessage('Hello js')
logMessage('a', 'b', 'c', 'd')