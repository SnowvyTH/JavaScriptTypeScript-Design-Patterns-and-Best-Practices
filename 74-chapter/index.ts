// bad
function sum(a: number, b: number) {
    return a + b
}

console.log(sum(1, 2))

// good
function sum2(a: number, b: number): number {
    return a + b
}

console.log(sum2(1, 2))

function showMessage(): void {
    console.log("Hello Message")
}