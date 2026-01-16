function badPactice() {
    myGlobal = "this is global" // ไม่มี var, let, const
}

badPactice()
console.log(myGlobal)