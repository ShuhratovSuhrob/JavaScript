let result = ''

function pickComputerMove() {
  const randomNumber = Math.random()

  if (randomNumber < 1 / 3) {
    return 'rock'
  } else if (randomNumber < 2 / 3) {
    return 'paper'
  } else {
    return 'scissors'
  }
}

function playGame(playerMove) {
  const computerMove = pickComputerMove()

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie'
    } else if (computerMove === 'paper') {
      result = 'Computer wins'
    } else if (computerMove === 'scissors') {
      result = 'You win'
    }
  }

  if (playerMove === 'paper') {
    if (computerMove === 'paper') {
      result = 'Tie'
    } else if (computerMove === 'rock') {
      result = 'You win'
    } else if (computerMove === 'scissors') {
      result = 'Computer wins'
    }
  }

  if (playerMove === 'scissors') {
    if (computerMove === 'scissors') {
      result = 'Tie'
    } else if (computerMove === 'rock') {
      result = 'Computer wins'
    } else if (computerMove === 'paper') {
      result = 'You win'
    }
  }

  displayWinner(computerMove, result)
}

function displayWinner(computerMove, result) {
  alert(`You picked scissors. Computer picked ${computerMove}. ${result}`)
}

document.querySelector('#rock').addEventListener('click', function () {
  playGame('rock')
})

document.querySelector('#paper').addEventListener('click', function () {
  playGame('paper')
})

document.querySelector('#sci').addEventListener('click', function () {
  playGame('scissors')
})
