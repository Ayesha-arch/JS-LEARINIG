//let a = 10;
//const b = 20;
//var c = 30;

if (true) {
    let a = 10
    const b = 20
    var c = 30

    console.log(`INNER BLOCK SCOPE: ${a}`);
    
   
}
//console.log(a);
//console.log(b);
console.log(`OUTER GLOBAL SCOPE: ${c}`);     //only var prints in the if statement

function one() {
    const username = "Ayesha"

    function two() {
        const website = "VS Code"

        console.log(username);
        
        
    }
    //console.log(website);
    
    two()
    
}
one()

if (true) {
    const username = "Ayesha"
    if (username === "Ayesha") {
        const website = " VS Code"
    
        console.log(username + website);  
    }
    //console.log(website);
    
    
}
//console.log(username);


function addOne(num) {
    return num + 1
    
}
console.log(addOne(2));

const addTwo = function (num) {
    return num + 2
    
}
console.log(addTwo(5));
