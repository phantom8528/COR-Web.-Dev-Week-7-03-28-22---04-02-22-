//------------------ES6 JS Importing & Exporting------------------------
//NOTE: SEE "main.js"
//Ex.)

export function snooperizer(name){
    console.log(`${name}izzle`);

}
//NOTE: use "import snooperizer from "./wordPlay" " 

export const API_KEY = "KLDSKMDLSKDMLSKDL";

export function upperCaseName(name){
    console.log(name.toUpperCase())
}
export const powers = {
    jump: 10,
    punch: 20,
    swim: 50
};