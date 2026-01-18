type AppConfig = {
    mode: 'dark' | 'light';
    version: number;
    debug: boolean;
}

const config = {
    mode: 'dark',
    version: 1,
    debug: true,
} satisfies AppConfig

console.log(config)