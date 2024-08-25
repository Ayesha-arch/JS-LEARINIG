function sayMyName(){
    console.log('A');
    console.log('y');
    console.log('e');
    console.log('s');
    console.log('h');
    console.log('a');
     
}
sayMyName()

function addTwoNumbers(num1,num2){
    console.log(num1 + num2);
    
}

addTwoNumbers(50, undefined)

const result = addTwoNumbers(2,3)
console.log("Result: ",result);

function addNumbers(n1,n2){
    let result = n1 + n2
    return result
}
const Result = addNumbers(3,4)
console.log("Result: ",Result);
                                         
function loginUser(username){                  //function loginUser(username = 'sam'){ 
    if(username === undefined){                //We can also use (!username) instead of ===
        console.log("Please enter a username");
        
    }
    return `${username} just logged in`

}
console.log(loginUser());

function calculateCartPrize(...num1){     //here rest operator is used
    return num1

} 
console.log(calculateCartPrize(500,600,900));

const user = {
    item: "Bag",
    price: 1300

}
function handleObject(anyObject) {
    console.log(`Item name is ${anyObject.item} and prize is ${anyObject.price}`);
    
}

handleObject(user)
handleObject({       //the object can be called directly in the function 
    item: "bowl",
    price: 500
})

const myNewArray = [500 , 1000 , 600 , 200]

function returnArray(requiredArray) {
    return requiredArray[2]
    
} 
console.log(returnArray(myNewArray));
console.log(returnArray([100,200,400,900]));


