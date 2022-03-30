//-----------------------------------------------------------In-Class (03/28/22)------------------------------------
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
 * "The current value is [REMAINING VALUE]"
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
//1st.) Create the two arrays that will be passed in:

// const breakfast = ["waffles", "cheese eggs", "grits", "grapfruit", "coffee", "pineappele orange juice"]; //<-- firstArray
// const dinner = ["mozzerla stick", "loaded potato skin", "steak", "grilled shrimp scampi", "strong drink"]; //<-- secondArray

// //2nd.) Create function with two arrays as parameters:
// const myMenu = (firstArray = [], secondArray = []) => {
//     const newArray = [...firstArray, ...secondArray];
//     //3rd) Save the first three items of the new array as variables:
//     const [number1, number2, number3, ...leftOvers] = newArray;
//     //4th) The remaining items should be saved into an all new variable [SEE LINE ABOVE]

//     //NOTE: added this part to print the first three variables
//     console.log(`
//     The First three items are:
//     -------------------------------
//         ${number1}, ${number2}, & ${number3}\n`);

//     //NOTE: added this part to try an filter out the undefined values in outputs
//     const layers = newArray.filter(bottomThree => bottomThree != undefined);

//     console.log(`
//     The current remaining value(s) are: 
//     ----------------------------------`)
//     for (let i=0; i<layers.length; i++){
//         if (leftOvers[i] == undefined){
//             continue;
//         }else{
//             console.log(`       ${i}.) ${leftOvers[i]}s\n`); //<-- This is where the "s" is added
//         }
//     }
//     //5th) All remaining variables should have an "s" added to the end of them [SEE ABOVE]
//     //6th) Finally, all remaining values should be printed starting with "The Current Remaining Value is: " [SEE ABOVE]
// }


// myMenu(breakfast, dinner); //<--instance of function myMenu, passing in dinner and breakfast arrays

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
 * Return:
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

//TEST 4: After modifying the for loop and adding an additional string

/**
 * Return:
 * -------------------
 * 
 *     The First three items are:
    -------------------------------
        waffles, cheese eggs, & grits


    The current remaining value(s) are: 
    ----------------------------------
       0.) grapfruits

       1.) coffees

       2.) pineappele orange juices

       3.) mozzerla sticks

       4.) loaded potato skins

       5.) steaks

       6.) grilled shrimp scampis

       7.) strong drinks
 */
//----------------------------------INSTRUCTOR SOLUTION--------------------------------------------------

// function arrayMachine (arr1, arr2){
//     let combinedArray = [...arr1, ...arr2];
//     let [val1, val2, val3, ...remainingVals] = combinedArray;
//     console.log(`\n${combinedArray}\n`);

//     //map will iterate over all array values in remaingVals
//     //then it will modify the values with what
//     //you do in the function.
//     //Finally, it'll return an array with the modified values

//     remainingVals = remainingVals.map((currentValue) => { //<-- were supposed to use .map() to add the "s" 
//         return `${currentValue}s`;
//     })

//     remainingVals.forEach((val) => {
//         console.log(`The current value is ${val}\n`); //<--Use .forEach() instead of a for loop
//     })

// }

// arrayMachine([1,2,3,4,5], [6,7,8,9,10]);

/**
 * Test 1 Return:
 ---------------- 
 [
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
[
  '1s',  '2s', '3s',
  '4s',  '5s', '6s',
  '7s',  '8s', '9s',
  '10s'
]
 */

//----------------------------------

/**
 * Test 2 Return:
 * --------------
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
The current value is 4s
The current value is 5s
The current value is 6s
The current value is 7s
The current value is 8s
The current value is 9s
The current value is 10s
 */

/**
 * Test 3 Return:
 * ---------------
 * 
 1,2,3,4,5,6,7,8,9,10

The current value is 4s

The current value is 5s

The current value is 6s

The current value is 7s

The current value is 8s

The current value is 9s

The current value is 10s
 * 
 */


//----------------------------------END--------------------------------------------------

//-----------------------------------------------------------HomePractice (03/28/22)------------------------------------

//---------------------------ES6 JS Classes--------------------------------------

//Ex.) From w3Schools

