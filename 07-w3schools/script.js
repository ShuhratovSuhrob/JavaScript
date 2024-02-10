function getTheDate() {
  document.getElementById('demo').innerHTML = Date()
}

function getMyName() {
  document.getElementById('myName').innerHTML =
    'My name is Suhrob. Happy to meet you'
}

function clickToBiggerSize() {
  document.getElementById('biggerSize').style.fontSize = '2rem'
}

function hidingParagraph() {
  document.getElementById('changeParagraph').innerHTML = 'Second paragraph'
}

let firstNumber = parseInt(prompt('Give me the first number'))
let secondNumber = parseInt(prompt('Give me the second number'))

let sum = firstNumber + secondNumber
function solveEquation() {
  document.getElementById('sum').innerHTML = `the sum: ${sum}`
}
