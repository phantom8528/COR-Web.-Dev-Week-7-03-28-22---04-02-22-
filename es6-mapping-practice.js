//-----------------------HomePractice (04/02/22)-------------------------
//--------------es6 Mapping---------------------
//Difference between a Map and an Object: 
//--> Maps are inserted in an insertion order
//--> Maps can use objects, functions, and other data types as keys

//--------------Create a JavaScript Map----------------

//Ex.)
const map1 = new Map() //an empty Map
console.log(map1); //Returns: Map(0) {}

//Ex.2)
const map2 = new Map()
console.log(map2);

//Ex.3)
const map3 = new Map();
console.log(map3);

//Ex.4)
const map4 = new Map();
console.log(map4);

//Ex.5)
const map5 = new Map();
console.log(map5);

//Ex.6)
const map6 = new Map();
console.log(map6);

//Ex.7)
const map7 = new Map();
console.log(map7);

//Ex.8)
const map8 = new Map();
console.log(map8);

//Ex.9)
const map9 = new Map();
console.log(map9);

//Ex.10)
const map10 = new Map();
console.log(map10);

//------------------Inserting Items into The Map--------------------------------

//Ex.1) Inserting Key Value Pairs into the map

const map11 = new Map();

map11.set = (`info`,{name: `Jack`, age: 26}); //<--insert key value pair into the map

console.log(map11)//Returns: Map(0) { set: { name: 'Jack', age: 26 } }

//Ex.2)You can also use objects and functions as keys
const map12 = new Map();

let obj = {};
map12.set(obj, {name:"Bob", age: 24});

console.log(map12); //Returns: Map(1) { {} => { name: 'Bob', age: 24 } }

//Ex.3)
const map13 = new Map();

map13.set(`info`, {make: "ford", model: "explorer", year: "2022", color: "red"});

console.log(map13);
/**
 * Returns:
 * ------------
 *Map(1) {
  'info' => { make: 'ford', model: 'explorer', year: '2022', color: 'red' }
}
 */
//----------------Accessing Map Elements-------------------

//Ex.1) 
const map14 = new Map();
map14.set(`info`,{name:"Steve", age: 35});
//Access the information inside of the map;
console.log(map14.get(`info`))//Returns: { name: 'Steve', age: 35 }

//Ex,.2)
const map15 = new Map();
map15.set(`info`, {type: "plane", capacity: 100, passengers: 50, destination: "Florida"},);
console.log(map15);

//Ex,3)
const map16 = new Map();
map16.set(`contestant`,{type: "ferrari", color: "Blue", speed: 100});
console.log(map16);
/**
 * Returns:
 * ------------
 Map(1) {
  'contestant' => { type: 'ferrari', color: 'Blue', speed: 100 }
}

 */

//-----------------Check Mapping Elements----------------
//Use the "has()" method to check to see if the element is in the map

//Ex.1)
const set1 = new Set(); //<--What does this have to do with ???
let map17 = new Map();
map17.set(`info`, {name: 'John', age: 46});
console.log(map17.has('info')); //Returns: True

//Ex.2)
const map18 = new Map();
map18.set(`info`, {item1: "red", item2: "green", item3: "yellow", item4: "grey"});
console.log(map18.has(`info`)); //Returns: true

//--------------------Removing Elements---------------------
//NOTE: you can use the "clear()" and "delete()" methods to remove items from a map
//The .delete() method returns true it the item existed and was remvoed

//Ex.1) Lets try using the .delete() method
const map19 = new Map();
map19.set(`info`, {item1: "car", item2: "toy", item3: "house", item4: "keys"});
//Removing a particular element
map19.delete(`address`); //Returns: null, because it doesn't exist
console.log(map19); //Returns: Map(1) { 'info' => { item1: 'car', item2: 'toy', item3: 'house', item4: 'keys' }}

map19.delete(`info`);//true
console.log(map19);//Returns: Map(0) {}

//Ex.2) Now lets try using the .clear() method
let map20 = new Map();
map20.set(`info`, {item1: "rack", item2: "plate", item3: "card", item4: "fork"});
map20.clear(); //This will remove all elements
console.log(map20);//Returns: Map(0) {}

//-----------------Javascript Map Size---------------------
//Ex.1)
let map21 = new Map();
map21.set(`info`, {item1: "wheels", item2: "gas", item3: "war", item4: "flowers"});
console.log(map21.size);//Returns: 1

//Ex.2)
let map22 = new Map();
map22.set(`contestant1`, {name: "sara", age: 44, team: "3"});
map22.set(`contestant2`, {name: "amy", age: 30, team: "4"});
console.log(map22);
console.log(map22.size);//Returns: 2

//------------------Iterate Through a Map---------------------
//Ex.1) Using a for loop
let map23 = new Map();
map23.set(`name`, "Tom");
map23.set(`age`, 30);
//looping through a map
for(let[key, value] of map23) {
    console.log(key + `-` + value);
}

/**
 *Returns;
 -------------
name-Tom
age-30
 */

//Ex.2) Using the forEach() method
let map24 = new Map();
map24.set(`name`, "Ferrari");
map24.set(`color`, "Black");
//looping through the map
map24.forEach(function(value, key) {
    console.log(key +`-`+ value);
});

/**
 * Returns:
 * ------------------
name-Ferrari
color-Black
 */

//----------------Iterate Over Map Keys--------------------
//Ex.1) Using a For Loop
let map25 = new Map();
map25.set(`location1`, "Hawaii");
map25.set(`location2`, "Alaska");
//looping through the maps keys
for (let key of map25.keys()){
    console.log(key);
}
//Returns: 
//------------
//location1
//location2

//Ex.2) Using .forEach()
map25.forEach(function(value, key){
    console.log(key);
}); //Returns: location1 location2

