//Jolly Rodgers Bay
import marioGraphics from "./graphics.js"; // <-- The es6 Approach
import runGame from "./main.js"; // <-- The es6 Approach


// export default jollyRodgersBay = (input) => {

// }

export default function jollyRodgersBay(input){
    switch(input){
        case "jr":
            let jrInput1 = window.prompt(`
            -------------------------------------------
                         WELCOME 
                           TO
                    JOLLY RODGERS BAY
            -------------------------------------------
                TYPE IN "beach" to go to beach
            -------------------------------------------
            `);
            switch (jrInput1){
                case "beach":
                    marioGraphics("jr-beach")
                    let beachInput = window.prompt(`
                    -------------------------------------------
                    TYPE IN "swim" to jump in the water: 
                    -------------------------------------------`);
                    switch(beachInput){
                        case "swim":
                            marioGraphics("jr-swim");
                            let swimInput = window.prompt(`
                            ---------------------------------------
                            to go left type "left" 
                            to go right, type "right"
                            ---------------------------------------`);
                            switch (swimInput){
                                case "left":
                                    //go left
                                    // console.log("SUNKIN SHIP COMES NEXT");
                                    marioGraphics("jr-swim-left");
                                    let swimLeftInput = window.prompt(`
                                    ----------------------------------------
                                    Type "next" to keep going
                                    ----------------------------------------`);
                                    switch(swimLeftInput){
                                        //SUNKIN SHIP
                                        case "next":
                                            marioGraphics("jr-sunkenship-outside");
                                            let shipInput = window.prompt(`
                                            ----------------------------------------------
                                            Type "board" to go aboard
                                            ---------------------------------------------`);
                                            switch(shipInput){
                                                case "board":
                                                    let trunkArray = ["GOLDEN STAR", "TRAP1", "TRAP2"]
                                                    const [option1, ...unWanted] = trunkArray; // pulls "GOLDEN STAR" from the array
                                                    marioGraphics("jr-sunkenship-inside");
                                                    let salvageShip = window.prompt(`
                                                    ------------------------------------------
                                                    Open the trunkArray: type "open"
                                                    ------------------------------------------`);
                                                    switch (salvageShip){
                                                        case "open":
                                                            console.log(`
                                                            ---------------------------
                                                                CONGRAGULATIONS
                                                                YOU'VE FOUND THE 
                                                                   ${option1}
                                                            ---------------------------`);
                                                            let returnHome = window.prompt(`
                                                            ---------------------------------------
                                                            Type "begin" to return to painting room
                                                            ---------------------------------------`);
                                                            switch(returnHome){
                                                                case "begin":
                                                                    runGame(returnHome); // accesses runGame in the main.js file
                                                            }
                                                    }

                                            }

                                    }
                                case "right":
                                    //go right
                                    // console.log("DEEP WATER CAVE COME NEXT");
                                    marioGraphics("jr-swim-right");
                                    let swimRightInput = window.prompt(`
                                    ------------------------------------------
                                    Type "next" to keep going
                                    ------------------------------------------`);
                                    switch(swimRightInput){
                                        //CAVE ENTRANCE
                                        case "next":
                                            marioGraphics("jr-treasure-cave-outside");
                                    }


                            }

                    }

            } 
            
    }

}