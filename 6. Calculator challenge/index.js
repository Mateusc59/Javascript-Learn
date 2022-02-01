let num1 = 8
let num2 = 2

let number1 = document.getElementById("num1-el").textContent = num1
let number2 = document.getElementById("num2-el").textContent = num2

let sum = document.getElementById("sum-el")



// Create four functions: add(), subtract(), divide(), multiply()
function add() {
  totalSum = num1 += num2
  sum.innerText = totalSum
  sum.innerText = "Sum : " + totalSum + " (since 8 + 2 = 10)"

}


function substract() {
  totalSum = num1 -= num2
  sum.innerText = totalSum
}

function divide() {
  totalSum = num1 /= num2
  sum.innerText = totalSum
}

function multiply() {
  totalSum = num1 *= num2
  sum.innerText = totalSum
}
// Call the correct function when the user clicks on one of the buttons

// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