// class Car {
//     constructor(brand){
//         this.brand = brand;
//     }
//     present (){
//         return ` I have a ${this.brand}`;
//     }
// }
// let myCar = new Car("Toyota");//<-- Toyota passed into brand paramter
// console.log(myCar.present()); // Return:  I have a Toyota

//---------------------------ES6 JS Class Inheritance--------------------------------------

//Ex.) From w3Schools

// class Model extends Car{
//     constructor(brand, model){
//         super(brand); //super must be declared first
//         this.model = model;
//     }
//     show(){
//         return `${this.present()} ${this.model} `;

//     }
// }
// let myNewCar = new Model ("Toyota", "Camry");
// console.log(myNewCar.show()); //Returns:  I have a Toyota Camry 

//---------------------------ES6 JS For..of..Loops--------------------------------------

// const forLoopPractice = (desiredString) => {
//     for (let x of desiredString){
//         console.log(x);
//     }
// }
// console.log(forLoopPractice("Gabriel"));
/**
 * Return:
 * -------------------
G
a
b
r
i
e
l
undefined
 */

//---------------------------------ES6 JS Proxies------------------------------------------------

//NOTE: Every Proxy Object needs a handler and a target
//NOTE: Proxies are used for validation, log property accesses, formatting, and sanitizing inputs
//Ex.) Regular Proxy

// const target1 = {item1: "cheese", item2: "eggs"}; //<-- Target 

// const handler1 = {};//<-- Handler

// const proxy1 = new Proxy(target1, handler1); //<-- Proxy Declaration

// //using the proxy 
// console.log(proxy1.item1); // Return: cheese

//Ex.2) Procy get() handler - accesses properties of the target 
// const example2 = {item3: "blue", item4: "red"};
// const handler2 = {get(target, prop, receiver){
//     return "organge";
// }};
// const proxy2 = new Proxy(example2, handler2);
// console.log(proxy2.item3);// Returns: orange
// console.log(proxy2.item4);// Returns: orange
//NOTE: reassigns the values of all the keys in the target object

//Ex.3) Proxy Reflect() class

// let target3 = {item6: "Yellow Car", item7: "Red Car"};

// let handler3 = {get(target, prop, receiver){
//     if (prop === "item6"){
//         return `Blue Car`;
//     }
//     return Reflect.get(...arguments); //<-- 
    
//     },
// }
// const proxy3 = new Proxy(target3, handler3);
// console.log(proxy3.item6); //Returns: Blue Car, which replaces Yellow Car on line 383
// console.log(proxy3.item7); //Returns: Red Car

//Ex.4) 





//-----------------------------------------------------------In-Class (03/29/22)----------------------------------------

//---------------------------------ES6 JS Objects------------------------------------------------


//Ex. Old Way of Constructing a Function
// function Car (){
//     this.running = false; //NOTE: "this." represents the object that will be created.
//     //NOTE: running is the key, false is the value
//     this.startEngine = function(){
//         this.running = true;
//     }
//     this.color = undefined;
// }
// const ferrari = new Car();
// console.log(ferrari); //Returns: Car { running: false }
// const lambo = new Car();
// console.log(lambo); //Return: Car { running: false }

// const rankings = {first: "Jimmy", 
//                   second: "Sandy"};

// rankings.first = "Bob";
// console.log(rankings.first); // Returns: Bob

//Ex. New way (ES6)

class Car {
    constructor(paint){
        this.running = false;
        this.color = paint;

    }
    startEngine(){
        this.running = true;
    }
}

// let ferrari = new Car("Black");
// ferrari.startEngine();
// let lambo = new Car("Gold");

// console.log(lambo);
// console.log(ferrari);

/**
 * Return:
 * -------------
Car { running: false, color: 'Gold' }
Car { running: true, color: 'Black' }
 */


//---------------------------------ES6 JS Class Inheritance------------------------------------------------


//NOTE: Comment out lines 441 throug 446 first

class Tesla extends Car {
    constructor(){
        super("black");
        this.electric = true;
    }
    startEngine(){
        this.running = "I Don't Want No Engine";
    }
    addFuel(){
        this.fuelTankProperties = "electricity";
    }
    stopEngine(){
        this.running = false;
    }
}

let ride = new Tesla();
ride.startEngine();
ride.addFuel();
console.log(ride);









