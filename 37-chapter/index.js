function showMessage() {
    //setInterval("console.log('test')", 3000) // bad
    setInterval(() =>{
        console.log("hello js") // good
    }, 3000)

    setTimeout(() => {
        console.log("hello js 2") // good
    }, 3000)
}

showMessage()