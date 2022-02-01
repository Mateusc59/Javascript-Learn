// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".


let errorRed = document.getElementById("error")

function oups() {
  errorRed.innerText = "Something went wrong, please try again"
}
