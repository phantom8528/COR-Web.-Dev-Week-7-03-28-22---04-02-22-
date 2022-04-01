//------------------------USER PROMPT IN NODE.JS-------------------------

//1st) type "npm install prompt-sync" at the project level, giving all projects this functionality

//----------------Approach 1------------------------

"use strict"; // Must type this first

// const ps = require("prompt-sync");
// const prompt = ps();

// let name = prompt("Do It Again: ");
// console.log(`Hello ${name}`);

//--------------Approach 2-----------------------------

const prompt  =  require ("prompt-sync") ({signit: true});

let name = prompt("Do It One More Time: ");
console.log(`Hello ${name}`);
