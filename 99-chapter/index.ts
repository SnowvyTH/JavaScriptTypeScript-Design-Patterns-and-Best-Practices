const options = {
    dark: 'dark mode',
    light: 'light mode'
} as const

type ThemeOptions = keyof typeof options

function setTheme(value: ThemeOptions) {

}

const filter = {
    category: 'book',
    sort: 'asc',
    page: 1
} as const

type FilterKey = keyof typeof filter