const name = "Ayesha";
const age = 19;


console.log(  name + " " +age + " years old");

console.log(`Hello my name is ${name}.I am ${age} years old. `);

//there are two ways of addind strings but prefer to use the second method`

const gameName = new String('Coding')
console.log((gameName[5]));
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('i'));
console.log(gameName.substring(1,5)); //the index 5 is not included

//another way of using methods by const

const newString = gameName.slice(-5,3)
console.log(newString);

//we can only use -ve sign in only slice not in substring

const stringOne = "   Ayesha    "
console.log(stringOne);
console.log(stringOne.trim()) //in the same way trimEnd , trimStart is also used

const url = "http//:localplace.com/local%30place"
console.log(url.replace('%30','-'))

console.log(url.includes('place'))

const numbers = "ONE-TWO-THREE-FOUR-FIVE"
console.log(numbers.split('-'))
console.log(numbers.at(5))
console.log(numbers.big())
console.log(numbers.blink())
console.log(numbers.bold())
console.log(numbers.charCodeAt(7))//
console.log(numbers.codePointAt(7))//
console.log(numbers.concat(" ",gameName)) //combines strings
console.log(numbers.endsWith('I'))
console.log(numbers.startsWith('ON'))
console.log(numbers.lastIndexOf(21)) //
console.log(numbers.length)
console.log(numbers.localeCompare(gameName))
console.log(numbers.match(/FIVE/)) //matches the string

const str1 = "I am learning javascript programming and it is very very much useful to me as it is very helpfull"
const regex = /very/g
const matchesArray = [...str1.matchAll(regex)]; //it is used to match all the same index
console.log(str1.replace(regex , 'good'))

console.log(matchesArray)

console.log(stringOne.normalize("NFKD"))

console.log(name.padStart(10,"."))
console.log(name.padEnd(20,'_'))

console.log(name.repeat(4))

console.log(str1.replaceAll("very","perfect"))

console.log(str1.search("much"))

console.log(name.small())
