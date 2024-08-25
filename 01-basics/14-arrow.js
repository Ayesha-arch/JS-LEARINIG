const user = {
    username: "Ayesha",
    price: 1200,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        
        console.log(this);
        
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);

function one() {
    let username = "sam"
    console.log(this.username);
    
    
}
one()

const two = function () {
    let id = "abc"
    console.log(this.id);
    
    
}

const three = () => {
    let id = "A"
    console.log(this.id);
    
}
three()


const add =  (num1 , num2) => {     //BASIC ARROW FUNCTION
    return num1 + num2    
}
console.log(add(6,8));


const subtract =  (num1 , num2) =>  (num1 - num2)  //IMPLICIT RETURN(ARROW FUNCTION)    
console.log(subtract(6,8));


const returnObject =  (num1 , num2) =>  ({username: "JS CODE"})
console.log(returnObject());



