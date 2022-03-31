//-----------------------------------------------------------In-Class (03/30/22)----------------------------------------

//-----------------------------------------------------------------------------------
//-------------------------------HERO SIMULATOR--------------------------------------
/**
 * INSTRUCTIONS:
 * -------------------
    *Create a hero:
        -The hero should have:
            *real name
            *alias
            *location
            *nemesis
            *friends
            *Status, like is alive
            *Power level (which should be 100)
            *powers
                -each power should have
                    *A name
                    *A level #
            *There should be a method to use a power:
                -When a power is used its level should be subtracted from the hero’s power level
                -If the power used would take the hero’s power level below 0 a warning should be issued that it can’t be used because they’ll die
            *There should be a method to force a power to be used, meaning that no warning should be issued even if the hero’s power level will be taken below 0.
            *If a hero’s power level goes below zero their status should be dead and none of the methods should work
            *Heroes should be able to add a friend
            *Heroes should be able to add a nemesis
    *Create a superhero:
        -This superhero should have all of the details and abilities of the hero with some slight differences:
            *Superhero should have a default power level of 200
            *In addition that should have SUPER powers that are stronger than (higher level) than regular powers
            *Superhero should be able to function up until their power level has reached -100
            *The way in which they operate should have the same names
    *Create at least 2 instances of a hero and 2 instances of a superhero.
 *
 * 
 */
//--------------------------------------------------------BEGIN--------------------------------------------------

//1st) Create a class for the Hero
class Hero{
    constructor(realName, alias, location, powerLevel = 100, nemesis, status = "ALIVE", friends = ["Administrator"]){
        this.realName = realName;
        this.alias = alias;
        this.location = location;
        this.nemesis = nemesis;
        this.friends = friends;
        this.status = status;
        this.powerLevel = powerLevel;
    }
    //2nd) Choose a Name and Alias (Similar Methods)
    chooseName(real){
        this.realName = real;
        return this.realName;
    }
    chooseAlias(notReal){
        this.alias = notReal
        return this.alias;
    }
    //3rd) Location, Friends, and Nemesis Management
    chooseMap (choice){
        switch(choice){
            case 1:
                this.location =  `Mario's Trailer Park`;
                this.nemesis = "Rent Collector"
                let location1Friends = ["Talking Bicycle with No Handlebars |", "Pigeon with No Wings |"]
                this.friends = [...location1Friends];
                console.log(`
            --------------------------------------------------------------------------------------------------------------
            You Have Chosen: ${this.location} | Boss: ${this.nemesis}
            --------------------------------------------------------------------------------------------------------------\n`);
                return this.location, this.nemesis.name;
            case 2:
                this.location = `Browser's cousin's best friend's apartment building`;
                this.nemesis = "Loud Obnoxious Neighbor"
                let location2Friends = ["Sniper Accross The Street"];
                this.friends = [...location2Friends];
                console.log(`
            --------------------------------------------------------------------------------------------------------------
            You Have Chosen: ${this.location} | Boss: ${this.nemesis}
            --------------------------------------------------------------------------------------------------------------\n`);
                return this.location, this.nemesis.name;

            case 3:
                this.location = "Luigi's Check Cashing & Money Orders";
                this.nemesis = "Blind Luigi Owner"
                let location3Friends = ["Fake Check That Might Work"];
                this.friends = [...location3Friends];
                console.log(`
            --------------------------------------------------------------------------------------------------------------
            You Have Chosen: ${this.location} | Boss: ${this.nemesis}
            --------------------------------------------------------------------------------------------------------------\n`);
                return this.location, this.nemesis;
        }
    }
    //4th) Choose power
    choosePower(choice){        
        //---------------------APPROACH 2---------------------------------
        let redline = 5;
        switch(choice){
            case 1:
                //Power 1 place holder
                if (this.powerLevel === redline){
                    console.log(`

                    POWER LEVEL TOO LOW, WAIT TO RECHARGE
                    
                    `);
                }else{
                    let damage1 = 10;
                    let cost1 = 5
                    this.powerLevel = this.powerLevel - cost1; // 
                    console.log(`
                    | Options| For power 1: choosePower(1), For power 2: choosePower(2), For power 3: choosePower(3)
                    ----------------------------------------------------------------------------------------------
                    | You Have Chosen: Red Turtle |  Damage to ${this.nemesis} is : ${damage1} | Cost to ${this.alias}: ${this.powerLevel} | \n`);
                    }
                    break;
            case 2:
                //Power 2 place holder
                if (this.powerLevel === redline){
                    console.log(`
                    
                    POWER LEVEL TOO LOW, WAIT TO RECHARGE
                    
                    `);
                }else{
        
                    let damage2 = 20;
                    let cost2 = 10;
                    this.powerLevel = this.powerLevel - cost2; // 
                    console.log(`
                    | Options| For power 1: choosePower(1), For power 2: choosePower(2), For power 3: choosePower(3)
                    ----------------------------------------------------------------------------------------------
                    | You Have Chosen: Green Turtle  |  Damage to ${this.nemesis} is : ${damage2} | Cost to ${this.alias}: ${this.powerLevel} | \n`);
                    }
                    break;
            case 3:
                //Power 3 place holder
                if (this.powerLevel === redline){
                    console.log(`
                    
                    POWER LEVEL TOO LOW, WAIT TO RECHARGE
                    
                    `);
                }else{
                    let damage3 = 30;
                    let cost3 = 20
                    this.powerLevel = this.powerLevel - cost3; // 
                    console.log(`
                    | Options| For power 1: choosePower(1), For power 2: choosePower(2), For power 3: choosePower(3)
                    ----------------------------------------------------------------------------------------------
                    | You Have Chosen: Spike Turtle |  Damage to ${this.nemesis} is : ${damage3} | Cost to ${this.alias}: ${this.powerLevel} | \n`);
                    }
                    break;
        
        }
        //----------------------APPROACH 1--------------------------------
        // if (choice === 1){
        //     let damage1 = 10;
        //     let cost1 = 5
        //     this.powerLevel = this.powerLevel - cost1; // 
        //     console.log(`
        //     | You Have Chosen: Red Turtle |  Damage to ${this.nemesis} is : ${damage1} | Cost to ${this.alias}: ${this.powerLevel} | \n`);
        // }
        // if (choice === 2){
        //     let damage2 = 20;
        //     let cost2 = 10;
        //     this.powerLevel = this.powerLevel - cost2; // 
        //     console.log(`
        //     | You Have Chosen: Green Turtle  |  Damage to ${this.nemesis} is : ${damage2} | Cost to ${this.alias}: ${this.powerLevel} | \n`);
        // }
        // if (choice === 3){
        //     let damage3 = 30;
        //     let cost3 = 20
        //     this.powerLevel = this.powerLevel - cost3; // 
        //     console.log(`
        //     | You Have Chosen: Spike Turtle |  Damage to ${this.nemesis} is : ${damage3} | Cost to ${this.alias}: ${this.powerLevel} | \n`);
        // }
        // if (this.powerLevel <= 0){
        //     console.log(`

        //     -------------------YOU'RE DEAD, GAME OVER------------------
            
        //     `);
        //     return this.status = "DEAD";           
        // }
        // let redline = this.powerLevel*0.05
        // if (this.powerLevel === redline){

        // }

    } 
    //5th) Attack by Nemesis forces a default defense

