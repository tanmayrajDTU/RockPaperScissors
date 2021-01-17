const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Error!');
    }
}
const getComputerChoice = () => {
        let choice = Math.floor(Math.random() * 3);
        if (choice === 0) {
            return 'rock';
        } else if (choice === 1) {
            return 'paper';
        } else {
            return 'scissors';
        }
    }
    //console.log(getComputerChoice());
const determineWinner = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
            return 'The game is a tie!';
        }
        if (userChoice === 'bomb') {
            return 'You Won!!!!';
        }
        if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
                return 'The computer won!';
            } else {
                return 'You Won!';
            }
        }
        if (userChoice === 'paper') {
            if (computerChoice === 'rock') {
                return 'You Won!';
            } else {
                return 'The computer won!';
            }
        }
        if (userChoice === 'scissors') {
            if (computerChoice === 'rock') {
                return 'The computer won!';
            } else {
                return 'You Won!';
            }
        }
    }
    //console.log(determineWinner('rock','rock'));
const playGame = () => {
    //  change the parameter of getUserChoice function as per your wish
    let userChoice = getUserChoice('bomb');
    let computerChoice = getComputerChoice();
    console.log(`User Choice : ${userChoice} `);
    console.log(`Computer Choice : 
  ${computerChoice}`);
    //now determing the winner
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();