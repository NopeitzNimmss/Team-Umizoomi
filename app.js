

var userChoice = prompt('Please enter Rock, Paper or Scissors.');
userChoice = userChoice.toLowerCase();

if (userChoice === 'rock' || userChoice === 'paper' 
    || userChoice === 'scissors') {
    document.write('You picked ' + userChoice + '<br />' )
} else {
    document.write('Please pick something specified.')
}

var computerPick = Math.random();
var computerChoice = 'scissors';
if (computerPick < 0.34) {
    computerChoice = 'rock';
} else if (computerPick <= 0.66 ) {
    computerChoice = 'paper';
} 

document.write('The computer picked: ' + computerChoice);

var compare = function(choice1, choice2) {
   if (choice1 === choice2) {
       return 'It is a tie';
    }
    if (choice1 === 'Rock' ) {
        if (choice2 === 'Paper' ) {
            return 'The computer won!'
        } else {
            return 'YOU WON!'
        }
    }

 if (choice1 === 'Paper')  {
    if (choice2 === 'Scissors')   {
        return 'The computar won!'
        } else {
         return 'YOU WON!'

        }
    
    if (choice1 === 'scissors') {
        if ( choice2 === 'Rock') {
            return 'The computer won!'
        }
    }



}


var winner = compare(userChoice, computerChoice);

document.write('The winner is '+ winner);