let result = ''
let computerMove = ''

function pickComputerMove() {
  const randomNumber = Math.random()

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock'
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper'
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors'
  }

  return computerMove
}

function playGame(playerMove) {
  if (playerMove === 'rock') {
    const rockBtn = document.querySelector('#rock')
    rockBtn.addEventListener('click', function () {
      let computerMove = pickComputerMove()

      if (computerMove == 'rock') {
        result = 'Tie'
      } else if (computerMove == 'paper') {
        result = 'Computer wins'
      } else if (computerMove == 'scissors') {
        result = 'You win'
      }

      displayWinner(computerMove, result)
    })
  }

  if (playerMove === 'paper') {
    const paperBtn = document.querySelector('#paper')
    paperBtn.addEventListener('click', function () {
      let computerMove = pickComputerMove()

      if (computerMove == 'paper') {
        result = 'Tie'
      } else if (computerMove == 'rock') {
        result = 'You win'
      } else if (computerMove == 'scissors') {
        result = 'Computer wins'
      }

      displayWinner(computerMove, result)
    })
  }

  if (playerMove === 'scissors') {
    const sciBtn = document.querySelector('#sci')
    sciBtn.addEventListener('click', function () {
      const computerMove = pickComputerMove()

      if (computerMove === 'scissors') {
        result = 'Tie'
      } else if (computerMove === 'rock') {
        result = 'Computer wins'
      } else if (computerMove === 'paper') {
        result = 'You win'
      }

      displayWinner(computerMove, result, playerMove)
    })
  }
}

function displayWinner(computerMove, result) {
  alert(`You picked scissors. Computer picked ${computerMove}. ${result}`)
}
