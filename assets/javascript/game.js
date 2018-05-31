 // declare a variable equal to an array of words for the player to guess //

 var movieTitles = 
 ["2001","alien","amadeus","cabaret","casablanca","chinatown","gladiator","goodfellas",
 "jaws","rocky","sideways","tron","vertigo"];

 console.log(movieTitles);

 // declare a variable equal to a random selection of a word from the array //

 var randomTitle = movieTitles[Math.floor(Math.random() * movieTitles.length)];

 // declare a variable equal to the length of the randomly selected word displayed as blank spaces //

 var titleBlanks = [];
 for (var i = 0; i < randomTitle.length; i++)  {
     titleBlanks[i] = "_";
 }    

 // declare a variable equal to the number of unknown letters in the randomly selected word //

 var numBlanks = randomTitle.length;

 

 // create a while-loop that runs as long as some (> 0) letters in the randomly selected word remain unknown //


// tell player to "press any key to get started" //

function startGame()    {
    document.getElementById("currentword").innerHTML = titleBlanks;
}

/* if letter entered is in word, replace _ with letter. if not, add letter to "lettersguessed" 
and reduce "guessesmaining by 1."*/

var guess = titleBlanks.join(" ");

/*
while (numBlanks > 0)   {
    document.getElementById("currentword").innerHTML = titleBlanks;
    
    (titleBlanks.join(" "));
    var guess = prompt("Enter a letter or click Cancel to end game.");
    if (guess === null) {
        break;
    }
        else if (guess.length !== 1)    {
            alert("Enter a letter.");
        }
            else {
                for (var j = 0; j < randomTitle.length; j++)    {
                    if (randomTitle[j] === guess)   {
                        titleBlanks[j] = guess;
                        numBlanks--;
                    }
                }
            }
        }


var correctLetter = document.getElementById("l3");
       
    document.onkeypress = function() {
        correctLetter.textContent = event.key;
    };

/*
 while (numBlanks > 0)   {
     alert(titleBlanks.join(" "));
     var guess = prompt("Enter a letter or click Cancel to end game.");
     if (guess === null) {
         break;
     }
         else if (guess.length !== 1)    {
             alert("Enter a letter.");
         }
             else {
                 for (var j = 0; j < randomTitle.length; j++)    {
                     if (randomTitle[j] === guess)   {
                         titleBlanks[j] = guess;
                         numBlanks--;
                     }
                 }
             }
         }

         alert(titleBlanks.join(" "));
         alert("Congratulations! The title is " + randomTitle + ".");
         

        console.log(randomTitle);

        console.log(titleBlanks);
       
        console.log(numBlanks);


        //lowercase to uppercase conversion//

        <!DOCTYPE html>
<html>
<body>

<p>A function is triggered when the user releases a key in the input field. The function transforms the character to upper case.</p>
Enter your name: <input type="text" id="fname" onkeyup="myFunction()">

<script>
function myFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}
</script>

</body>
</html>
        */