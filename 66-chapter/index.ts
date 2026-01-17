// bad
interface UserEvent {
    showMessage(x: number): string
    showMessage(x: string): string
    showMessage(x: boolean): string
}

// good
interface UserEvent2 {
    showMessage(x: number | string | boolean): string
}