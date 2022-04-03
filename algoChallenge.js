//---------------------In-Class (04/01/22)---------------------------
/**
Code Challenge (Kenasia Turner)
---------------------
Question:
---------------------------
Create a function that takes in a number and returns the sum all numbers 
up to, and including the number passed in. */

//----------------Kenasia Solution-----------------
function sumAndIncluding(input){
    let currentSum = 0;
    for (let i=0; i<=input; i++){
        currentSum += i;
    }
    return currentSum;
}
console.log(`Kenasia's Function Equals: ${sumAndIncluding(6)}`);


//---------------Teacher Solution----------------
function addUpToNumber(passedInNumber){
    let currentSum = 0;
    for (let currentNumber = 0; currentNumber <= passedInNumber; currentNumber++){ //0, 1,  
        currentSum = currentSum + currentNumber; //0

    }
    console.log(`Troy's Solution Equals:  ${currentSum}`);

}
addUpToNumber(4)

