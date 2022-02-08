let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

// work but not the right answer:
//function battle() {
 // hands = (Math.floor(Math.random() * 3) + 1)
 // if (hands === 1) {
  //  return "rock"
 // } else if (hands === 2) {
   // return "paper"
 // } else
   // return "scissor"
  //for (let i = 0; i < hands.length; i++){
  //}
//}

//console.log(battle())


function getHand() {
  let randomIndex = Math.floor(Math.random() * 3)
  return hands[randomIndex]
}

console.log(getHand())
