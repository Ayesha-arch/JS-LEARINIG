const num1 = [1,2,3,4,5,6]
console.log(num1);

const num2 = [7,8,9,10]
console.log(num2);

//num1.push(num2)
//console.log(num1);

const num3 = num1.concat(num2) //concat method
console.log(num3);

const num4 = [...num1 , ...num2] //spread method
console.log(num4);

const array1 = [1,2,3,4,5,[6,8,2],7,5,2,[5,2,[9,6,4,2]]]
const array2 = array1.flat(Infinity)
console.log(array2);

console.log(Array.isArray("Ayesha"));
console.log(Array.from("Ayesha"));
console.log(Array.from({name : "Ayesha"}));

let score1 = 50
let score2 = 80
let score3 = 90
console.log(Array.of(score1,score2,score3));