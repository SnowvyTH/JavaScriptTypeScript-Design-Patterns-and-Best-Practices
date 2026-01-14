/**
 * @typedef {Object} User
 * @property {string} fullname - ชื่อ-นามสกุล
 * @property {number} age - อายุ
 */

/**
 *  แสดงข้อมูลผู้ใช้งาน
 *  @param {User} user - ข้อมูลผู้ใช้
 *  @param {boolean} isActive - ทำงานอยู่หรือใหม่
 */

function printUser(user, isActive) {
    console.log(user.fullname)
    console.log(user.age)
    console.log(isActive ? 'true': 'false')
}

printUser({fullname: 'mary', age: 30}, true)

//printUser({fullname: 'john', age: 30})