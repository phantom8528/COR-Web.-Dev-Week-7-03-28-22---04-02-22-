//-------------------HomePractice (04/03/22)--------------------------

//NOTE: Sets - are similar to arrays, except they cannot contain duplicate values;

//---------------Create a Javascript Set----------------

//Ex.1)
const set1 = new Set();
console.log(set1);//Returns: Set(0) {}

//set with multiple types of values:
const set2 = new Set([1, `hello`, {count: true}]);
console.log(set2); ///Returns: Set(3) { 1, 'hello', { count: true } }

//Ex.2)
const set3 = new Set([1,2,3,`four`]);
console.log(set3);//Returns: Set(4) { 1, 2, 3, 'four' }

//Ex.3) duplicate values in a set are excluded when printed out 
const set4 = new Set([1,1,2,2]);;
console.log(set4);//Returns: Set(2) { 1, 2 }

//---------------Accessing Elements inside a Set----------------
const set5 = new Set([1,2]);
console.log(set5.values());//Returns: [Set Iterator] { 1, 2 }

//adding new elements:
set5.add(5);
console.log(set5);//Returns: Set(3) { 1, 2, 5 }

//duplicate elements added don't show up when printed 
set5.add(2);
console.log(set5.values());//Returns: [Set Iterator] { 1, 2, 5 }

//---------------Removing Elements inside a Set----------------
//NOTE: you can use the .clear() and .delete() methods to remove elements from a set 
//Ex.1)
const set6 = new Set();
set6.add(1);
set6.add(2);
set6.add(3);

console.log(set6.values());//Returns: [Set Iterator] { 1, 2, 3 }

set6.delete(2);//Removing a particular element
console.log(set6.values());//Returns: [Set Iterator] { 1, 3 }

//Ex.2) Removing itemms using the .clear() method
set6.clear()//Removes all the elements from the list
console.log(set6);//Returns: Set(0) {}

//---------------Iterating Through a Set----------------
//Note: You can iterate through a set using the for..loop and and .forEach() method

//Ex.3)
const set7 = new Set([1,2,3]);
//looping through the set
for(let i of set7){
    console.log(i);
}
/**
 * Returns:
 * --------------
1
2
3
 * 
 */

//Ex.4)
const set8 = new Set([`level1`, `level2`, `level3`, `level4`, `level5`]);
for(let i of set8){
    console.log(i);

}
/**
 * Returns
-----------------
level1
level2
level3
level4
level5
 */

//Ex.5)
const set9 = new Set([`bread1`, `ham`, `bacon`, `beef`, `cheese`, `bread2`]);
for (let i of set9){
    console.log(i);
}
/**
 * Returns
----------------
bread1
ham
bacon
beef
cheese
bread2
 */

//Ex,6) using the .forEach() method
const set10 = new Set([2,4,5,6,7,8,8]);
set10.forEach(element => {
    console.log(element);
});
/**
 * Returns:
-------------------
2
4
5
6
7
8
 */

//Ex.7)
const set11 = new Set([`one fish`, `two fish`, `red fish`, `blue fish`]);
set11.forEach(element => {
    console.log(element);
});
/**
 * Returns:
--------------------
one fish
two fish
red fish
blue fish
 */

//-------------SURPRISE PRACTICE---------------
//Ex.8) Creating a Map
let map1 = new Map();
console.log(map1);//Returns: Map(0) {}

//Adding Elements to the map
map1.set(`info`, {item1: "Blue", item2: "Red", item3: "Green"});
console.log(map1);//Returns: Map(1) { 'info' => { item1: 'Blue', item2: 'Red', item3: 'Green' } }

console.log(map1.get(`info`));//Returns: { item1: 'Blue', item2: 'Red', item3: 'Green' }

//iterating through a map's entries
for (i of map1){
    console.log(map1.entries());
}

/**
 * Returns:
 * ------------
[Map Entries] {
  [ 'info', { item1: 'Blue', item2: 'Red', item3: 'Green' } ]
}
 */

//iterating through a Map's values
for(i of map1){
    console.log(map1.values());
}
/**
 * Returns:
 * --------------
[Map Iterator] { { item1: 'Blue', item2: 'Red', item3: 'Green' } }
 */

