// bad
{/* <button onclick="alert('Hello')">Click me</button> */}

// good
<button id="myBtn">Click me</button>

// js
document.getElementById("myBtn").addEventListener("click", function() {
    alert("hello")
})