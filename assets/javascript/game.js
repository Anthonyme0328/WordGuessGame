let computerChoices = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z" ];




let wins = 0;
let losses = 0;
let guessesRem = 10;
let clicked = [];

function computerGuess() {
    let chosenLetter = '';
    chosenLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return chosenLetter
}

function diffToTen(num){
  return 10 - num;
}

let computerGuessvar = computerGuess() ;
console.log

document.onkeyup = function(event) {
    let userGuess = event.key;
    clicked.push(userGuess);
    document.getElementById("userPress").textContent = clicked;
    winOrLoosefun(userGuess);
    console.log(computerGuessvar);
    console.log(guessesRem)
    
    
}


function winOrLoosefun(userGuessp){
    if (userGuessp === computerGuessvar) {
        wins += 1;
        userWins.textContent = wins;
        computerGuessvar = computerGuess() ;
        guessesRem += diffToTen(guessesRem);
        clicked = [];
        document.getElementById("userPress").textContent = clicked;
}
    if(userGuessp !== computerGuessvar){
        guessesRem -= 1 ;
        guessesLeft.textContent = guessesRem;
        if(guessesRem === 0){
            losses += 1;
            userLosses.textContent = losses;
            computerGuessvar = computerGuess() ; 
            guessesRem += diffToTen(guessesRem);
            clicked = [];
            document.getElementById("userPress").textContent = clicked;
}
}


    
    

    }
   



