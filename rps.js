

var userChoice = prompt (' Please enter Rock, Paper or Scissors.');
userChoice = userChoice.toLowerCase();

if (userChoice === 'rock' || userChoice === 'paper'
    || userChoice === 'scissors')  {
    document.write('You picked ' + userChoice + '<br />' )
    } else {
    document.write(' Please pick something specified.')
    }

    var computarPick = Math.random();
    var computarPick = 'scissors'; 
    if (computarPick < 0.34 ) {
        computarChoice = 'rock';
    } else if (computarPick <= 0.66 ) {
         computarChoice = 'paper';
    }
document.write('The computar picked: ' + computarChoice);


