// html
<button id="myBtn">Click me</button>

// js
const myBtn = document.getElementById("myBtn")

function handleClick() {
    alert("hello")
    myBtn.removeEventListener("click", handleClick) // good
}

myBtn.addEventListener("click", handleClick, {
    once: true // automatically remove when invoked
})