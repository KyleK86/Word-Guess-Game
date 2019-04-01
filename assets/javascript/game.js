// GLOBAL VARIABLES
//--------------------------------------------------------------------------------------
//Arrays and Varibles
var wordOptions = ["kirk", "spock", "picard", "data", "riker", "sulu", "uhura", "scotty", "laforge", "worf", "sisko", "janeway", "tuvok", "nelix", "dax", "odo"];
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
  document.getElementById("trekPic").setAttribute("src", "assets/images/Star_Trek.jpg");

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

    switch (selectedWord) {
      case "kirk":
        document.getElementById("trekPic").setAttribute("src", "assets/images/kirkPic.jpg");
        break;
      case "spock":
        document.getElementById("trekPic").setAttribute("src", "assets/images/spockPic.jpg");
        break;
      case "picard":
        document.getElementById("trekPic").setAttribute("src", "assets/images/picardPic.jpg");
        break;
      case "data":
        document.getElementById("trekPic").setAttribute("src", "assets/images/dataPic.jpg");
        break;
      case "riker":
        document.getElementById("trekPic").setAttribute("src", "assets/images/rikerPic.jpg");
        break;
      case "sulu":
        document.getElementById("trekPic").setAttribute("src", "assets/images/suluPic.jpg");
        break;
      case "uhura":
        document.getElementById("trekPic").setAttribute("src", "assets/images/uhuraPic.jpg");
        break;
      case "scotty":
        document.getElementById("trekPic").setAttribute("src", "assets/images/scottyPic.jpg");
        break;
      case "laforge":
        document.getElementById("trekPic").setAttribute("src", "assets/images/laforgePic.jpg");
        break;
      case "worf":
        document.getElementById("trekPic").setAttribute("src", "assets/images/worfPic.jpg");
        break;
      case "sisko":
        document.getElementById("trekPic").setAttribute("src", "assets/images/siskoPic.jpg");
        break;
      case "janeway":
        document.getElementById("trekPic").setAttribute("src", "assets/images/janewayPic.jpg");
        break;
      case "tuvok":
        document.getElementById("trekPic").setAttribute("src", "assets/images/tuvokPic.jpg");
        break;
      case "nelix":
        document.getElementById("trekPic").setAttribute("src", "assets/images/nelixPic.jpg");
        break;
      case "dax":
        document.getElementById("trekPic").setAttribute("src", "assets/images/daxPic.jpg");
        break;
      case "odo":
        document.getElementById("trekPic").setAttribute("src", "assets/images/odoPic.jpg");
        break;

    }


    //Update the win counter in the HTML
    document.getElementById("winCounter").innerHTML = winCount;


    setTimeout(startGame, 1500);
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