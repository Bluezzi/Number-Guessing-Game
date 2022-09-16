//Guess the Number (GTN.js)

/*-------------------------

//Variables
var prompt = "Pick a number cap between ZERO and Infinity!";
var guess = "How many Guesses do you want?";
var higher = "Higher";``
var lower = "Lower";
var gameover = "GAMEOVER :(";
var youwin = "YOU WIN <3";



//User Input
    //Read line module
//Number Cap
const readline = require('readline');

const rl = readline.createInterface({input : process.stdin,
                                    output : process.stdout});
rl.question(/* figure out variable instead*/ //                         "Pick a number cap between ZERO and Infinity! \n",

/*-------------------------

(userInput)=>{
    
    console.log(userInput);
});

//How many guesses
const question2 = () => {

rl.question2( "How many Guesses do you want? \n",
(userInput)=>{

    console.log(userInput);
});
}

//Response for anything other than a number (Hey dummy thats not a number!) (no characters or symbols, only positive numbers)
    //Checks to make sure inputs are between 0 and Infinity (a number)
//let userInput = getUserInput();
//Define userInput here
/*
    if (isNaN(userInput)) {
        console.log(userInput + "is not a number, try again");
    }
*/

//Pick a number cap between ZERO and Infinity
    //User inputs the number

    
//How many Guesses do you want?
    //Limit on Guesses



//Response to each Guess (Higher, Lower, Hey dummy thats not a number, Please try again)



//Response that says "GAMEOVER :(" OR "YOU WIN <3" after the guess limit or the right number
    //On Gameover, restart the game to "Pick a number cap between ZERO and Infinity"

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
    rl.question(prompt, (answer) => {
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
      resolve()
    })
  })
}

const question3 = () => {
    return new Promise((resolve, reject) => {
      rl.question(gan, (answer3) => {
        resolve(answer3)
      })
    })
  }

  const question4 = () => {
    return new Promise((resolve, reject) => {
      rl.question(youwin, (answer4) => {
        console.log(`Congrats, the answer was ${answer4}`)
        resolve()
      })
    })
  }

  const question5 = () => {
    return new Promise((resolve, reject) => {
      rl.question(gameover, (answer5) => {
        console.log(`Your answer, ${answer5}, along with the rest, was not right lmao`)
        resolve()
      })
    })
  }

const main = async () => {
  let x /*number cap*/ = await question1()
  let y /*how many guesses (Take this answer and loop that many times, if they get it right exit early, if they dont get it in that number of Gueses, gameover)*/ = await question2()
  let z /*number they guessed*/  = await question3()
  let rn = between(0, x); /*Random number between cap and zero that is chose*/
  
  if (z == rn){
    console.log(youwin)
    } else if (z > rn){
    console.log("The Number is Higher")
    } else{
    console.log("They Number is Lower")
    }
console.log(`The Correct answer was ${rn}`)
  // await question4()
  // await question5()
  // rl.close()

  // //Random Number with cap
  // console.log(  
  //   between(0, x)
  // )

//put loop here
//Loop y times, while checking for right answer (exit early), then gameover if they dont get it

}


main().catch(error => {
    console.log(`Program crashed because: ${error}`);
});

//Number Generator
function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}
