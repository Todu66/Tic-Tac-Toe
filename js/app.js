const cells = document.querySelectorAll('.cell');
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
let turn = 'X';
let gameOver = false;
let xScore = 0;
let oScore = 0;
const xScoreElem = document.getElementById('x-score');
const oScoreElem = document.getElementById('o-score');
const resetButton = document.getElementById('reset-button');
const newGameButton = document.getElementById('new-game-button');

function checkWin() {
  for (let i = 0; i < winningCombos.length; i++) {
    const combo = winningCombos[i];
    const a = cells[combo[0]].textContent;
    const b = cells[combo[1]].textContent;
    const c = cells[combo[2]].textContent;
    if (a === '' || b === '' || c === '') {
      continue;
    }
    if (a === b && b === c) {
      return [a, combo];
    }
  }
  return null;
}

function endGame(winner) {
  if (winner) {
    for (let i = 0; i < winner[1].length; i++) {
      cells[winner[1][i]].classList.add('win');
    }
    gameOver = true;
    if (winner[0] === 'X') {
      xScore++;
      xScoreElem.textContent = xScore;
    } else {
      oScore++;
      oScoreElem.textContent = oScore;
    }
    alert(`${winner[0]} is the winner!`);
  } else if (!winner && !gameOver) {
    alert('Tie game!');
    gameOver = true;
  }
}

function handleClick(e) {
  const cell = e.target;
  if (cell.textContent !== '' || gameOver) {
    return;
  }
  cell.textContent = turn;
  cell.classList.add(turn);
  const winner = checkWin();
  if (winner || isTie()) {
    endGame(winner);
  } else {
    turn = turn === 'X' ? 'O' : 'X';
  }
}

function isTie() {
  let tie = true;
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].textContent === '') {
      tie = false;
      break;
    }
  }
  return tie;
}

function resetScores() {
  xScore = 0;
  oScore = 0;
  xScoreElem.textContent = xScore;
  oScoreElem.textContent = oScore;
}

function newGame() {
  gameOver = false;
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove('win', 'X', 'O');
    cells[i].textContent = '';
  }
  turn = 'X';
}

resetButton.addEventListener('click', resetScores);
newGameButton.addEventListener('click', newGame);
for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', handleClick);
}
