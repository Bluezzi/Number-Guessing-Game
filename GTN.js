//Guess the Number (GTN.js)

//Variables
var prompt = "Pick a number cap between ZERO and Infinity!";
var guess = "How many Guesses do you want?";
var gan = "Guess a number"
var higher = "Higher";
var lower = "Lower";
var gameover = "GAMEOVER :(";
var youwin = "YOU WIN <3";

//User Input
'use strict'

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question(prompt, answer => {
      console.log(`The Number cap is set to ${answer}`)
        if (isNaN(answer)) {
          reject("Hey dummy, that's not a number!")
        } else if (answer < 0) {
          reject("Please use a POSITIVE Number!")
        } else {
          resolve (answer)
        }
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question(guess, (answer2) => {
      console.log(`You have ${answer2} tries to guess the number!`)
      if (isNaN(answer2)) {
        reject("Hey dummy, that's not a number!")
      } else if (answer2 < 0) {
        reject("Please use a POSITIVE Number!")
      } else {
        resolve (answer2)
      }
  })
})
}

const question3 = () => {
    return new Promise((resolve, reject) => {
      rl.question(gan, (answer3) => {
        if (isNaN(answer3)) {
          reject("Hey dummy, that's not a number!")
        } else if (answer3 < 0) {
          reject("Please use a POSITIVE Number!")
        } else {
          resolve (answer3)
        }
    })
  })
  }

const main = async () => {
  let x /*number cap*/ = await question1()
  let y /*how many guesses (Take this answer and loop that many times, if they get it right exit early, if they dont get it in that number of Gueses, gameover)*/ = await question2()
  let rn = between(0, x); /*Random number between cap and zero that is chose*/
  let z = 0

    while (y > 0){
    console.log(`You have ${y} tries remaining`)

    y = y - 1

    z /*number they guessed*/  = await question3()

    if (z < rn){
      console.log("The Number is Higher")
      } else if (z > rn){
      console.log("The Number is Lower")
      } else {break}
  }

  if (y == -1){
    console.log(gameover, `The corrent number was ${rn}`)
  }
  else{
  console.log(youwin, `The corrent number was ${rn}`)
  }
  
}


main().catch(error => {
    console.log(`Program crashed because: ${error.stack}`);
});

//Number Generator
function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}

//Loop main
const playgame = async () => {
  for (i=0;i<=5;i++) {
    await main
}
}