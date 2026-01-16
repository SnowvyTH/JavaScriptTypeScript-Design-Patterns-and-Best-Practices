const parentObj = {
    address: 'address from prototype'
}

const childObj = Object.create(parentObj)
childObj.province = 'province is own property'

// ใช้ for...in โดยไม่ตรวจสอบ bad
for (const key in childObj) {
    console.log(`${key}: ${childObj[key]}`)
}
console.log("=====Good=====")
// good ใช้ hasOwn
for (const key in childObj) {
    if (!Object.hasOwn(childObj, key)) continue;
    
    const element = childObj[key];
    console.log(element)   
}
console.log("=====Best=====")
//best
Object.keys(childObj).forEach(key => {
    console.log(`${key}: ${childObj[key]}`)
})
for (const [key, value] of Object.entries(childObj)) {
    console.log(`${key}: ${value}`)
}