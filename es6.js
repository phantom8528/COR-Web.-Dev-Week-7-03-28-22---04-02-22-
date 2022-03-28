
//-----------------Virtual / In-Class (03/25/22)----------------


//::::::::::VARIABLES REVIEW:::::::::::::::

//Ex. 1)

// let firstname = "Troy"; //<-- This gets executed second

// {
//     const firstname = "jerry"; //<-- This gets executed first
//     console.log(firstname);
// }

// console.log(firstname);

//NOTE: Comment out line 5 and run the code, line 12 returns undefined
/**
 * NOTE: "var" is globally scoped, 
 * "let" and "const" are block scoped
 */

//-----------------------------------------

//Ex. 2)

// const API_KEY = "MSKLDKM0I943POILSMNDLSK";

// if(true){ // Code Block: Level.1
//     const firstName = "Jerry";
//     console.log(firstName); // 1
//     console.log(API_KEY); // 2
//     if(true){ // Code Block: Level.2
//         let lastName = "Patterson";
//         console.log(lastName); // 3
//         console.log(firstName); // 4
//     }
//     console.log(lastName); // 5 --> ReferenceError: lastName is not defined
// }
// console.log(API_KEY);

/**
 
// NOTE: Output Below: 

Jerry
MSKLDKM0I943POILSMNDLSK
Patterson
Jerry
/Users/corcoding/Desktop/Gabriel Jefferson [mac]/COR Web Dev. FT 02-14-22/Week 6 [03-20-22 to 03-26-22]/es6.js:37
    console.log(lastName);
                ^

ReferenceError: lastName is not defined
 */


//:::::::::::::ARROW FUNCTIONS::::::::::::::::::

//Review of previous approaches: 

//Ex.3)

// What we're used to ...

// const sayName = function(name){
//     console.log(name);
// }

// sayName("Troy"); //Returns: Troy

// //OR...

// function sayName2(name){
//     console.log(name)
// }

// sayName2("Gabriel"); //Returns: Gabriel
// sayName("Mike"); // Returns: Mike

//::::::::::Arrow Function => How es6 does it:::::::

//Ex.4)

// const sayName3 = (name) => {
//     console.log(name);
// }

// sayName3("Jefferson"); // Returns: Jefferson

// //NOTE: Key Difference - the use of the function key word.
// //NOTE: es6 stands for EcmaScript6

// //Ex.5)

// const sayName4 = name => { //<-- No Parentheses
//     console.log(name);
// }

// sayName4("Lee");

// //Ex.6)

// const sayName5 = name => {
//     return name;
// }

// sayName5("Your Lunch"); //Returns: null
// //NOTE: nothing is being done. with it
// console.log(sayName5("My Lunch")); //Returns Lunch
// //NOTE: console.log() is making use of it 

// //Ex.7)

// const sayNameInLineReturn = (name) => name;

// sayNameInLineReturn("Kendra"); //Returns: null
// console.log(sayNameInLineReturn("Kendra's Back")); //Returns: Kendra's Back

//::::::Arrow Functions - Default Parameters::::::::::::

//Ex.8)

// const sayName7 = (name = "Troy") => {
//     console.log(name);
// }

// sayName7(); //Returns default parameter: Troy
// sayName7("Jerry"); //Returns override parameter: Jerry

//NOTE: Kicked out of Zoom call at 2:12pm due to internet disconnect

//Ex.9)

// const howManyWheels = (wheels = 4) => {
//     console.log(wheels);
// }

// howManyWheels(); //Returns: 4
// howManyWheels(18);//Returns: 18

//AND...

// const howManyWheels2 = (color = "black", wheels = 4) => {
//     console.log( wheels);
// }

// howManyWheels2(); //Returns: 4
// //NOTE: color is undefined
// howManyWheels2("blue", 18); // Returns: 18, red is undefined still


// const howManyWheels3 = (color = "black", wheels = 4) => {
//     console.log(color, wheels);
// }

// howManyWheels3(); //Returns default values: black, 4
// howManyWheels3("red", 18); // Returns both ovrride values: red, 18
// howManyWheels3(18); //Returns one ovrride value, and the default value: 18, 4 

