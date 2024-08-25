
const user_email = "abc@gmail.com"
if (user_email) {
    console.log("Got user email");
    
} else {
    console.log("donot have email");
    
}
const empty_string = ""
if (empty_string) {
    console.log("Got true");
    
} else {
    console.log("Got false");
    
}
const array = []
if (array) {
    console.log("Got true");
    
} else {
    console.log("Got false");
    
}

//FALSY VALUES
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

//TRULY VALUES
// "true" , " " , "0" , [] , {} , function(){}

if (array.length === 0) {
    console.log('true');

}

const empty_object = {}
if (Object.keys(empty_object).length === 0) {
    console.log("Object is empty");
    
}

//Nullish Coalesing Operator (??) : null undefined 

let val1;
//val1 = 5 ?? 23
//val1 = null ?? 45
//val1 = undefined ?? 10
val1 = null ?? 10 ?? 40

console.log(val1);

//Terniary Opeaator
// condition ? true : false

const price = 300
price >=350 ? console.log("The price is greater that 250") : console.log("The price is less than 250");


