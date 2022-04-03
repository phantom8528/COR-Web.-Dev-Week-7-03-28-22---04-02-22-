//----------------------------HomePractice(04/03/22)--------------------------
//NOTE: for...of was introduced in es6

/**
Syntax:
----------------------
for (element of iterable){
    //body of for...of loop
}
iterable - any iterable object (array, set, string, etc.)
element - items in the iterable
 */

//-----------------------for...of with  Arrays--------------------
//Ex.)
const students =  ["John", "Sara", "Jack"];
for (element of students){
    console.log(element);//<--display the elements
}

/**
Returns:
---------------
John
Sara
Jack
 */

//-----------------------for...of with Strings--------------------
//Ex.)
const string = `code`;
//using the for loop
for (element of string){
    console.log(element);
}
/**
Returns:
---------------
c
o
d
e
 */

//-----------------------for...of with Sets--------------------
//Ex.)
const set1 = new Set([1,2,3]);
//looping through a set
for(let i of set1){
    console.log(i);
}

/**
Returns:
--------------
1
2
3
 */

//-----------------------for...of with Maps--------------------
//Ex.)
let map1 = new Map();
//insert some elements 
map1.set(`name`, "Jack");
map1.set(`age`, 27);

//looping through the map
for (let [key, value] of map1){
    console.log(key + `-` + value);
}
/**
Returns:
---------------
name-Jack
age-27
 */

//-----------------------User Defined Iterators--------------------
//----------> SKIP FOR NOW


//-----------------------for...of with Generators--------------------
//What is a generator???
/**
Definition:
-------------
The Generator object is returned by a generator function 
and it conforms to both the iterable protocol 
and the iterator protocol.
 */

//Ex.) Generator example
function* generator(i){
    yield i;
    yield i + 10;
}
const gen = generator(10);

console.log(gen);//Returns: Object [Generator] {}
console.log(gen.next().value);//Returns: 10
console.log(gen.next().value);//Returns: 20

//Ex.)for...of with generator functions

function* generator2(){
    yield 10;
    yield 20;
    yield 30;
}
const sample3 = generator2();

//iteration through generator
for (let value of sample3){
    console.log(value);
}

/**
Returns:
-----------
10
20
30
 */
