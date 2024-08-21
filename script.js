let decInput = document.getElementById("dec-input")
let binInput = document.getElementById("bin-input")
let binLast = document.getElementById("bin-last")
let decLast = document.getElementById("dec-last")
let lastBinValue = ''
let lastDecValue = ''
let errorMsg = document.getElementById("error-msg")

decInput.addEventListener("input", () => {
    let decValue = parseInt(decInput.value)
    binLast.value = lastBinValue
    binInput.value = decValue.toString(2)
    lastBinValue = binInput.value
    decLast.value = lastDecValue
    lastDecValue = decInput.value
})

binInput.addEventListener("input", () => {
    function binValidator(num) {
        for (let i = 0; i < num.length; i++) {
            if (num[i] != "0" && num[i] != "1") {
                return false
            }
        }
        return true
    }

    let binValue = binInput.value

    if (binValidator(binValue)) {
        decInput.value = parseInt(binValue, 2)
        errorMsg.textContent = ""
    } else {
        errorMsg.textContent = "Please, enter a valid input"
    }
})