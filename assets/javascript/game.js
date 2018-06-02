//global
var wordOptions = 
 ["2001","alien","amadeus","cabaret","casablanca","chinatown","gladiator","goodfellas",
 "jaws","rocky","sideways","tron","vertigo"];

 var selectedWord = "";
 var lettersinWord = [];
 var numBlanks = 0;
 var blanksAndSuccesses = [];
 var wrongLetters = [];

//functions
 var winCount = 0;
 var lossCount = 0;
 var remainingGuesses = 10;

 //main process
 function startGame()   {
     selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
     lettersinWord = selectedWord.split("");
     numBlanks = lettersinWord.length;

     remainingGuesses = 10;
     wrongLetters = [];
     blanksAndSuccesses = [];

     for (var i = 0; i < numBlanks; i++) {
         blanksAndSuccesses.push("_");
     }

     document.getElementById("currentword").innerHTML = blanksAndSuccesses.join(" ");
     document.getElementById("guessesremaining").innerHTML = remainingGuesses;
     document.getElementById("wins").innerHTML = winCount;
     document.getElementById("losses").innerHTML = lossCount;

console.log(selectedWord);
console.log(lettersinWord);
console.log(numBlanks);
console.log(blanksAndSuccesses);
     
 }

function checkLetters(letter)   {
    var isletterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter)   {
            isletterInWord = true;
        }
    }

    if (isletterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if(selectedWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
        }
    }
}

else {
    wrongLetters.push(letter);
    remainingGuesses--
    
}
}

function roundComplete() {
    console.log("Wins: " + winCount + " | Losses: " + lossCount + " | Guesses Remaining: " + remainingGuesses);

    document.getElementById("guessesremaining").innerHTML = remainingGuesses;
    document.getElementById("currentword").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("lettersguessed").innerHTML = wrongLetters.join(" ");

    if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;
        alert("You Won!");

        document.getElementById("titlewins").innerHTML = selectedWord;
        document.getElementById("wins").innerHTML = winCount;

        startGame();
    }

    else if (remainingGuesses == 0) {
        lossCount++;
        alert("You Lost!");

        document.getElementById("losses").innerHTML = lossCount;

        startGame();
    }
}
    
 startGame();

 document.onkeyup = function(event) {
     var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
     checkLetters(letterGuessed);
     roundComplete();

     console.log(letterGuessed);
 }


