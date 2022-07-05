//PREP
//Parameters:
//An array with two strings as elements

//Return:
//The function should return the string in a format were we display
//the characters of each strin in a column, so we should have two columns each one
//with every character of both strings

//Examples:
//transposeTwoStrings(['Hello','World']) =>
//H W
//e o
//l r
//l l
//o d

//Pseudo-code:
//Loop through string 0 and 1 of array
//Print each letter of each string and start a new line
//Keep printing characters until the string's length equals -1
//If one string is longer than the other replace undefined characters with whitespace

function transposeTwoStrings(array) {
    let transposeStr = "";
    if(array[0].length > array[1].length) {
        for(let i = 0; i < array[0].length; i++) {
            transposeStr += `${array[0][i]} ${array[1][i] === undefined ? array[1][i] = " " : array[1][i]}\n`;
        }
    }else if(array[1].length > array[0].length) {
        for(let i = 0; i < array[1].length; i++) {
            transposeStr += `${array[0][i] === undefined ? array[0][i] = " " : array[0][i]} ${array[1][i]}\n`;
        }
    }else {
        for(let i = 0; i < array[0].length; i++) {
            transposeStr += `${array[0][i]} ${array[1][i]}\n`;
        }
    }
    return transposeStr;
}

console.log(transposeTwoStrings(['Hello', 'World']));
console.log(transposeTwoStrings(['Hello', 'People']));
console.log(transposeTwoStrings(['Transpose', 'This']));

function transposeTwoStrings1(array) {
    let transposeStr = '';
    let transposeTest =  ' '+' ';
    transposeTest[0] += 'a'
    console.log('Str1:', transposeTest);
    array.map((ele, index, arr) => {
        for(let char of arr[0]) transposeTest[0] += `${char}\n`;
        for(let char of arr[1]) transposeTest[1] += `${char}\n`;
    });
    console.log(transposeTest);
    //array[0].length > array[1].length ? array.map((ele, index, arr) => transposeStr += `${arr[arr.length]} ${ele === undefined ? ele = " " : ele}\n`) : array.map((ele, index, arr) => transposeStr += `${arr[0][index] === undefined ? arr[0][index] = " " : arr[0][index]} ${arr[1][index]}\n`);
    //array[0].length > array[1].length ? transposeStr += `${array[0].map(ele => ele)} ${array[1].map()}` : 
    //return transposeStr;
    return transposeTest;
}

console.log(transposeTwoStrings1(['Hello', 'World']));