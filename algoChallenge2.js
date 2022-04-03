//---------------------In-Class (04/01/22)---------------------------
/**
Code Challenge 2 (Franklin Simpson)
---------------------
Question: Create a function that takes in a letter and logs out the remaining letters 
after it in the alphabet
---------------------
*/

//-------------Gabriel's Solution----------------
//1. Create an array that will be filled with an alphabet
// let alphabet = [];

//2. Populate the array with the alphabet
// const prompt  =  require ("prompt-sync") ({signit: true});
// let x = 26
// while (alphabet.length != x){
//     let letterInput = prompt("enter all the letters:  ");
//     alphabet.push(letterInput);
//     console.log(alphabet);
// }

//3. Copy and paste what was returned into the alphabet array and comment out the first declaration
let alphabet = [  'a', 'b', 'c', 'd', 'e', 'f',
'g', 'h', 'i', 'j', 'k', 'l',
'm', 'n', 'o', 'p', 'q', 'r',
's', 't', 'u', 'v', 'w', 'x',
'y', 'z'];

// function printWhatsAfter(list, letter){
//     for(let i=0; i<list.length; i++){
//         if (list[i] == letter){
//             let x = range(indexOf(list[i]), indexOfLast(list));
//             console.log(x);
//         }
//             // console.log(`Letter Passed in is: ${letter}`);
//             // const [index, ...remaining] = list;
//             // list[i] = index;
//             // console.log(`Letter Entered: ${index}`);
//             // console.log(`What Remains: ${remaining}`);
//         }

//     }

// printWhatsAfter(alphabet, "b");

//---------------Teacher's Solution----------------
// function remainingLetters(passedInLetter){
//     let hasPassedInLetter = false;
//     let alphabet2 = `abcdefghijklmnopqrstuvwxyz`.split('');
//     alphabet2.forEach(function(currentLetter) {
//         if (hasPassedInLetter == true){
//             console.log(currentLetter);
//         }
//         if (currentLetter == passedInLetter){
//             hasPassedInLetter == true;
//         }
//     })

// }
// remainingLetters("g");












