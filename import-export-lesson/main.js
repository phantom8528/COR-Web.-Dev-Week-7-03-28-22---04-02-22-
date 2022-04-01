//----------------------------------------------------------------In-Class (03/31/22)-----------------------------------------------

//------------------ES6 JS Destructuring------------------------

//Ex.) es6 Destructuring for Arrrays (Review)

// const names =  ["Troy", "Troy II", "Troy III", "Troy IV"];
// const [firsName, secondName] = names;
// console.log(secondName); //Return: Troy II

//Ex.) es6 Destructuring for Objects

// const player = {
//     name: "Troy",
//     age: Infinity,
//     location: "Houston",
//     sport: "life"
// };

// let {name,sport} = player;
// console.log(sport); //Returns: life
// console.log(name); //Returns: Troy

// //NOW LETS DO THIS...

// sport = "coding"; // Attempt to reassign sport FAILED

// console.log(player); 
// //Returns: { name: 'Troy', age: Infinity, location: 'Houston', sport: 'life' }

//------------------ES6 JS Importing & Exporting------------------------
//NOTE: SEE "wordPlay.js" and "numPlay.js"
//NOTE: This is done in similar languages as well 

//Ex.)
const names = [
    "Frank",
    "Gab",
    "Aw",
];
// import snooperizer from "./wordPlay.js";
// import {API_KEY} from "./wordPlay.js";
import {API_KEY, upperCaseName, snooperizer} from "./wordPlay.js";
import {timesFive} from "./numPlay.js";



names.forEach((name) => {
    snooperizer(name);
}); //pass each item in names into snooperizer

console.log(API_KEY);//Returns: KLDSKMDLSKDMLSKDL to the browser console

console.log(upperCaseName("troy")); //Returns: TROY in the browser window

console.log(timesFive(5)); //Returns: 25 in brower console

//NOTE: run "Go Live" at the bottom right of vscode in order to run file




