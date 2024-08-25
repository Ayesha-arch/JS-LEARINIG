//**************************CONVERSIONS***********************//
let score = "45"
console.log(typeof score);
console.log(typeof(score));

//for converting string into number
let valueInNumber = Number(score)
console.log(typeof valueInNumber);

//in some cases the number is not a pure number even when its converted into a number but it always gives NaN which is not a number
let marks = "45as"
console.log(typeof marks)
let marksInNumber = Number(marks)
console.log(typeof marksInNumber)
console.log(marksInNumber)

//when we assign null to the value of variable
let mark = null
console.log(mark)
console.log(typeof null)
let nullInNumber = Number (mark)
console.log(typeof nullInNumber)
console.log(nullInNumber)

//when we assign undefined to the value of variable
let beat = undefined
console.log(beat)
console.log(typeof beat)
let beatInNumber = Number(beat)
console.log(typeof beatInNumber)
console.log(beatInNumber)

//when we use boolean value
let board = true
console.log(typeof board)
let boardInNumber = Number(board)
console.log(typeof boardInNumber)
console.log(boardInNumber)

//similarly when we use string then the output will bw NaN

// "45" => 45
// "45as" => NaN
// true => 1 ; false => 0
// null => 0

//converting 0;1 into boolean form
//in the same way we can also convert string into bool as well
let isloggedin = 1
console.log(typeof isloggedin)
let booleanIsLoggedIn = Boolean(isloggedin) 
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true ; 0 => false
// " " => false
// "Ayesha" => true

//for converting number into string

let total = 58
console.log(total)
let stringInTotal = String(total)
console.log(typeof stringInTotal)

//********************** OPERATIONS **************************//

let value = 5
let negvalue = -value
console.log(negvalue)

console.log(4 + 4)
console.log(4 - 4)
console.log(4 * 4)
console.log(4 / 4)
console.log(4 ** 4)
console.log(4 % 4)

//combining strings
let str1 = "JS"
let str2 = " Coding"
let str3 = str1 + str2
console.log(str3)

console.log(4 + "5")
console.log("4" + 5)
console.log("4" + "5")
console.log("4" + 5 + 6)
console.log(4 + 5 + "6")
//make the code readable it is very important
console.log((4 + 5)*(2 - 8))

console.log(+true)
//console.log(true+)
console.log(+"")

let num , num2 , num3
num1 = num2 = num3 = 2+2
console.log(num1 , num2 , num3)

//PREFIX AND POSTFIX OPERATOR
let gameCounter = 50
gameCounter++;
console.log(gameCounter);

//in postfix the x is incremented first before its value returns to y
//the increment operator increments and returns the value before incrementing
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);

//in prefix the the increment operator increments and returns the value after incrementing
let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);


