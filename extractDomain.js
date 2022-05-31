//PREP
//Parameters:
//A string containing a full url will be passed into the function

//Return:
//The function should extract only the domain name
//'https://www.google.com' should return google

//Examples:
//getDomain('https://www.google.com') => 'google'
//getDomain('http://github.com/carbonfive/raygun') => 'github'
//getDomain('http://www.zombie-bites.com') => 'zombie-bites'

//Pseudo-code:
//Create a regex that targets specific literal parts of the string with capture groups
//Regex should have at least four capture groups
//The capture group that catches the domain should be returned

function getDomain(url) {
    const urlRegex = /^(http[s]:\/\/)(www\.)|(\w+)(\.\w+)+|(\/\w+)+/ig
    return url.replace(urlRegex, '$3');
}

console.log(getDomain('https://www.google.com'));
console.log(getDomain('http://github.com/carbonfive/raygun'));