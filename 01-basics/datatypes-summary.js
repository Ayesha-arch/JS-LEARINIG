
//PRIMITIVE DATATYPE

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 50;
const moreScore = 50.45;
const userLogin = true;
const temp = null;
let carNum; //this gives the default indefined value
let bikeNum = undefined; //this is already declared undefined
const id = Symbol('123')
const idSec = Symbol('123')
console.log(id === idSec);
const BigNumber = 123456789n

//REFERENCE/NON-PRIMITIVE DATATYPES

// Arrays, Objects, Functions
const types = ["car", "bike","jeep"];
let myObj = {
    name: "Ayesha",
    age: 19,

}

const myFunction = function(){
    console.log("JS Coding");
}
//*********************PRIMITIVE*********************/
// Number => number
// BigInt => bigint
// String => string
// Boolean => bool
// null => object
// undefined => undefined
// Symbol => symbol

//************************NON-PRIMITIVE***************************/
//Arrays  =>  object
//Function  =>  function
//Object  =>  object

//=================================================================//

// Stack(PRIMITIVE)    

let nameOne = "Ayesha";
let nameTwo = nameOne;
nameTwo = "Amna"
console.log(nameOne);
console.log(nameTwo);

// Heap(NON-PRIMITIVE)

let gradeOne = {
    studentOne: "A",
    studentTwo: "B",

}

let gradeTwo = gradeOne;
gradeTwo.studentOne = "C"

console.log(gradeOne.studentOne);
console.log(gradeTwo.studentOne);


