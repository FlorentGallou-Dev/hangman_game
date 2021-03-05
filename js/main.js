//~~~~~~~~~~~~~~~~~~~~~~~~~ GLOBAL VARS ~~~~~~~~~~~~~~~~~~~~~~~~~

var words = ["furnish", "happyness", "grutt"]; // Words wich the cmp will have the choce to take.
var chances = 7; // Nb of chances the player can have.
var versus = {
    originalWord : "",
    transformedWord : ""
};
var letters = []; // contiendra toutes les lettres de l'aphabet

//~~~~~~~~~~~~~~~~~~~~~~~~~ FUNCTIONS ~~~~~~~~~~~~~~~~~~~~~~~~~

// chose a random word in words array
function cmpChoseWord(){
    let randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

// transform word chosed to _ characters
function magicWord(word){
    let result = "";
    for(var i = 0; i < word.length; i++){
        result += "_";
    }
    return result;
}

// creation d'une liste de lettres alphabet
function alphabet() {
    let letterSet = "abcdefghijklmnopqrstuvwxyz";
    for(var i = 0; i < 26; i++){
        letters[i] = letterSet[i];
    }
    return letters;
}

// demande saisie une lettre au jouer + verifications => prévoir supprimer lettres déjà choisies

//~~~~~~~~~~~~~~~~~~~~~~~~~ CODE ~~~~~~~~~~~~~~~~~~~~~~~~~

alert("Welcome to our brand new game\n                                    THE HANGMAN GAME\n\nPlease enter your fate and see how will it end, mouhahahahahaha !!!");
versus.originalWord = cmpChoseWord();
versus.transformedWord = magicWord(versus.originalWord);
alert(versus.originalWord + " : " + versus.transformedWord);
alphabet();
alert(letters);