//PREP
//Parameters:
//An array of positive and negative integers
//The array will never be emtpy

//Return:
//The function should return the smallest integer in the array

//Example:
//SmallestIntegerFinder.findSmallestInt([34, 15, 88, 2]) // 2
//SmallestIntegerFinder.findSmallestInt([34, -345, -1, 100]) // -345

//Pseudo-code:
//Create variable that stores an integer of minimal value (0)
//Loop over the array
//Compare variable with every item in the array
//if a value in the array is smaller than the value of the variable, replace the current value of the variable with the value of the array item
//Repeat this process until the end of the array
//Return the variable with the minimal value after the loop is done comparing values

//Pseudo-code:
//Lazy-solution
//Sort array in ascending order
//Return first item in array after sorting

/* class SmallestIntegerFinder {
    findSmallestInt(args) {
        let smallest = args[0];
        for(let i = 0; i <= args.length; i++) {
            args[i] < smallest ? smallest = args[i] : smallest;
        }
    return smallest;
    }
} */

class SmallestIntegerFinder {
    findSmallestInt(args) {
        const sortedArr = args.sort((a, b) => a - b);
        return sortedArr[0];
    }
}

const finder = new SmallestIntegerFinder();
console.log(finder.findSmallestInt([34, 15, 88, 2]));
console.log(finder.findSmallestInt([34, -345, -1, 100]));
console.log(finder.findSmallestInt([0, 0, -1, -200, 1, -2, -4]));