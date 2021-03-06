//~~~~~~~~~~~~~~~~~~~~~~~~~ GLOBAL VARS ~~~~~~~~~~~~~~~~~~~~~~~~~

var words = ["furnish", "happyness", "groot", "adventure", "mississipî", "loop", "gordon"]; // Words wich the cmp will have the choce to take.
var chances = 7; // Nb of chances the player can have.
var versus = {
    originalWord : "", // stocks the original word
    transformedWord : [], // stocks the transformed word with _
    userLetter : "" // stocks the letter choosed by the user
};
var letters = []; // will sock all alphabet letters

var reboot = true; // the reboot pointer

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
        userLetter = prompt(`Time to play, you still have ${chances} chances to go !!!\n\nKnowing that you still have not tryed those letters :\n                          ${letters}\n\nIt's up to you to give the letter of you choice :`).toLocaleLowerCase();
        alert("You choosed : " + userLetter);
        for(var lettre of letters){
            if(userLetter === lettre) {
                letters.splice(letters.indexOf(lettre), 1); // Suppr the lettre from the alphabet array
                return userLetter;
            }
        }
        alert("The '" + userLetter + "' letter is not playble or already used.");
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
    alert("Aknowledge the actual state of your marvelous discovery : \n                       " + versus.transformedWord);

    if(!pointer){
        chances--;
        switch(chances) { // draw the hagman step by step
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
                return false; // end the loop in stillChances
            default:
                return true; // continue the loop in stillChances
        }
    }
    return completed(); // send false to compare loop that sends false to stillChances => print end of the game
}

// loot function to validate still chances or not
function stillChances() {
    let verif = true;
    while(verif) {
        versus.userLetter = askVerif();
        verif = compare(versus.userLetter);
    }
    alert("END OF THE GAME");
    return prompt("Would you like to put your life on the edge for glory again ???\n\nType :\n      'y' for yes i'm a player\n                            or\n      'n' for no i'm good as safe now");
}

// loot to see if word is completed
function completed() {
    let remadeWord = "";
    // loop to recreate the original word to compare
    for(let letter of versus.transformedWord) {
        remadeWord += letter;
    }
    if(versus.originalWord === remadeWord){
        alert("Wow you did it !\nYou're free now, lucky you survived this deadly game !");
        return false; // send false to compare loop that sends false to stillChances => print end of the game
    }
    else {
        return true; // send true to compare loop that sends true to stillChances => continue asking letters
    }
}

// function begining to let user chose what to do at the start
function start() {
    let selection = prompt("Welcome to our brand new game\n                                    THE HANGMAN GAME\n\nWE, who will test you, will let you a first easy choise :\nType one of those letter to continue.\n\n                       'p' = play\n                       'r' = rules\r                       'q' = quit").toLowerCase();
    while(selection || !selection) {
        if(selection === "r") {
            alert("The rules are simple :\n - WE chose a word you won't notice,\n - You will have 7 chances to guess the word, one letter at a time,\n - each letter you find, WE will show you the word with only your so found lettres appearing,\n - each time you guess wrong, 1 chance you'll lose, one step closer you are to your pitifull end,\n - if you find every letter before you use all your chances, you win,\n - otherwise, you'll die.\n\nSo, take your time, because every step is risky.");
        }else if(selection === "p") {
            alert("Please enter your fate and see how will it end, mouhahahahahaha !!!");
            return true;
        }else if(selection === "q") {
            return false;
        }
        selection = prompt("WE sayed :\n\nType one of those letter to continue.\n                       'p' = play\n                       'r' = rules\r                       'q' = quit").toLowerCase();
    }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~ CODE ~~~~~~~~~~~~~~~~~~~~~~~~~

//alert("Welcome to our brand new game\n                                    THE HANGMAN GAME\n\nPlease enter your fate and see how will it end, mouhahahahahaha !!!");
reboot = start();

while(reboot){
    versus.originalWord = cmpChoseWord();
    magicWord(versus.originalWord);
    alphabet(); // initialise the alphabet tab in letters
    reboot = stillChances();
    // here we test reboot that may contain y of n to loop on not
    if(reboot === "y"){
        reboot = true;
        // reinitilize every vars
        chances = 7;
        versus.originalWord = "";
        versus.transformedWord = [];
        versus.userLetter = "";
        alert("All right, you like dangerous games, let's play rougth again !");
    }
    else {
        reboot = false;
        alert("You choosed... wisely ! You make you way back with a satisfying taste of victory :)");
    }
}

alert("Goodby !!!");
