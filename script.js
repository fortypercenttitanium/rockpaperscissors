/* let pWins = 0;
let cWins = 0;
function computerPlay () {
    numGen = Math.floor(Math.random() * 3);
    switch(true){
        case numGen >= 2:
            return "rock";
            break;
        case numGen < 2 && numGen >= 1:
            return "paper";
            break;
        default:
            return "scissors"; 
    }
}
function humanPlay () {
    let decision = prompt("Choose rock, paper, or scissors:");
    decision = decision.toLowerCase();
        if (decision == "rock" || decision == "paper" || decision == "scissors") {
        return decision;
    } 
    else { 
    alert("Invalid selection");
    decision = null;
    }
}
function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        return `You both threw ${playerSelection}. It's a tie!`;
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            pWins++;
            return "You win! Rock crushes scissors.";
        } else {
            cWins++;
            return "You lose. Paper covers rock.";
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            pWins++;
            return "You win! Paper covers rock.";
        } else {
            cWins++;
            return "You lose. Scissors cut paper.";
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            pWins++;
            return "You win! Scissors cut paper.";
        } else {
            cWins++;
            return "You lose. Rock crushes scissors.";
        }
    }
    else {
        return "error";
    }
}

function game () {
    for (i=0; i<5; i++) {
        console.log(playRound(humanPlay(), computerPlay()));
    }
    
    if (pWins > cWins) {
        console.log(`You win, ${pWins} to ${cWins}!`);
    } else if (pWins < cWins) {
        console.log(`You lose, ${pWins} to ${cWins}.`);
    } else {
        console.log(`It's a tie, ${pWins} to ${cWins}`);
    }
}
game (); */