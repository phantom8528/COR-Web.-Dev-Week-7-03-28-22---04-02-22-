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
// const actors = ["Denzel Washington", "Morgan Freeman"]; //actors array
// const actresses = ["Halle Berry", "Nia Long"]; // actresses array
// const hollywood = [...actors, ...actresses] 

// const [firstPlace, secondPlace, ...everyBodyElse] = hollywood;

// console.log(firstPlace); //Returns: Denzel Washington
// console.log(secondPlace) //Returns: Morgan Freeman
// console.log(everyBodyElse); //Returns: [ 'Halle Berry', 'Nia Long' ]

//----------------------------------------------------------------------------------

// const [...everyBodyElse] = hollywood;
// console.log(everyBodyElse); //Returns: [ 'Denzel Washington', 'Morgan Freeman', 'Halle Berry', 'Nia Long' ]

//-----------------------------------------------------------------------------------
//-------------------------------CODE CHALLENGE--------------------------------------
/**
 * INSTRUCTIONS:
 * -------------------
 * 
 * Write a function that takes in 2 arrays and 
 * combines them into a single array. Then, it 
 * should save the value of the first 3 values of 
 * the new array into new variables. The remaining 
 * values of the combined array should be saved into 
 * a new variable. All of the values in the remaining values 
 * variable you created should have an 's' added to them. 
 * Finally, all of the remaining values that were saved into 
 * that variable should be printed to the screen within the 
 * following sentence:
 * 
 * "The current value is [REMAINING VAL?UE]"
 * 
 * and so on until all of the remaining values have been printed in that sentence.
 * 
 * You should be using the things we just learned.
 * 
 * Resources: Canvas ES6 Module, w3schools, etc
 *
 * 
 */
//---------------------------------BEGIN--------------------------------------------------

//pt.1) Create function with two arrays as parameters 
const combInation = (firstArray = [], secondArray = []) => {
    const newArray = [...firstArray, ...secondArray];
    //pt.2) Save the first three items of the new array as variables
    const [number1, number2, number3, ...leftOvers] = newArray;
    //pt.3) The remaining items should be saved into an all new variable [SEE LINE ABOVE]

    //NOTE: added this part to attempt to get rid of the three undefined(s) the show up in the second test
    console.log(`
    The First three items are:
    -------------------------------
    ${number1}, 
    ${number2}, 
    and ${number3}
    -------------------------------\n`);

    //NOTE: added this part to try an filter out the undefined values in my out put
    const layers = newArray.filter(topThree => topThree != undefined);

    for (let i=0; i<layers.length; i++){
        if (leftOvers[i] == undefined){
            continue;
        }else{
            console.log(`The current remaining value is: ${leftOvers[i]}s\n`); //<-- "s" is added to remaining values
        }
    }
    //pt.4) All remaining variables should have an "s" added to the end of them [SEE ABOVE]
    //pt.5) Finally, all remaining values should be printed starting with "The Current Remaining Value is: " [SEE ABOVE]
}


const breakfast = ["bacon", "cheese eggs", "grits", "grapfruit", "coffee", "pineappele orange juice"]; //<-- firstArray
const dinner = ["mozzerla stick", "loaded potato skin", "steak", "grilled shrimp scampi", "strong drink"]; //<-- secondArray

combInation(breakfast, dinner);
//TEST 1:
//Expectation: bacon, cheese eggs, and grits should be the first three values, while everything else falls into "...leftOvers".

/**
 * Return:
 * ------------------
 * The current remaining value is: grapfruit,coffee,pineappele orange juice,mozzerla sticks,loaded potato skins,steak,grilled shrimp scampi,root beers
 */

//TEST 2: After introducing for loop to the function
/**
 * Return:
 * -----------------
 *  The current remaining value is: grapfruits
    The current remaining value is: coffees
    The current remaining value is: pineappele orange juices
    The current remaining value is: mozzerla sticks
    The current remaining value is: loaded potato skins
    The current remaining value is: steaks
    The current remaining value is: grilled shrimp scampis
    The current remaining value is: strong drinks
    The current remaining value is: undefineds
    The current remaining value is: undefineds
    The current remaining value is: undefineds
 */

//TEST 3: After using the .filter() method before the for loop 

/**
 * Return
 * -------------------
 *     The First three items are:
    -------------------------------
    bacon, 
    cheese eggs, 
    and grits
    -------------------------------

The current remaining value is: grapfruits
The current remaining value is: coffees
The current remaining value is: pineappele orange juices
The current remaining value is: mozzerla sticks
The current remaining value is: loaded potato skins
The current remaining value is: steaks
The current remaining value is: grilled shrimp scampis
The current remaining value is: strong drinks
 */
//----------------------------------END--------------------------------------------------


















