// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("codedMessage", () => {
  it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
    expect(codedMessage(secretCodeWord1)).toEqual(["L4ck4d41s1c4l"])
    expect(codedMessage(secretCodeWord2)).toEqual(["Gobbledygook"])
    expect(codedMessage(secretCodeWord3)).toEqual(["Eccentric"])
  })
})


// b) Create the function that makes the test pass.

//create a function called coded message that takes in a parameter of string
//created a variable that splits the string into an array
//map over the variables
//In the map create a conditional that will take the value and check to see if its a letter in question
// or if the value is the same letter but Capitalized
// if there is a letter it returns the number
// else it returns the letter
// returns the mapped variable and join it so that it is a string

const codedMessage = (string) => {
  let splitString = string.split("")
  let mappedSplit = splitString.map(value) => {
      if(value === "a" || value === "A") {
        return "4"
      }
      else if(value === "e"){
        return "1"
      }
      else if (value === "i"){
        return "1"
      }
      else if (value === "o") {
        return "0"
      } else {
        return value
  }
})
return mappedSplit
//confused on what to put here

console.log(codedMessage(secretCodeWord1))
console.log(codedMessage(secretCodeWord2))
console.log(codedMessag(secretCodeWord3))


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("particularLetter", () => {
  it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
    expect(particularLetter(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
    expect(particularLetter(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})


// b) Create the function that makes the test pass.

// create a function called particularLetter that takes in an array and string as a parameter
// use filter method to return words that only contain the particular Letter
// return values that only contain particular Letter

const particularLetter = (array) => {

return array.filter(value => arrayOfWords["a"])

// not sure how to write this part out
}
console.log(particularLetter(arrayOfWords1, a))
console.log(particularLetter(arrayOfWords2, e))

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("fullHouse", () => {
  it("takes in an array of 5 numbers and determines whether or not the array is a “full house", () => {
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
  })
})


// b) Create the function that makes the test pass.

//create a function called fullHouse
// take in an array of numbers
// create if/else statements
// if statement takes in hand1 array and outputs "true"
// elseif statement takes in hand2 & 3 arrays and outputs "false"
// else returns "invalid entry"
// console log each array and output true and false accordingly for each array

const fullHouse = (array) => {
  if array === ["5","5","3","3"]
return "true"
  elseif array === ["5,5,3,3,4"] || ["5", "5", "5", "5", "4"]
return "false"
  else
return "invalid entry"
}
console.log(fullHouse(hand1))
console.log(fullHouse(hand2))
console.log(fullHouse(hand3))
