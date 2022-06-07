//PREP
//Parameters:
//An array of only positive integers
//The input array will be of length >= 1

//Return:
//The integers have to be divided into two teams according to their position in the array
//Integers with an array position go to team 1
//Integers with an even array position go to team 2
//The function has to return the an array with the product of the sum of all elements from each team

//Example:
//rowWeigths([80]), [80,0]) => Here we have a single element, which means it belongs in team 1, since we have no elements in team 2 we push a 0 to the team 2 array
//rowWeights([100,50]), [100,50]) => very similar output to the previous example, only 1 element in team and on team 2 so they get return as they are
//rowWeights([50,60,70,80]), [120,140]) => 50 and 70(position 1 and 3 respectively) go to team 1, 60 and 80(positions 2 and 4 respectively) go to team 2 // The reduction results in [120, 140]

//Pseudo-code:
//Create new array for products of sum of teams integers named teamWeights
//Filter integers with odd array position and reduce them into a variable named team1
//Filter integers with even array position and reduce them into a variable named team 2
//Push team1 to teamWeights
//Push team2 to teamWeights
//Return teamWeights

function rowWeights(array) {
    const teamWeights = [];
    const team1 = array.filter((_, index, arr) => {
        const team1Index = (index + 1) % 2 === 1;
        if(team1Index) {
            return arr[index];
        }
    });
    if(team1.length === 0) team1.push(0)
    
    const team2 = array.filter((_, index, arr) => {
        const team2Index = (index + 1) % 2 === 0;
        if(team2Index) {
            return arr[index];
        }
    });
    if(team2.length === 0) team2.push(0);

    teamWeights.push(team1.reduce((tot, cur) => tot + cur));
    teamWeights.push(team2.reduce((tot, cur) => tot + cur));
    return teamWeights;
}

console.log(rowWeights([80]));
console.log(rowWeights([70, 60, 50, 80]));

//Codewars solution:
//Very simple and effective solution
/* function rowWeights(array){
    var arr = [0, 0];
    for (var i = 0; i < array.length; i++) {
      i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
    }
    return arr;
  } */