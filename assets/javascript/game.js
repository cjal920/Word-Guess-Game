//global variables
var wordOptions = ["2001","alien","amadeus","cabaret","casablanca","chinatown","gladiator","goodfellas",
 "jaws","lawrence-of-arabia","rocky","sideways","tron","vertigo"];

 console.log(wordOptions);

 var imageOptions = ["assets/images/2001.png","assets/images/alien.png","assets/images/amadeus.png","assets/images/cabaret.png","assets/images/casablanca.png","assets/images/chinatown.png",
 "assets/images/gladiator.png","assets/images/goodfellas.png","assets/images/jaws.png","assets/images/lawrence-of-arabia.png","assets/images/rocky.png","assets/images/sideways.png","assets/images/tron.png","assets/images/vertigo.png"];

 var audioOptions = ["assets/audio/2001.mp3","assets/audio/alien.mp3","assets/audio/amadeus.mp3","assets/audio/cabaret.mp3","assets/audio/casablanca.mp3","assets/audio/chinatown.mp3",
 "assets/audio/gladiator.mp3","assets/audio/goodfellas.mp3","assets/audio/jaws.mp3","assets/images/lawrence-of-arabia.mp3","assets/audio/rocky.mp3","assets/audio/sideways.mp3","assets/audio/tron.mp3","assets/audio/vertigo.mp3"];

 var randomNumber = 0;

 var selectedWord = "";
 var lettersinWord = [];
 var numBlanks = 0;
 var blanksAndFills = [];
 var wrongLetters = [];

 //game counters
 var winCount = 0;
 var lossCount = 0;
 var remainingGuesses = 5;


 //functions
 function startGame()   {
     randomNumber = Math.floor(Math.random() * wordOptions.length);
     selectedWord = wordOptions[randomNumber];
     lettersinWord = selectedWord.split("");
     numBlanks = lettersinWord.length;
     //selectedWord.replace(/\s/g, "-");

//reset
     remainingGuesses = 5;
     wrongLetters = [];
     blanksAndFills = [];
     
     for (var i = 0; i < numBlanks; i++) {
         blanksAndFills.push("_");
     }

     document.getElementById("currentword").innerHTML = blanksAndFills.join(" ");
     document.getElementById("guessesremaining").innerHTML = remainingGuesses;
     document.getElementById("wins").innerHTML = winCount;
     document.getElementById("losses").innerHTML = lossCount;

console.log(selectedWord);
console.log(lettersinWord);
console.log(numBlanks);
console.log(blanksAndFills);
console.log(wrongLetters);

     
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
                blanksAndFills[i] = letter;
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
    document.getElementById("currentword").innerHTML = blanksAndFills.join(" ");
    document.getElementById("lettersguessed").innerHTML = wrongLetters.join(" ");
    
    if (lettersinWord.toString() == blanksAndFills.toString()) {
        winCount++;

        selectedImage = imageOptions[randomNumber];
        document.getElementById("image").src = selectedImage;

        selectedAudio = audioOptions[randomNumber];
        document.getElementById("audio").src = selectedAudio;

        document.getElementById("whom").innerHTML = "YOU!";

        var titleWins = selectedWord.toUpperCase();
        document.getElementById("titlewins").innerHTML = titleWins;       
        document.getElementById("wins").innerHTML = winCount;

    }

    else if (remainingGuesses == 0) {
        lossCount++;
        document.getElementById("whom").innerHTML = "SOMEONE ELSE!";

        document.getElementById("losses").innerHTML = lossCount;
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

 