//------------Iterate Over Map Values------------------
//Ex.1)
let map26 = new Map();
map26.set(`show1`, "Mobile Suit Gundam");
map26.set(`show2`, "Dimension W");

for (let values of map26.values()){
    console.log(values);
}
//Returns: Mobile Suit Gundam, Dimension W

//Ex.2) using the .forEach() method
let map27 = new Map();
map27.set(`show3`, "Ghost in The Shell");
map27.set(`show4`, "Darwin's Game");
map27.forEach(function(value, key){
    console.log(value);
})
//Returns: Ghost in The Shell, Darwin's Game

//---------------Get Key/Values of of Map----------------
//Ex.1) Using a for loop
let map28 = new Map();
map28.set(`show5`, "Arthur & Friends");
map28.set(`show6`, "Thomas The Tank Engine");
for(let elem of map28.entries()){
    console.log(`${elem[0]}: ${elem[1]}`);
}
/**
 * Return:
 * -----------
show5: Arthur & Friends
show6: Thomas The Tank Engine
 */

//Ex.2)
let map29 = new Map();
map29.set(`game1`, "Super Mario 64");
map29.set(`game2`, "Crash Badacoot");
for (let element of map29.entries()){
    console.log(`${element[0]}: ${element[1]}`);
}

/**
 * Returns:
 * -------------
game1: Super Mario 64
game2: Crash Badacoot
 */

//-----------------------Javascript Maps vs. Objects--------------------

/**
 * Map Object Maps can contain objects and other data types as keys. 
 * Objects can only contain strings and symbols as keys. 
 * Maps can be directly iterated and their value can be accessed. 
 * Objects can be iterated by accessing its keys. 
 * The number of elements of a Map can be determined by size property. 
 * The number of elements of an object needs to be determined manually. 
 * Map performs better for programs that require the addition or removal of elements frequently. 
 * Object does not perform well if the program requires the addition or removal of elements frequently.
 */

// //Ex.) Setting the size of an empty map
// let map30 = new Map();
// map30.size(10);
// console.log(map30);

//-----------------------Javascript WeakMap-------------------------------
/**
 * NOTES:
 * ------------
 * The WeakMap is similar to a Map. 
 * However, WeakMap can only contain objects as keys. For example,
 */

//Ex.1) 
let weakMap1 = new WeakMap();
// console.log(weakMap1);//Returns: WeakMap { <items unknown> }

let obj3 = {};
//adding object (element) to weakMap1
weakMap1.set(obj3, 'Hello');
console.log(weakMap1);

//-----------------------HomePractice (04/03/22)-------------------------

//Ex.2) WeakMap Continued...

let weakMap2 = new WeakMap();

let newObj = {};

weakMap2.set(newObj, `Hello World`);
console.log(weakMap2); //Returns: WeakMap { <items unknown> }
//NOTE: Why does is keep returning items unknown???


//----------------WeakMap Methods-------------------------

//NOTE: Methods for weakmap include:
//.get(), .set(), .delete(), and .has()

//Ex.1) 
let weakMap4 = new WeakMap();
console.log(weakMap4); // Returns: WeakMap { <items unknown> }

let obj4 = {};
weakMap4.set(obj4, `Hello Tom`);//adding object element to weakMap4
console.log(weakMap4);//Returns: WeakMap { <items unknown> }

//get the element of a weakmap
console.log(weakMap4.get(obj4));//Returns: Hello Tom

//check to see if element exists inside of weakmap
console.log(weakMap4.has(obj4));//Returns: true

//delete the element of weakMap4
console.log(weakMap4.delete(obj4));//Returns: true
console.log(weakMap4);//Returns: WeakMap { <items unknown> }

//Ex.2)
let weakMap5 = new WeakMap();
let weakMap6 = new WeakMap();
let weakMap7 = new WeakMap();

let monDay = {item1: `Do Dishes`, item2: `walk the dog`, item3: `clean the car`};
let tuesDay = {item1: `go to the movies`, item2: `call grandmda`};
let wednesDay = {item1: `relax`, item2: `learn to play the piano`, item3: `get a new dog`};

weakMap5.set(monDay, `Mom`);
weakMap6.set(tuesDay, `Dad`);
weakMap7.set(wednesDay, `Daughter`);

console.log(`TEST 1\n`);
console.log(weakMap5);
console.log(weakMap6);
console.log(weakMap7);

/**
 * Returns:
 * -------------
WeakMap { <items unknown> }
WeakMap { <items unknown> }
WeakMap { <items unknown> }
 * 
 */
console.log(`TEST 2\n`);
console.log(weakMap5.get(monDay));
console.log(weakMap6.get(tuesDay));
console.log(weakMap7.get(wednesDay));

/**
 * Returns
 * ---------------
Mom
Dad
Daughter
 */

console.log(`TEST 3\n`);
console.log(weakMap5.has(monDay));
console.log(weakMap6.has(tuesDay));
console.log(weakMap7.has(wednesDay));

/**
 * Returns:
 * --------------
true
true
true
 */

console.log(`TEST 4\n`);
console.log(weakMap5.delete(monDay));
console.log(weakMap6.delete(tuesDay));
console.log(weakMap7.delete(wednesDay));

/**
 * Returns:
----------------
true
true
true
 */

console.log(`TEST 5\n`);
console.log(weakMap5);
console.log(weakMap6);
console.log(weakMap7);
/**
 * Returns:
 * --------------
WeakMap { <items unknown> }
WeakMap { <items unknown> }
WeakMap { <items unknown> }
 */
console.log(weakMap5.get(monDay.item1)); //Returns: undefined

//---------------WeakMaps Aren't iterable-----------------



