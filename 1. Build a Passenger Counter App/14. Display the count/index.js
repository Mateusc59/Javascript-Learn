// document.getElementById("count-el").innerText = 5

// change the count-el in the HTML to reflect the new count

let countEl = document.getElementsById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}
