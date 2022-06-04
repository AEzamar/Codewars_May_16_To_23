//Pseudo-code:
//
//Make variable to store single integer from array called possibleLeader = 0;
//array[possibleLeader] This element will only go up in value if the element is not the leader
//array.every(num => {
//  if(array[possibleLeader] > num) {
//      return array[possibleLeader];   
//} else {
    //possibleLeader++;
//}
//})