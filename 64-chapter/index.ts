// bad
declare function fn(x: unknown): unknown
declare function fn(x: HTMLElement): number
declare function fn(x: HTMLDivElement): string

let myEl: HTMLDivElement
const y = fn(myEl)

// good
declare function fn2(x: HTMLDivElement): string
declare function fn2(x: HTMLElement): number
declare function fn2(x: unknown): unknown

let myEl2: HTMLDivElement
const y2 = fn2(myEl2)

let myEl3: HTMLElement
const y3 = fn2(myEl3)