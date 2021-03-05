//~~~~~~~~~~~~~~~~~~~~~~~~~ GLOBAL VARS ~~~~~~~~~~~~~~~~~~~~~~~~~

var words = ["furnish", "happyness", "grutt"]; // Words wich the cmp will have the choce to take.
var chances = 7; // Nb of chances the player can have.

//~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~

function cmpChoseWord(){
    let randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

//~~~~~~~~~~~~~~~~~~~~~~~~~ CODE ~~~~~~~~~~~~~~~~~~~~~~~~~

alert("Welcome to our brand new game\n                                    THE HANGMAN GAME\n\nPlease enter your fate and see how will it end, mouhahahahahaha !!!");
alert(cmpChoseWord());