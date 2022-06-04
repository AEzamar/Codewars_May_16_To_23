//PREP
//Parameters:
//An array of multiple strings as elements

//Return:
//An array with the same strings passed to the function in the original array without any duplicated letters

//Example:
//dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]) => ['codewars','picaniny','hubububo']
//dup(["abracadabra","allottee","assessee"]) => ['abracadabra','alote','asese']
//dup(["kelless","keenness"])) => ['keles','kenes'];

//Pseudo-code:
//Make new empty array to contain strings with no duplicated characters NoDupArr
//Loop over array
//Nest a loop inside the first loop and iterate over every character in each string
//Compare the current character to the next, if they're equal replace the duplicated character with nothing
//Push string without duplicated characters to noDupArr
//Return noDupArr;

function dup(s) {
    let noDups;
    const mappedStr = s.map((str) => {
        noDups = "";
        for(let i = 0; i < str.length; i++) {
            if(str[i] !== str[i + 1]) {
                noDups += str[i];
            }
        }
        return noDups;
    })
    return mappedStr;
}

console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]));
console.log(dup(["abracadabra","allottee","assessee"]));
console.log(dup(["kelless","keenness"]));