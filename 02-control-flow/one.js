// if
// < , > , == , === , <= , >= , != , !==

if (2 == "2") {
    console.log("EXECUTED");
    
}

if (2 === "2") {
    console.log("EXECUTED");
    
}


const temperature = 56
if (temperature < 50) {
    console.log("Temperature is less than 50");
     
} else {
    console.log("Temperature is greater than 50");
     
}

const score = 600
if (score > 400) {
    let power = "Fly"
    //var power = "Fly"
    console.log(`The power is: ${power}`);
    
}
//console.log(`Power is not executed due to var`);

const balance = 1000
if (balance < 450) {
    console.log("Balance is less than 450");
     
} else if (balance < 600) {
    console.log("Balance is less than 600");
    
} else if (balance < 950) {
    console.log("Balance is less than 950");
    
} else (balance < 1300); {
    console.log("Balance is less than 1300");
    
}

const userlogin = true
const debit_card = true
const through_email = true
const through_google  = false

if (userlogin && debit_card) {
    console.log("Allow to purchase");
    
}

if (through_email || through_google) {
    console.log("User logged in");
      
}

