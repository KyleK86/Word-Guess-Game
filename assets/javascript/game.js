// Array of possible answers
var answerList = ["Kirk", "Spock", "Picard", "Riker", "Sulu", "Ohura", "Scotty", "LaForge", "Worf", "Sisko", "Janeway", "Tuvok", "Nelix", "Dax"];
//Empty object for incorrect guesses

var wrongGuesses= {};


// computer chooses one from array

var computerChoice = answerList[Math.floor(Math.random() * answerList.length)];
//Create spaces for chosen answer
function createLetterSpace() {
    for(var i =0; i < computerChoice.length; i++) {
            var letterSpace = document.createElement("P");
            letterSpace.setAttribute("letter", computerChoice[i]);
            document.getElementById("contentArea").appendChild(letterSpace);

    }
}
    
        //Give spaces chosen value


//User enters key

        //decrement allowed guesses 

        //compare computer choice to user's entered value

        // if yes, log value to answer space
            //check if win
        // if no, log value to incorrect choices
            //check if loss


//check if win
    //check if all characters in word are displayed
        //if win, increment wins and reset game
        //if not, keep going


 //check if loss

    //check if guesses remaining = 0
        //if loss, increment losses and reset game
        //if not, keep going

//reset game after win/loss

    //clear answer space
    //choose a new word from array
    //clear incorrect guesses
    //reset allowed guesses

//reset button to clear game
    //resets wins/losses as well









