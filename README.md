# Word-Guess-Game
Word Guess Game - GUESS THE MOVIE TITLE

Given the need for an sufficiently large array of titles from which the player would have to guess, plus the need to store values for a variety of different game statuses and outcomes, I knew the code for my movie-title guessing game would be heavy on the variables. So that's where I started. 

I used "if" statements to handle the events of correct and incorrect letter guesses and "getElementById" to manipulate the DOM at the conclusion of each game. 

Once I had the basic word guess aspect of the game functioning, I next sought to add some video and audio to match the word. I considered this to be essential given the audiovisual nature of movies. But what I originally imagined to be finishing touches to my game turned out to be the most time-consuming and perplexing part of the coding process. Here's how I failed and finally succeeded with these final steps. After I found images and audio for each of the movie titles, I created arrays in script and corresponding image and audio elements for each in the html. Then in order to link the audio and images to the randomly selected word, I tried to combine all three properties (text, audio, image) into a single object array. 
