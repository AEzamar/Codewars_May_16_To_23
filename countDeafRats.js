//PREP
//Parameters:
//A string representing the Pied Piper(P) and strings representing rats going right and left (~0 0~)

//Return:
//The function has to count how many rats(~0) are not following the Pied Pier(P)
//The rats are following the Pied Piper if the rats are going in the same direction that positions as if they were walking towards the Pied Piper
//If the rats are facing the opposite direction they should be counted
//After iterating through all of the string the number of non-following or 'deaf' rats should be returned

//Examples:
//countDeafRats("~O~O~O~O P) => 0 //Since all the rats are following the Pied Piper
//countDeafRats(P O~ O~ ~O O~) => 1 //Only the third rat from left to right is going in the wrong direction


//Pseudo-code:
//Check if the P is on the start or end of the string
//Create variable to keep track of deaf rats
//If P is at the start, check that the rats are going left, if a rat is going right add 1 to deafRats
//If P is at the end of the string, check that the rats are going right, if a rat is going left, add 1 to deafRats
//If P is in any other part of the string, go through the left of the string and verify the direction of the rats, add 1 if a rat is not goin in the right direction
//Then go through the right of the P and verify the direction of the rats, if the rats are going away from P add 1 to deafRats
//After the iteration is over return deafRats;

function countDeafRats(town) {
    let deafRats = 0;
    if(town.startsWith('P')) {
        town.includes('~0') ? deafRats++ : deafRats;
    }
    if(town.endsWith('P')) {
        town.includes('0~') ? deafRats++ : deafRats;
    }
    if(town.includes('P')) {
        const leftSideRange = town[0] + town.indexOf('P');
        const rightSideRange = town.indexOf('P') + town[town.length - 1];
        town[leftSideRange].includes('0~') ? deafRats++ : deafRats;
        town[rightSideRange].includes('~0') ? deafRats++ : deafRats;
    }
    return deafRats;
}