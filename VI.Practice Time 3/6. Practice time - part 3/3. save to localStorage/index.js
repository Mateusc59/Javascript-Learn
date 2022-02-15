// Save a value to localStorage
// Delete your code and refresh the page
// Fetch your value from localStorage and log it outmyArray = ["row","column","tabs"]
myArray = ["row", "column", "tabs"]

localStorage.setItem("myArray", JSON.stringify(myArray))
console.log(localStorage.getItem("myArray")
)

//also

let array = localStorage.getItem("myArray")
console.log(array)
// must fetch the data and log out the result
