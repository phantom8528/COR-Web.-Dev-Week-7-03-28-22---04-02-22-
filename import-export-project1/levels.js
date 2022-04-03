
// export default function jumpIntoTheHole(){
//     let level1Prompt = window.prompt(`WELCOME TO LEVEL 1 
//                                     -------------------------------
//                                     type "a" to go left
//                                     type "b" to go middle
//                                     type "c" tp go right
//                                     -------------------------------`);
//     switch(level1Prompt){
//         case "a":
//             //access game1Level1 array in main.js
//             console.log (`NOTHING HERE, SORRY`);
//         case "b":
//             //access game1Level1 array in main.js
//             console.log(`NOTHING HERE, SORRY`);
//         case "c":
//             //access game1Level1 array in main.js
//             //access treasure in treasure.js


//     }
// }
// export function pathleft(input){
//     //Goes back to main cave 
// }
// export function pathMiddle(input){
//     //goes back to main cave
// }
// export function pathRight(input){
//     //get the gold out of the treasure trunk in treasure.js
// }
// export function welcomeToGame(input){
//     console.log(`LEVEL 0`);

// }
//------------------------------------------------------------------------------



let game1Level0 = [
    "mountainLeft", 
    "mountainRight", 
    holeInGround:{option1: "jumpIntoHole()",option2: "endProgram()"},
    "pastMountainLeft()",
    "pastMountainRight()"
];

let [leftMountain, rightMountain, holeInGround:{jump, end}, goLeft, goRight] = game1Level0; // Skips the first two because mountains don't move

// let game1Level1 = [
//     pathleft(),
//     pathRight(), 
//     pathMiddle()
// ]

// let [left, right, middle] = game1Level1;

console.log(leftMountain);
console.log(jump);