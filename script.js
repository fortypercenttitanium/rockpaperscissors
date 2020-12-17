//set score
let pWins = 0;
let cWins = 0;
//prep elements to be appended when the score is tallied
let body = document.querySelector('body');
let pWinCount = document.createElement('span');
let cWinCount = document.createElement('span');
pWinCount.setAttribute('class', 'wincount');
cWinCount.setAttribute('class', 'wincount');
//game end modal box
let modal = document.querySelector('#modal');
let gameEndMessage = modal.querySelector('#game-end p');
let restartBtn = modal.querySelector('#restart');
let closeBtn = modal.querySelector('#close');
restartBtn.addEventListener('click', () => location.reload());
closeBtn.addEventListener('click', () => {
	modal.style.display = 'none';
	document.querySelector('#playcontainer').style.display = 'none';
});
//RNG computer play
function computerPlay() {
	numGen = Math.floor(Math.random() * 3);
	switch (true) {
		case numGen >= 2:
			return 'rock';
			break;
		case numGen < 2 && numGen >= 1:
			return 'paper';
			break;
		default:
			return 'scissors';
	}
}
//game mechanics
function playRound(playerSelection, computerSelection) {
	document.querySelector('#rules').textContent = '';
	const gameWindow = document.querySelector('.rules-result-container');
	//feedback on what happened
	const text = gameWindow.querySelector('.turn-result');
	text.textContent = `You throw ${playerSelection}. Computer throws ${computerSelection}.`;
	gameWindow.appendChild(text);
	//if it's the first throw, make a result window and insert it where the rules were
	if (!document.querySelector('#result')) {
		const result = document.createElement('div');
		result.setAttribute('id', 'result');
		gameWindow.insertBefore(result, gameWindow.lastChild);
	}
	if (playerSelection == computerSelection) {
		result.textContent = `It's a tie!`;
	} else if (playerSelection == 'rock') {
		if (computerSelection == 'scissors') {
			pWins++;
			result.textContent = 'You win! Rock crushes scissors.';
		} else {
			cWins++;
			result.textContent = 'You lose. Paper covers rock.';
		}
	} else if (playerSelection == 'paper') {
		if (computerSelection == 'rock') {
			pWins++;
			result.textContent = 'You win! Paper covers rock.';
		} else {
			cWins++;
			result.textContent = 'You lose. Scissors cut paper.';
		}
	} else if (playerSelection == 'scissors') {
		if (computerSelection == 'paper') {
			pWins++;
			result.textContent = 'You win! Scissors cut paper.';
		} else {
			cWins++;
			result.textContent = 'You lose. Rock crushes scissors.';
		}
	} else {
		return 'error';
	}
	//log the current win count
	pWinCount.textContent = `Your wins: ${pWins}`;
	cWinCount.textContent = `Computer wins: ${cWins}`;

	const resultCounter = document.createElement('div');
	resultCounter.id = 'resultcounter';
	gameWindow.appendChild(resultCounter);
	resultCounter.appendChild(pWinCount);
	resultCounter.appendChild(cWinCount);

	//win and lose condition with a reload to try again
	if (pWins == 5) {
		gameEndMessage.textContent = `You win, ${pWins} to ${cWins}! Rematch?`;
		modal.style.display = 'block';
	}
	if (cWins == 5) {
		gameEndMessage.textContent = `You lose, ${pWins} to ${cWins}. Try again?`;
		modal.style.display = 'block';
	}
}
//player selection, and begin the game.
const icons = document.querySelectorAll('.icon');
[...icons].forEach((item) => {
	item.addEventListener('click', (e) => {
		const playerSel = e.currentTarget.getAttribute('data-key');
		playRound(playerSel, computerPlay());
	});
});
