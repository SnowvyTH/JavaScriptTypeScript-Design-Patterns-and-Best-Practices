type Example<T> = {
    name: string;
    age: number;
    value: T
}

const ex: Example<boolean> = { name: 'joe', age: 30, value: true }