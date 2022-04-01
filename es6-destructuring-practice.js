//----------------------03/31/22--------------------------

//----------------Destructuring Objects--------------
//Ex.1) From Canvas Lesson: 

// const person = {
//     name: "Sara",
//     age: 25,
//     gender: "female"}
// ;

// //destructuring assignment
// let { name, age, gender } = person;
// //NOTE: order does not matter when destructuring an object

// console.log(name); //Returns: Sara
// console.log(age); //Returns: 25
// console.log(gender); //Returns: female

// //Ex.2) If you want to assign a different variablbe
// const person2 = {
//     name: "Bob",
//     age: 34,
//     gender: "male"
// }

// //destructuring assignement
// //using different variable names

// let {name: altName, age: age1, gender: gender1} = person2;

// console.log(altName); //Returns: Bob
// console.log(age1); //Returns: 34
// console.log(gender1); //Returns: male

// //Ex.3) Practice1

// const practice1 = {
//     make: "Ford",
//     model: "Explorer",
//     color: "Black",
//     engineElectric: false,
//     engineGas: true,
//     gasType: "regular unleaded"
// }

// let {make, model, color} = practice1;

// let salesAd = `
// COME SEE OUR BRAND NEW SELECTION OF
// ${make} ${model}s all in ${color}`;

// /**
//  * Returns:
//  -------------
// COME SEE OUR BRAND NEW SELECTION OF
// Ford Explorers all in Black
//  */

// console.log(salesAd);

// //Ex.4) Practice 2


// //----------------Array Destructuring--------------

// //Ex.1) From Canvas
// const arrValue = ["one", "two", "three"];
// //destructuring assignemtn in arrays
// const [x,y,z] = arrValue;
// console.log(x); // Returns one
// console.log(y); //Returns two
// console.log(z); //Returns three

//----------------Assigning Default Values--------------

//Ex.1)
// let newValue = [10];

// //assigning a default value of 5 and 7
// let [x=5, y=7] = newValue;
// console.log(x); //Returns: 10, overriding the 5
// console.log(y); //Returns: 7

// //Ex.2) Assigning Default Values in Objects 
// const practice3 = {
//     name: "Jack",
// }
// //assign default value 26 to age if undefined 
// const {name, age = 26} = practice3;
// console.log(name); //Returns: Jack
// console.log(age); //Returns: 26


//----------------Swapping Variables--------------
//Ex.1) Program to Swap Variables
// let x = 4;
// let y = 7;

// //swapping variables
// [x,y] = [y,x];

// console.log(x); //Returns: 7
// console.log(y); //Returns: 4

//----------------Skipping Items--------------
//Ex.1)
// const practice4 = ["red", "blue", "green"];

// //destructing assignment in arrays
// const [x, ,y] = practice4;

// console.log(x);//Returns: red
// //Skips over "blue" entirely
// console.log(y);//Returns: green

//----------------Assigning Remaing Elements to a Single Variable--------------

//Ex.1) ...In Arrays
const practice5 = ["hand", "foot", "ring", "sky", "train", "black", "white"];
const [firstElement, ...remainingElements] = practice5;

console.log(firstElement);
//Returns: hand
console.log(remainingElements);
//Returns: [ 'foot', 'ring', 'sky', 'train', 'black', 'white' ]

//Ex.2) ...In Objects
const practice6 = {
    slice1: "good",
    slice2: "good",
    slice3: "moldy",
    slice4: "moldy",
    slice5: "good"
};

let {slice1, slice2, ...throwAway} = practice6;
let sandwichPrep = [slice1, slice2];
console.log(sandwichPrep); //Returns: [ 'good', 'good' ]

//NOTE: "const [...x, y] = objectName" will not work
//the variable with the spread syntax should always go last

//----------------Nested Destructuring--------------
//Ex.1) Array inside an Array
const practice7 = ["house", ["room1", "bath1"]];
//nestted destructuring assignment in arrays
const [x, [y,z]] = practice7;

console.log(x); //Returns: house
console.log(y); //Returns: room1
console.log(z); //Returns: bath1

//Ex.2) Object inside an Object

const practice8 = {
    name: "Mike",
    age: 29,
    hobbies:{
        read: true,
        playGame: true
    }
};

//nested destructuring
const {name, hobbies: {read, playGame}} = practice8;
console.log(name); //Returns: Mike
console.log(read); //Returns: true
console.log(playGame); //Returns: true




