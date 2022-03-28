//-----------------------------Virtual / In-Class (03/28/22)------------------------
/**
 * Review from Last Friday
 * ---------------------------------
 * Arrow Functions
 * Block Scoping (let, const)
 * Default Parameters 
 */

//---------------------------ES6 JS Template Literals--------------------------------

// Ex.1) Declaring a template literal; must use back-ticks (` `);
// const templateLiterals = ``; //<-- Empty Template Literals

// const poem = ` 
//         Heights by great men reached and kept
//         were not obtained by sudden flight, but 
//         they, while their companions slept were
//         toiling upward in the night`; // Easily create multi-line strings 

// const firstName = "Will"; // Regular Strings 
// const lastName = "Smith";

// const fullName = `${firstName} ${lastName}`;

// console.log(fullName); //Returns: Will Smith

//---------------------------ES6 Spread Operator--------------------------------------

// const actors = ["Denzel Washington", "Morgan Freeman"]; //actors array
// const actresses = ["Halle Berry", "Nia Long"]; // actresses array

// const hollywood = [...actors, ...actresses] //...[NAME OF THE ARRAY] <-- Spread operator
// // spreading the values of actors and acrtresses in to the hollywood array

// console.log(hollywood); 
// //Returns: [ 'Denzel Washington', 'Morgan Freeman', 'Halle Berry', 'Nia Long' ]

// //NOTE: The order that they're added matters

// const reverseHollywood = [...actresses, ...actors]; 

// console.log(reverseHollywood);
// //Returns: [ 'Halle Berry', 'Nia Long', 'Denzel Washington', 'Morgan Freeman' ]

//---------------------------ES6 JS Destructuring--------------------------------------

//Ex. Old way of Destructuring

// const actors = ["Denzel Washington", "Morgan Freeman"]; //actors array
// const firstActor = actors[0];
// console.log(firstActor); //Returns: Denzel Washington

//Ex. New way of Destructuring

// const [firstActor, secondActor] = actors;
// console.log(firstActor); //Returns: Denzel Washington
// console.log(secondActor ); //Retursn: Morgan Freeman

//Ex. Spreading combined with Destructuring
const actors = ["Denzel Washington", "Morgan Freeman"]; //actors array
const actresses = ["Halle Berry", "Nia Long"]; // actresses array
const hollywood = [...actors, ...actresses] 

// const [firstPlace, secondPlace, ...everyBodyElse] = hollywood;

// console.log(firstPlace); //Returns: Denzel Washington
// console.log(secondPlace) //Returns: Morgan Freeman
// console.log(everyBodyElse); //Returns: [ 'Halle Berry', 'Nia Long' ]

//----------------------------------------------------------------------------------

const [...everyBodyElse] = hollywood;
console.log(everyBodyElse); //Returns: [ 'Denzel Washington', 'Morgan Freeman', 'Halle Berry', 'Nia Long' ]

//-----------------------------------------------------------------------------------
//-------------------------------CODE CHALLENGE--------------------------------------
/**
 * INSTRUCTIONS:
 * -------------------
 * 
 */
//-----------------------------------------------------------------------------------

















