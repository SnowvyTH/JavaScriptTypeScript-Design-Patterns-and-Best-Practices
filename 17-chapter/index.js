console.log(Number.MAX_SAFE_INTEGER)

console.log(JSON.parse('{"id": 9007199254740999}'))

const jsonData = '{"id": "9007199254740999"}'
const data = JSON.parse(jsonData, (key, value) => {
    if (key === 'id') {
        return BigInt(value)
    }
    return value
})

console.log(data)