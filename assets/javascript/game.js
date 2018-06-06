var wordOptions = 
 ["2001","alien","amadeus","cabaret","casablanca","chinatown","gladiator","goodfellas",
 "jaws","rocky","sideways","tron","vertigo"];

 var imageOptions = ["assets/images/2001.png","assets/images/alien.png","assets/images/amadeus.png","assets/images/cabaret.png","assets/images/casablanca.png","assets/images/chinatown.png",
 "assets/images/gladiator.png","assets/images/goodfellas.png","assets/images/jaws.png","assets/images/rocky.png","assets/images/sideways.png","assets/images/tron.png","assets/images/vertigo.png"];

 var soundoptions = ["assets/audio/2001.mp3","assets/audio/alien.png","assets/audio/amadeus.png","assets/audio/cabaret.png","assets/audio/casablanca.png","assets/audio/chinatown.png",
 "assets/audio/gladiator.png","assets/audio/goodfellas.png","assets/audio/jaws.png","assets/audio/rocky.png","assets/audio/sideways.png","assets/audio/tron.png","assets/audio/vertigo.png"];


var randomNumber = 0;

 var selectedWord = "";
 var lettersinWord = [];
 var numBlanks = 0;
 var blanksAndSuccesses = [];
 var wrongLetters = [];

 var winCount = 0;
 var lossCount = 0;
 var remainingGuesses = 10;

 var selectedImage = ""; 

 function startGame()   {
     randomNumber = Math.floor(Math.random() * wordOptions.length);
     selectedWord = wordOptions[randomNumber];
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
console.log(selectedImage);
     
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
    
    document.getElementById("guessesremaining").innerHTML = remainingGuesses;
    document.getElementById("currentword").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("lettersguessed").innerHTML = wrongLetters.join(" ");
    
    

    if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
        winCount++;

        selectedImage = imageOptions[randomNumber];
        document.getElementById("image").src = selectedImage;

        document.getElementById("you").innerHTML = "YOU!";

        var titleWins = selectedWord.toUpperCase();
        document.getElementById("titlewins").innerHTML = titleWins;       
        document.getElementById("wins").innerHTML = winCount;
       
       
        startGame();
    }

    else if (remainingGuesses == 0) {
        lossCount++;
        document.getElementById("you").innerHTML = "SOMEONE ELSE!";

        document.getElementById("losses").innerHTML = lossCount;

        startGame();
    }
}

 startGame();

 document.onkeyup = function(event) {
     var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
     checkLetters(letterGuessed);
     roundComplete();

 }


 console.log("Wins: " + winCount + " | Losses: " + lossCount + " | Guesses Remaining: " + remainingGuesses);




/*
 var myStrings = 
 ["s1","s2"];
 var myImages =
 ["img_s1","img_s2"];
 var selectedString = "";
 var lettersinString = [];
 var numBlanks = 0;
 var noAndYes = [];
 var wrongLetters = [];
 var winCount = 0;
 var lossCount = 0;
 var remainingGuesses = 10;
 function randomString()   {
     selectedString = myStrings[Math.floor(Math.random() * myStrings.length)];
     lettersinString = selectedString.split("");
     numBlanks = lettersinString.length;
     remainingGuesses = 10;
     wrongLetters = [];
     noAndYes = [];
     for (var i = 0; i < numBlanks; i++) {
         noAndYes.push("_");
     }
     document.getElementById("current-string").innerHTML = noAndYes.join(" ");
     document.getElementById("guesses-remaining").innerHTML = remainingGuesses;
     document.getElementById("wins").innerHTML = winCount;
     document.getElementById("losses").innerHTML = lossCount;
     document.getElementById("image-container").innerHTML = ???
     
 }
 window.onload = setup();
   
    document.getElementById("restart").onclick = setup;
*/

 