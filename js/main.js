//~~~~~~~~~~~~~~~~~~~~~~~~~ GLOBAL VARS ~~~~~~~~~~~~~~~~~~~~~~~~~

var words = ["furnish", "happyness", "grutt"]; // Words wich the cmp will have the choce to take.
var chances = 7; // Nb of chances the player can have.
var versus = {
    originalWord : "",
    transformedWord : ""
};

//~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~

function cmpChoseWord(){
    let randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function magicWord(word){
    let result = "";
    for(var i = 0; i < word.length; i++){
        result += "_";
    }
    return result;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~ CODE ~~~~~~~~~~~~~~~~~~~~~~~~~

alert("Welcome to our brand new game\n                                    THE HANGMAN GAME\n\nPlease enter your fate and see how will it end, mouhahahahahaha !!!");
versus.originalWord = cmpChoseWord();
versus.transformedWord = magicWord(versus.originalWord);
alert(versus.originalWord + " : " + versus.transformedWord);