//-----------------------------------------------------------------------------------------
//---------------------------CODE CHALLENGE------------------------------------------------
/**
 * Instructions
 * ----------------------
 * Create a function using the arrow function syntax that multiplies a given number by 3.
 * if no multiplier is passed to it and by whatever the multiplier is in the case that something is passed in for it. 
 * Do not use any conditional methods like if or switch. Lastly, print the result to the 10 times.
 */
//----------------------------MY APPROACH-------------------------------------------------------------

// const codeChallenge = (defaultMultiple = 5, byThree = 3) => {

//     let anSwer = defaultMultiple*byThree;
//     return anSwer;
// }


// // codeChallenge(); //Returns: 15 10 times
// // codeChallenge(3) // Returns: 9, overriding the 5 10 times

// console.log(codeChallenge().repeat(10));


//-------------------Frederick's Approach-------------------------

// if (true){
//     const codeChallenge = (multiplier = 3, n = 10) => {
//         let result = multiplier * n;
//         for (let n=0; n<10; n++){
//             console.log(result);
//         }
//     }
//     codeChallenge();
// }

//-------------------------TESTING THE REPEAT METHOD---------------------------------------

// let text = "Hello";
// let repeatResult = text.repeat(10);
// console.log(repeatResult); //Returns: Hell0 ten times

//--------------------------------In-Class (03/28/22)----------------------------------------------

//---------------------------JS Template Literals--------------------------------

//--------------------------------JS Mapping-------------------------------------

//-->Ex. Create a Car Map

// const dreamCar = new Map();
// dreamCar.set("Make", "Ford");
// dreamCar.set("Model", "Explorer");
// dreamCar.set("Year", "2022");
// dreamCar.set("Color", "Red");
// dreamCar.set("Custom", false); // Boolean

// console.log(dreamCar);

/**
 * Return:
 * -------------------
 * Map(5) {
  'Make' => 'Ford',
  'Model' => 'Explorer',
  'Year' => '2022',
  'Color' => 'Red',
  'Custom' => false
}
 */

//-------------------------Creating new objects----------------------------

// const plane = {name: "Boeing 747",
// Year: "2022", Type: "Commercial"};

// console.log(plane);

/**
 * Return:
 * ----------------
 * { name: 'Boeing 747', Year: '2022', Type: 'Commercial' }
 */

//----------------------JS Spread Operator-------------------------------

//-->Ex.) Printing all the values of an object
const groceryList = {item1: "bacon", item2: "millk", item3: "oreos", item4: "tylenol", item5: "toothpaste"};
/**
 * Return:
 * -----------------
 * corcoding@Coding-9 Week 6 [03-20-22 to 03-26-22] % node es6.js
{
  item1: 'bacon',
  item2: 'millk',
  item3: 'oreos',
  item4: 'tylenol',
  item5: 'toothpaste'
}
 */
console.log(groceryList);
//Now we will amdend a new list by adding the old one, plus two additional items
const newList = {...groceryList, item6: "Swiffer Pads", item7: "Clorox"};
console.log(newList);
/**
 * Return:
 * ------------------
 * {
  item1: 'bacon',
  item2: 'millk',
  item3: 'oreos',
  item4: 'tylenol',
  item5: 'toothpaste',
  item6: 'Swiffer Pads', // New item 1
  item7: 'Clorox' // New item 2
}
 */

//--------------------------------JS set-----------------------------------
//-->Ex.) Create A Set:
const myName = new Set();
//Now add some items to that set
myName.add("G");
myName.add("A");
myName.add("B");
myName.add("E");

console.log(myName);

/**
 * Returns:
 * --------------
 * Set(4) { 'G', 'A', 'B', 'E' }
 */

//--------------------------------JS Destructuring Assignment-----------------------------------
//Ex.1) Destructing an Array the old way
var a, b, c;
var arr = [1, 2, 3];

a = arr[0];
b = arr[1];
c = arr[2];

console.log(a); // logs 1
console.log(b); // logs 2
console.log(c); // logs 3

//Ex.2) Destructing an Array the new way
let a, b, c;
let arr = [1, 2, 3];

[a, b, c] = arr;

console.log(a); // logs 1
console.log(b); // logs 2
console.log(c); // logs 3

//--------------------------------JS Classes---------------------------------------------------
//Ex.1) Class Constructor:
class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

}

//--------------------------------JS Classe Inheritance-----------------------------------------













