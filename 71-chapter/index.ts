export type User = {
    fullname: string
    age: number
    salary: number
}

const u1: User = { fullname: "John", age: 10, salary: 50000 }
type User2 = Partial<User>;
const u2: User2 = { fullname: "John", salary: 50000 }
type User3 = Pick<User, "fullname" | "age">;
const u3: User3 = { fullname: "John", age: 10 }
type User4 = Omit<User, "fullname">;
const u4: User4 = { age: 10, salary: 50000 }