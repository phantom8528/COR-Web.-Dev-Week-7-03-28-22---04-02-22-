let jrSwimRight = `
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

                (M) -->
`;

let jrSwimLeft = `
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

             <---(M)
`;

let jrEntrance = `

_____(M)___________
                    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~`;

let shipOutside = `
                            |
~~~~~~~~~~~~~~~~~~~~~~~~~~~~|~~~~~~~~~~~~~~~~~~~~
                            |
                            |
        (M)           ===============
                        ==========  <--Sunken Ship
                            ===

`;

let shipInside = `          |
~~~~~~~~~~~~~~~~~~~~~~~~~~~~|~~~~~~~~~~~~~~~~~~~~~~
                            |    
                            |
  ==================================================
                    (M)
    ===========================================

            ============================

                ===========

`;

let caveOutside = `
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




                -------------------------------------

        (M)       CAVE ENTRANCE
-------------------------
                |
                |
                -----------------
                                  |  --------------
`;

let caveInside =   `
------------------------------------



                            (M) 
---------- ~~~~~~~~~~~~ ------------
`;

let startLine = `
|        |          |
|        |          |
|        |          |
=============================
    START YOUR ENGINES
==============================
    [][]     [][]            
    [][]     [][]
    MARIO   BROWSER
`;

let marioAhead = `
|        |          |
|        |          |
|  [][]  |          |
|  [][]  |          |
| MARIO  |          |
|        |          |
|        |  [][]    |
|        |  [][]    |
|        |  BROWSER |
|        |          |
`;

let browserAhead = `
|        |          |
|        |  [][]    |
|        |  [][]    |
|        |  BROWSER |
|        |          |
|  [][]  |          |
|  [][]  |          |
|  MARIO |          |
|        |          |
|        |          |
`;
let pcInside = `
-------------------------------------
|                                   |
|                                   |
|                                   |
|                               ____|
|                          ____|    |
|                      ____|        |
|                  ___|             |
|                  |                |
|     (M)     ____ |                |
-------------------------------------`;

let pcCastle = `           
                        |-------|
                        |       |
                        |-------------------|
                        |                   |
                        |                   |
                        |      |--|         |
_____________(M)________|______|  |________ | ` ;

let pcPaintingsRoom = `
--------------------------------------------------
                PEACH'S PAINT ROOM
____________                    _________________
|           |                   |               |
|  JOLLY    |                   |     ????      |
| RODGER    |                   |      MAP      |
|   BAY     |                   |               |
~~~~~~~~~~~~                    |               |
|           |                   |               |
|           |                   |               |
|           |                   |               |
                    (M)
--------------------------------------------------


`

//:::::::::::::::;GRAPHICS END:::::::::::::::::::::::::::

export default function marioGraphics(pick){
    switch(pick){
        //--------------PEACH'S CASTLE------------------
        case "pc-outside":
            //outside the castle
            console.log(pcCastle);
            break;
        case "pc-inside":
            //inside the castle
            console.log(pcInside);
            break;
        case "pc-two-paintings":
            //room with two painting portals
            console.log(pcPaintingsRoom);
            break;
        //--------------JOLLY RODGER'S BAY----------------
        case "jr-beach":
            //entrance placeholder
            console.log(jrEntrance);
            break;
        case "jr-swim-right":
            //swimming right
            console.log(jrSwimRight);
            break;
        case "jr-swim-left":
            //swimming left
            console.log(jrSwimLeft);
            break;
        case "jr-sunkenship-outside":
            //found sunken ship
            console.log(shipOutside)
            break;
        case "jr-sunkenship-inside":
            //insisde the sunken ship
            console.log(shipInside);
            break;
        case "jr-treasure-cave-outside":
            //cave at the bottom of the ocean
            console.log(caveOutside);
            break;
        case "jr-treasure-cave-inside":
            //inside the cave 
            console.log(caveInside);
            break;
        //--------------MARIO CART------------------------
        case "mc-start-line":
            //starting line with three racers
            console.log(startLine);
            break;
        case "mc-mario-ahead":
            //mario ahead of the other racer
            console.log(marioAhead);
            break;
        case "mc-browser-ahead":
            //browser ahead of mario
            console.log(browserAhead)
            break;
    
    }
}

// module.exports = {marioGraphics} // es5 way









