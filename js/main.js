//~~~~~~~~~~~~~~~~~~~~~~~~~ GLOBAL VARS ~~~~~~~~~~~~~~~~~~~~~~~~~

var words = ["furnish", "happyness", "grutt"]; // Words wich the cmp will have the choce to take.
var chances = 7; // Nb of chances the player can have.
var versus = {
    originalWord : "",
    transformedWord : [],
    userLetter : ""
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
    for(var i = 0; i < word.length; i++){
        versus.transformedWord[i] = "_";
    }
}

// fill the tab with all letters of alphabetic
function alphabet() {
    let letterSet = "abcdefghijklmnopqrstuvwxyz";
    for(var i = 0; i < 26; i++){
        letters[i] = letterSet[i];
    }
}

// ask to play + verif it's an alphabetic letter or ask again
function askVerif(){
    let userLetter = false;
    do {
        userLetter = prompt(`Time to play, you still have ${chances} chances to go !!!\nIt's up to you to give the first letter of you choice :`).toLocaleLowerCase();
        for(var lettre of letters){
            if(userLetter === lettre) {
                letters.splice(letters.indexOf(lettre), 1); // Suppr the lettre from the alphabet array
                return userLetter;
            }
        }
        userLetter = false;
    }while(!userLetter);
}

// compare letter from user with one of the original word letter
function compare(character){
    let pointer = false;
    for(var letter in versus.originalWord) {
        if(versus.originalWord[letter] === character){
            versus.transformedWord[letter] = character;
            pointer = true;
        }
    }

    alert("Lettre choisie : " + versus.userLetter); // optional
    alert("Mot à trouver : " + versus.originalWord + "\nLettres encore à trouver : " + versus.transformedWord); // optional
    alert("Lettres restantes 2: " + letters); // optional

    if(!pointer){
        chances--;
        switch(chances) {
            case 6:    
                alert("You missed !" + "\n+----+" + "\n |       |" + "\n         |" + "\n         |" + "\n         |" + "\n         |" + "\n=====");
                break;
            case 5:    
                alert("You lose !" + "\n+----+" + "\n |       |" + "\nO      |" + "\n         |" + "\n         |" + "\n         |" + "\n=====");
                break;
            case 4:    
                alert("You lose !" + "\n+----+" + "\n |       |" + "\nO      |" + "\n |       |" + "\n         |" + "\n         |" + "\n=====");
                break;
            case 3:    
                alert("You lose !" + "\n+----+" + "\n |       |" + "\nO      |" + "\n/|       |" + "\n         |" + "\n         |" + "\n=====");
                break;
            case 2:    
                alert("You lose !" + "\n+----+" + "\n |       |" + "\nO      |" + "\n/|\\     |" + "\n         |" + "\n         |" + "\n=====");
                break;
            case 1:    
                alert("You lose !" + "\n+----+" + "\n |       |" + "\nO      |" + "\n/|\\     |" + "\n/       |" + "\n         |" + "\n=====");
                break;
            case 0:    
                alert("You've lost, Too bad !" + "\n+----+" + "\n |       |" + "\nO      |" + "\n/|\\     |" + "\n/ \\     |" + "\n         |" + "\n=====");
                alert("END OF THE GAME");
                return false;
            default:
                return true;
        }
    }
    return true;
}

// loot function to validate still chances or not
function stillChances() {
    let verif = true;
    while(verif) {
        versus.userLetter = askVerif();
        verif = compare(versus.userLetter);
        alert("Sortie de la boucle compare : " + verif);
    }
    alert("on passe le test");
}

//~~~~~~~~~~~~~~~~~~~~~~~~~ CODE ~~~~~~~~~~~~~~~~~~~~~~~~~

alert("Welcome to our brand new game\n                                    THE HANGMAN GAME\n\nPlease enter your fate and see how will it end, mouhahahahahaha !!!");
versus.originalWord = cmpChoseWord();
magicWord(versus.originalWord);
alert(versus.originalWord + " : " + versus.transformedWord); // optional
alphabet(); // initialise the alphabet tab in letters
alert(letters); // optional
stillChances();
