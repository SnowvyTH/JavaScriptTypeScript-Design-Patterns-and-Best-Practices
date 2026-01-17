class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotFound Error"
    }
}

function showMsg(fullname) {
    if (fullname === "") {
        // custom error class
        const error = new NotFoundError("404 not found")
        error.stack = "404 fullname not found"
        throw error
    }

    if (fullname === "mary") {
        //throw "something went wrong" // bad
        //throw new Error("something went wrong") // good
        const error = new Error("Invalid Input")
        error.name = "Validation Error"
        error.stack = "Invalid Mary Input"
        throw error
    }

    return fullname
}

try {
    console.log(showMsg(""))
} catch (error) {
    if (error instanceof NotFoundError) {
        console.error(error.message);
    } else {
        console.error(error.name)
        console.error(error.message)
        console.error(error.stack)
    }
}