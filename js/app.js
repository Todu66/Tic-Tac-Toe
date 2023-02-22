const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';

cells.forEach(cell => {
	cell.addEventListener('click', handleClick, { once: true });
});

function handleClick(e) {
	const cell = e.target;
	cell.textContent = currentPlayer;
	cell.classList.add(currentPlayer);

	if (checkWin(currentPlayer)) {
		alert(`Player ${currentPlayer} wins!`);
		resetGame();
	} else if (checkDraw()) {
		alert('Draw!');
		resetGame();
	} else {
		currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
	}
}

function checkWin(player) {
	const winConditions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	return winConditions.some(condition => {
		return condition.every(index => {
			return cells[index].classList.contains(player);
		});
	});
}

function checkDraw() {
	return [...cells].every(cell => {
		return cell.classList.contains('X') || cell.classList.contains('O');
	});
}

function resetGame() {
	cells.forEach(cell => {
		cell.textContent = '';
		cell.classList.remove('X');
		cell.classList.remove('O');
	});
	currentPlayer = 'X';
	cells.forEach(cell => {
		cell.addEventListener('click', handleClick, { once: true });
	});
}
