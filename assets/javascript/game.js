// GLOBAL VARIABLES
//--------------------------------------------------------------------------------------
//Arrays and Varibles
var wordOptions = ["kirk", "spock", "picard", "riker", "sulu", "ohura", "scotty", "laforge", "worf", "sisko", "janeway", "tuvok", "nelix", "dax"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = []; //_ _ _ _ _ 
var wrongLetters = [];

//Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

//FUNCTIONS
//------------------------------------------

function startGame() {
  selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
  lettersInWord = selectedWord.split("");
  numBlanks = lettersInWord.length;

  //Reset
  guessesLeft = 9;
  wrongLetters = [];
  blanksAndSuccesses = [];

  //Populate Blanks and Successes
  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push(" _");
  }

  //Change html
  document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("");
  document.getElementById("numGuesses").innerHTML = guessesLeft;
  document.getElementById("winCounter").innerHTML = winCount;
  document.getElementById("lossCounter").innerHTML = lossCount;


  //Testing/Debugging
  console.log(selectedWord);
  console.log(lettersInWord);
  console.log(numBlanks);
  console.log(blanksAndSuccesses);



}

function checkLetters(letter) {
  // check if letter exists in word

  var isLetterInWord = false;

  for (var i = 0; i < numBlanks; i++) {
    if (selectedWord[i] == letter) {
      isLetterInWord = true;

    }
  }
  // Check where in word letter exists, then populate blank spaces
  if (isLetterInWord) {
    for (var i = 0; i < numBlanks; i++) {
      if (selectedWord[i] == letter) {
        blanksAndSuccesses[i] = letter;
      }
    }
  }
  //Letter wasnt found
  else {
    wrongLetters.push(letter);
    guessesLeft--;
  }
  console.log(blanksAndSuccesses);

}

function roundComplete() {
  console.log("Win Count: " + winCount + "| Loss Count: " + lossCount + " | Guesses Left " + guessesLeft);

  // Update the HTML  to reflect the most recent count stats
  document.getElementById("numGuesses").innerHTML = guessesLeft;
  document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

  // Check if user won
  if (lettersInWord.toString() == blanksAndSuccesses.toString()) {
    winCount++;
    

    //Update the win counter in the HTML
    document.getElementById("winCounter").innerHTML = winCount;


    setTimeout(startGame, 500);
  }
  //Check if user lost
  else if (guessesLeft == 0) {
    lossCount++;
   

    //Update the HTML
    document.getElementById("lossCounter").innerHTML = lossCount;

    setTimeout(startGame, 3000);
  }
}

//MAIN PROCESS
//------------------------------------------------------------
// Initiates code for the first time
startGame();

// Register Keyclicks
document.onkeyup = function (event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(letterGuessed);
  roundComplete();

}

//Testing/Debugging