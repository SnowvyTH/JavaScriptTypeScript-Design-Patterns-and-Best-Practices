const fetchData = async (item) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`fetched ${item}`), 1000)
    })
}

// bad
const processItems = (items) => {
    items.forEach(async (item) => {
        const result = await fetchData(item)
        console.log(result)
    })
    console.log("processing complete")
}

processItems(['A', 'B', 'C'])
console.log("------- use for of --------")
// good use for...of
const processItems2 = async (items) => {
    for (const item of items) {
        const result = await fetchData(item)
        console.log(result)
    }
    console.log("processing complete")
}

processItems2(['D', 'E', 'F'])