// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
//const country = ["China", "India", "USA"]
//const fruits = ["Apples", "Bananas"]

//function generateSentence(desc, arr) {
  //for (let i = 0; i < country.length; i++) {
    //console.log(country[i])
    //desc = "largest country"
    //arr = country[i]
    //console.log(country[i])
    //return `The 3 ${desc} are ${arr}`
  //}
//}


//nsole.log(generateSentence(country))
//console.log(generateSentence(fruits))

function generateSentence(desc, arr) {
  let baseString = `The ${arr.length} ${desc} are `
  const lastIndex = arr.length - 1
  for (let i = 0; i < arr.length; i++) {
    if (i === lastIndex) {
      baseString += arr[i]
    } else {
      baseString += arr[i] + ", "
    }
  }
  return baseString
}

const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
console.log(sentence)
