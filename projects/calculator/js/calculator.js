// number is the first thing that a user presses, so we start there


// listen for clicks on numbers
const arrayOfButtons = document.querySelectorAll(`.number-buttons .button`)

// we want to add event listener to every button in the list
arrayOfButtons.forEach((button) => {
  // do something with `button`
  button.addEventListener(`click`, onNumberClicked)
})

let firstNumber = `nothing yet`
let firstNumberHasBeenChosen = false

function onNumberClicked(event) {
  // get the button which was clicked (HTML element)
  const button = event.target

  // if an operator has been clicked, clear the number and save the old one
  if(operatorHasBeenChosen && !firstNumberHasBeenChosen) {
    firstNumber = Number(document.querySelector(`.answer`).innerText)
    document.querySelector(`.answer`).innerText = ``
    firstNumberHasBeenChosen = true
  }

  // get the attribute from button (this function exists on all HTML elements)
  const numberWhichWasClicked = button.getAttribute(`num`)

  // add `number` to the number which is already in the input
  const numberCurrentlyInInput = document.querySelector(`.answer`).innerText

  // the new number is whatever was there before, plus the one we need to add
  const newNumber = numberCurrentlyInInput + numberWhichWasClicked

  // set the input text to be the new number
  document.querySelector(`.answer`).innerText = newNumber
}


// next goal!

// get the operators
const arrayOfOperatorButtons = document.querySelectorAll(`.operators .button`)

// we want to add event listener to every button in the list
arrayOfOperatorButtons.forEach((button) => {
  // do something with `button`
  button.addEventListener(`click`, onOperatorClicked)
})

// global variable operator
let operator = `nothing yet`
let operatorHasBeenChosen = false

// we want the computer to save that the operator was pressed, for later.
function onOperatorClicked(event) {
  operatorHasBeenChosen = true
  // get the operator button which was clicked
  const button = event.target

  // get the operator off of that button
  // save that operator in a variable
  operator = button.textContent
}




// NEXT GOAL
// when the users presses equals
document.querySelector(`.equal`).addEventListener(`click`, onEqualClick)

// we want to do the operator on firstNumber and whatever is in the box
function onEqualClick() {
  const secondNumber = Number(document.querySelector(`.answer`).innerText)

  let answer;
  if(operator === `÷`) {
    answer = firstNumber / secondNumber
  } else if (operator === `×`) {
    answer = firstNumber * secondNumber
  } else if (operator === `-`) {
    answer = firstNumber - secondNumber
  } else {
    answer = firstNumber + secondNumber
  }

  document.querySelector(`.answer`).innerText = answer
  operatorHasBeenChosen = false
  firstNumberHasBeenChosen = false
  firstNumber = `nothing yet`
  operator = `nothing yet`
}

// NEXT GOAL
// when the user presses delete
document.querySelector(`.delete`).addEventListener(`click`, onDelClick)

function onDelClick() {
  // we get the number in the input
  const inputNumber = document.querySelector(`.answer`).innerText

  // we take one number off the back
  const newNumber = inputNumber.substring(0, inputNumber.length - 1)

  // and we set the value of the input to be the new number
  document.querySelector(`.answer`).innerText = newNumber
}

// FINAL GOAL
// when the user presses delete
document.querySelector(`.ac`).addEventListener(`click`, onAcClick)

function onAcClick() {
  // and we set the value of the input to be nothing
  document.querySelector(`.answer`).innerText = null
}
