// const value: unknown = getValue()
// const name = (value as string).toUpperCase()

function assertIsString(value: unknown): asserts value is string {
    if (typeof value !== 'string') throw new Error('Value is not a string')
}

const value: unknown = 'test'
assertIsString(value)
const fullname = value.toUpperCase()
console.log(fullname)