//iterating through a map's keys
for(i of map1){
    console.log(map1.keys());
}
/**
 * Returns:
 * ---------------
[Map Iterator] { 'info' }
 */

//now using the .forEach() method
map1.forEach(function(value, key)  {
    console.log(value);
});
/**
 * Returns:
 * ---------------
{ item1: 'Blue', item2: 'Red', item3: 'Green' }
 */

//Ex) Lets try that again
let map2 = new Map();
map2.set(`dog1`, "Poodle");
map2.set(`dog2`, "Chiwawa");
map2.set(`dog3`, "GreyHound");

map2.forEach(function(value, key){
    console.log(`${key}: ${value}`);
});
/**
 * Returns:
 * ---------------
dog1: Poodle
dog2: Chiwawa
dog3: GreyHound
 */

map2.forEach(function(value, key){
    console.log(map2.entries());
});

/**
 * Returns:
 * -----------------
[Map Entries] {
  [ 'dog1', 'Poodle' ],
  [ 'dog2', 'Chiwawa' ],
  [ 'dog3', 'GreyHound' ]
}
 */

map2.forEach(function(value, key){
    console.log(key);
});
/**
 * Returns:
dog1
dog2
dog3
 */

//-----------------BACK TO SETS----------------------

//---------------Javascript WeakSet----------------
//NOTE: a weakset can only contain object data types
const weakSet1 = new WeakSet();
let sampleObj = {
    message: "Hi",
    sendMessage: true
};
//adding object element to weakSet
weakSet1.add(sampleObj);

console.log(weakSet1);//Returns: WeakSet { <items unknown> }

//---------------Javascript WeakSet Methods----------------
//Ex.)
const weakSet2 = new WeakSet();
let sample2 = {a: 1};
//add to a WeakSet
weakSet2.add(sample2);
console.log(weakSet2);//Returns: WeakSet { <items unknown> }

//check to see if an element is in a WeakSet
console.log(weakSet2.has(sample2));//Returns: true

//delete elements 
weakSet2.delete(sample2);
console.log(weakSet2);//Returns: WeakSet { <items unknown> }

//---------------Javascript WeakSets aren't iterable----------------

//---------------Javascript WeakSet Mathematical Operations----------------
//NOTE: javascript doesn't provide built int mathematical operations for performing math operation for sets

//Ex.1) Set Union Program

//perform union operations 
//contain elements from both sets 

function union (a,b){
    let unionSet = new Set(a);
    for (let i of b){
        unionSet.add(i);
    }
    return unionSet;
}
//now, lets experiment with two sets of fruits 
let setA = new Set([`apple`,`mango`, `orange`]);
let setB = new Set([`grapes`, `apple`, `banana`]);
let result = union(setA, setB);
console.log(result);//Returns: Set(5) { 'apple', 'mango', 'orange', 'grapes', 'banana' }

//Ex.2)Set Intersection Operation:

//perform intersection operation
//elements of set a that are also in set b 

function intersection(setA, setB){
    let intersectionSet = new Set();
    for (i of setB){
        if(setA.has(i)){
            intersectionSet.add(i);
        }
    }
    return intersectionSet;

}

//two sets of fruits 
let setC = new Set([`apple`,`mango`, `orange`]);
let setD = new Set([`grapes`, `apple`, `banana`]);

let result2 = intersection(setC, setD);
console.log(result2);//Returns: Set(1) { 'apple' }

//Ex.) Set Difference Operation:
//perform difference operation
//elements of one set that aren't in another

function difference(a,b){
    let differenceSet = new Set(a);
    for (let i of b){
        differenceSet.delete(i)
    }
    return differenceSet;
}
//use two sets of fruits from previous example
let result3 = difference(setA, setB);
console.log(result3);//Returns: Set(2) { 'mango', 'orange' }

//Ex.) Set Subset operation
//perform subset operation
//return true if elements of set a are in set b 
function subset(a, b){
    for(let i of b){
        if(!a.has(i)){
            return false;
        }
    }
    return true;
}

//two sets of fruits
let firstSet = new Set([`apple`, `mango`, `orange`]);
let secondSet = new Set([`apple`, `orange`]);

let result4 = subset(firstSet, secondSet);

console.log(result4);//Returns: true



