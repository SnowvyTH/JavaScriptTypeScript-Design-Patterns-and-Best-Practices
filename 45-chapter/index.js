function badFunction(a, a) {
    return a + a
}

console.log(badFunction(10, 4))

function badFunction2(a, b, a) {
    return a + b + a
}

console.log(badFunction2(10, 4, 2))