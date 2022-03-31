//------------------------------------ HomeWork -  (03/30/22)------------------------------

/**
 * The following is an attempt to simulate a road trip 
 */

//1st) Graphics for each scenario
//::::::::::::::::::::::GRAPHICS::::::::::::::::::::::::::::::
let repairOpt = `
        |           |
        |           |
        |           |
        |           |
        |           |
________|           |
                    |
MECHANIC            |
[][]                |
[][]                |
________            |
        |           |
`;
//-------------------------------------

let policeOpt = `
        |           |
        |           |
        |           |
        |           |
        |           |
[][] <-- POLICE     |
[][]    |           |
        |           |
        |           |
        |           |
[][]    |           |
[][]    |           |
        |           |
        |           |`;
//-------------------------------------

let foodOpt = `
        |           |
        |           |
        |           |
        |           |
        |           |
________|           |
                    |
FOOD                |
[][]                |
[][]                |
________            |
        |           |
`;
//-------------------------------------

let cruiseOpt = `
|  C        |
|  R        |
|  U        |
|  I        |
|  S        |
|  E        |
|           |
|           |
|   [][]    |
|   [][]    |
|           |
|           |       
`;
//-------------------------------------

let gasOpt = `
        |           |
        |           |
        |           |
        |           |
        |           |
________|           |
                    |
GAS                 |
[][]                |
[][]                |
________            |
        |           |
`;
//-------------------------------------
let robBank = `

________|           |
                    |
ROB BANK            |
[][]                |
[][]                |
________            |
        |           |
        |           |
        |           |
        |           |
        |           |
        |           |
`;


//::::::::::::::::::::::GRAPHICS::::::::::::::::::::::::::::::

class ByRoad { //----------------PARENT CLASS START---------------------
    constructor(){
        this.fuel = 50;
        this.wallet = 100;
        // this.good = true;
        this.miles = 100
    }
    //-------------------------------------------
    //Progress of the trip
    progression (){
        var aMile = Math.floor(Math.random() * 6); // How the car will move; any number between 0 and 6 

        let yourBroke = 0;
        let yourEmpty = 0;

        if (this.fuel == yourEmpty || this.wallet == yourBroke){
            console.log(`
            -------GAME OVER-------
            `);
            
        }else{
            switch(aMile){
                case 0:
                    //Nothing, just drive
                    let zeroOverride = 1;
                    this.miles = this.miles - aMile;
                    this.fuel = this.fuel - 5;
                    console.log(`
---------------------------------------------------------
YOU'VE TRAVELLED: ${zeroOverride} Miles
---------------------------------------------------------
                    `);
                    console.log(cruiseOpt);
                    return this.miles, this.fuel;
                    // break;
                case 1:
                    //Spend money on food 
                    this.wallet = this.wallet - 5;
                    this.fuel = this.fuel - 5
                    this.miles = this.miles - aMile;
                    console.log(`
---------------------------------------------------------
YOU'VE TRAVELLED: ${aMile} Miles
---------------------------------------------------------
                    `);
                    console.log(foodOpt)
                    return this.wallet, this.fuel, this.miles

                case 2:
                    //Need Repairs
                    this.wallet = this.wallet - 30;
                    this.fuel = this.fuel - 5
                    this.miles = this.miles - aMile;
                    console.log(`
---------------------------------------------------------
YOU'VE TRAVELLED: ${aMile} Miles
---------------------------------------------------------
                    `);
                    console.log(repairOpt);
                    return this.wallet, this.fuel, this.miles;
                    // break;
                case 3:
                    //Police ticket
                    this.wallet = this.wallet - 20;
                    this.fuel = this.fuel - 5
                    this.miles = this.miles - aMile;
                    console.log(`
---------------------------------------------------------
YOU'VE TRAVELLED: ${aMile} Miles
---------------------------------------------------------
                    `);
                    console.log(policeOpt);
                    return this.wallet, this.fuel, this.miles;
                    // break;
                case 4:
                    //Get Gas
                    this.wallet = this.wallet - 10;
                    this.fuel = this.fuel + 10
                    this.miles = this.miles - aMile;
                    console.log(`
---------------------------------------------------------
YOU'VE TRAVELLED: ${aMile} Miles
---------------------------------------------------------
                    `);
                    console.log(gasOpt);
                    return this.wallet, this.fuel, this.miles;
                    // break;
                case 5:
                    //Rob a Bank
                    this.wallet = this.wallet + 10;
                    this.fuel = this.fuel - 5
                    this.miles = this.miles - aMile;
                    console.log(`
---------------------------------------------------------
YOU'VE TRAVELLED: ${aMile} Miles
---------------------------------------------------------
                    `);
                    console.log(robBank);
                    return this.wallet, this.fuel, this.miles;
            }      
        }
    }
    //Status of the trip
    get status(){
        console.log(`
        |MONEY: $${this.wallet}.00   |FUEL: ${this.fuel} Gallons 
        -------------------------------------------------------------
        |MILES LEFT: ${this.miles} Miles |
        `);
    } 
 }//----------------PARENT CLASS END---------------------

 let dateTime = new Date();
 console.log(`


 --------ROUND | @ ${dateTime}---------- 


 `); // to keep track of when run the program in the command terminal

 const letsGo = (gasPedal) => { //<-- function takes in the number of times the class methods are called
    let vacation = new ByRoad();
    for (let i=0; i<gasPedal; i++){
        vacation.progression();
        vacation.status;
    }
}

let howFar = Math.floor(Math.random() * 10); //Randomizes the number of times that the function is run

letsGo(howFar); //<-- class methods .status() and .progression() are called 10 times

class policeChase extends ByRoad{
    constructor(){
        
    }
}




