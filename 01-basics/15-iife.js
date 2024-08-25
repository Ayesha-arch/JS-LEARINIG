//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS//

(function  one() {                 //NAMED IIFE(one)
    console.log(`DB CONNECTED`);
    
    
})();
                                   
( (name) => {                                          //SIMPLE IIFE(without name)
    console.log(`DB TWO CONNECTED ${name}`);
    
})("code")

//IIFE IS USED TO AVOID THE PROBLEM RAISED DUE TO THE POLLUTION OF GLOBAL SCOPE