function game(obj) {
    let playerTurn = String(obj);

    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    if (playerTurn == "r" || playerTurn == "rock") {
        playerTurn = rock;
    } else if (playerTurn == "p" || playerTurn == "paper") {
        playerTurn = paper;
    } else if (playerTurn == "s" || playerTurn == "scissors") {
        playerTurn = scissors;
    } else {
        console.log("Invalid Input. Please Try Again.");
    }

    console.log(`You choose ${playerTurn}`);

    let computerNumber = Math.floor((Math.random() * 3) + 1); //Math.random generate a number equal to 0 and less then 1 (for ex. 0.943241....)
    let computerTurn = "";

    switch (computerNumber) {
        case 1:
            computerTurn = rock;
            break;
        case 2:
            computerTurn = paper;
            break;
        case 3:
            computerTurn = scissors;
            break;
    }

    console.log(`The computer chooses ${computerTurn}`);

    if ((playerTurn == rock && computerTurn == scissors) || (playerTurn == paper && computerTurn == rock) || (playerTurn == scissors && computerTurn == paper)) {
        console.log("You win!");
    }else if ((playerTurn == rock && computerTurn == rock) || (playerTurn == paper && computerTurn == paper) || (playerTurn == scissors && computerTurn == scissors)) {
        console.log("It's draw.");
    }else {
        console.log("You lose!");
    }
}
game("p");