const roles = ['admin', 'user', 'guest'] as const
console.log(roles[0])

type Role = typeof roles[number]

const myRole: Role = 'admin'

console.log(myRole.includes('user2'))