    //NOTE: provide means of showing the status of the hero
    get heroStatus(){ // <-- Provides overall status of the hero as actions are taken by the player
        console.log(`
            OVERALL STATUS
            --------------------------------------------------------------------------------------------------------------------
            | HERO NAME: ${this.alias} | TRUE NAME: ${this.realName} | LOCATION: ${this.location}
            --------------------------------------------------------------------------------------------------------------------
            | STATUS:${this.status}  | POWER LEVEL: ${this.powerLevel}
            ----------------------------------------------------------------------------------------------------
            | FRIENDS: ${this.friends}
            | NEMESIS: ${this.nemesis}
            ----------------------------------------------------------------------------------------------------
        `);
    }


}    

//Instance of Hero 1
let hero1 = new Hero("[CHOOSE NAME]", "[CHOOSE ALIAS]") //<-- Instance of hero 1
hero1.heroStatus;
hero1.chooseName("Broke Plumber");
hero1.chooseAlias("Fake Mario ");
hero1.chooseMap(1);
hero1.heroStatus;

while (hero1.powerLevel > 10){
    hero1.choosePower(1);
    hero1.choosePower(2);
    hero1.choosePower(3);
}



// hero1.heroStatus;

//---------------------------------CLASS INHERITANCE--------------------------------------------------
// class Superhero extends Hero{
//     constructor(transform){
//         super();
//         this.transform = {newPowerLevel: 100, newFrien}


//     }
// }





// // hero1.choosePower(2);
// // console.log(`\n\n\n`);
// hero1.choosePower(3);



// let hero2 = new Hero()




//------------------------------------END--------------------------------------------------




