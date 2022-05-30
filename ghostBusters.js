//PREP

//Parameters:
//A string that may or may not have whitespace
//Strings represent 'buildings', white space represents 'ghosts'

//Return:
//A string without spaces or 'ghosts'
//If the string passed to the function has not whitespace
//Return 'You just wanted my autograph, didn't you?'

//Examples:
//ghostBusters('Sky scra pers') => Skyscrapers
//ghosBusters('When there's something strange in your JS Code') =>'Whenthere'ssomethingstrangeinyourJSCode'
//ghostBusters('Bustin' makes me feel good') => 'Bustin'makesmefeelgood';

//Pseudo-code:
//Verify if the string has contains whitespace
//If the string contains whitespace replace it with nothing
//Return the string without whitespace
//Else return 'You just wanted my autograph, didn't you?'

function ghostBusters(building) {
    return building.includes(" ") ? building.replace(/\s/g, "") : 'You just wanted my autograph, didn\'t you?';
}

//Codewars solution, I forgot about test for RegExp
/* function ghostBusters(building) {
    return /\s/.test(building) ? building.replace(/\s+/g, '') : "You just wanted my autograph didn't you?";
  } */