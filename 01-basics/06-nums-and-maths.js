const score = 600
console.log(new Number(score));
console.log(score.toString().length);
console.log(score.toFixed(2));

console.log(score.toExponential());

const anotherScore = 695.829;
console.log(anotherScore.toPrecision(4));

const value = 20000000;
console.log(value.toLocaleString())

//some information about numbers in javascript
console.log(Number.EPSILON)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MIN_VALUE);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.apply());
console.log(Number.bind());
console.log(Number.call())


//***************************MATHS*************************/

console.log(Math);
console.log(Math.abs(-8));
console.log(Math.round(40.6));
console.log(Math.ceil(40.6));
console.log(Math.floor(40.6));
console.log(Math.min(45,54,85,69,23,15));
console.log(Math.max(45,54,85,69,23,15));

console.log(((Math.random()*10) + 1) - 4)
console.log(Math.abs(((Math.random()*10) + 1) - 4))
console.log(Math.floor(((Math.random()*10) + 1) - 4));
console.log(Math.abs(Math.floor(((Math.random()*10) + 1) - 4)));

//const min = 10
//const max = 20
//console.log(Math.floor(Math.random(min - max +1)*10 + min));

const min = 4
const max = 10
console.log(Math.abs(Math.floor(Math.random(min - max + 1)*11 - min)));
