// Try to modify the expression so that we get a range from 1 to 6


let randomNumber = Math.floor(Math.random() * 6) + 1

// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice() {
  randomNumber = Math.floor(Math.random() * 6) + 1
  return randomNumber
}

console.log(rollDice())
