const value = 100

// bad
if (value) {
    console.log('ไม่รันในนี้เพราะ 0 คือ falsy')
}

// good
if (value === 0) {
    console.log('ไม่มีปัญหา จะรันเฉพาะ value เท่ากับ 0')
}

const score = null
if (score != null) {
    console.log('score is defined')
} else {
    console.log('score is null or undefined')
}

const text = ''
if (text === '') {
    console.log('text is Empty')
} else {
    console.log('text non Empty')
}

const input = 0
if (typeof input === 'number' && input !== 0) {
    console.log('valid number')
} else {
    console.log('invalid number or zero')
}

const obj = {}
if (Object.keys(obj).length > 0) {
    console.log('object is not empty')
} else {
    console.log('object is empty')
}

