const controller = new AbortController()
async function getData() {
    try {
        const signal = controller.signal
        const response = await fetch("https://api.codingthailand.com/api/version", { signal: signal })
        const data = response.json()
        return data
    } catch (error) {
        if (error.name = "AbortError") {
            console.log("Fetch request aborted")
        } else {
            console.error("Fetch failed: ", error)
        }
    }

}

const version = await getData()
console.log(version)
setTimeout(() => controller.abort(), 500)