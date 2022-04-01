//--------------------------HomeWork (03/31/22)------------------------------
//Instructions: Create three files connected via import /  export
//-----------------------------------------------------------------
//Solution: Use of recently learned es6 skills to simulate super mario video game

import marioGraphics from "./graphics.js"; // <-- The es6 Approach
import jollyRodgersBay from "./door1.js"; // <-- The es6 Approach


// const f = require(`./graphics.js`); // The es5 Approach
// const j = require(`./door1.js`);
// const m = require(`./door2.js`);

// const prompt  = require("prompt-sync") ({signit: true});
console.log(`
    -------------------------------------------
                  WELCOME 
                    TO
        SUPER MARIO FOR ES6 JAVASCRIPT 
    KEY: (M) MARIO <-- THIS IS YOUR CHARACTER
    -------------------------------------------
        TYPE IN "begin" to start the game
--------------------------------------------------- `);
let userInput = window.prompt(`Enter Command Here: `) //Will be passed into the runGame function

export default function runGame(input){
    switch (input){
        case "begin":
            // console.log("\nHello World\n"); //TEST: successful
            const level1 = marioGraphics("pc-outside");
            console.log(level1);
            let level1Input = window.prompt(`
            -----------------------------------
            Enter "next" to move forward
            OR "end? to terminate program
            ----------------------------------- `);
            switch (level1Input){
                case "next":
                    marioGraphics("pc-inside");
                    let level2Input = window.prompt(`Enter "next" to move forward: `);
                    switch(level2Input){
                        case "next":
                            const level3 = marioGraphics("pc-two-paintings");
                            console.log(level3);
                            let level3Input = window.prompt(`
                            -------------------------------------------
                            ENTER "jr" for Jolly Rogers Bay
                            ENTER "???" Mystery Map
                            -------------------------------------------  `);
                            switch (level3Input){
                                case "jr":
                                    jollyRodgersBay(level3Input); // jollyRodgersBay() in door1.js is activated
                            }
                    }
                case "end":
                    //terminate program from outside of the castle
                    let end = process.exit(1);
                    return end;
            }
    }

}

runGame(userInput);

const backToStart = () =>{
    runGame(userInput);
}