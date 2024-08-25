const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const add = myNum.map( (n) => (n  + 10) )
//console.log(add);

const multipleMethods = myNum
                        .map( (n) => n / 4 )
                        .filter( (n)=> n>1 )
 console.log(multipleMethods)


    
const Num = []
myNum.forEach( (myNum) => {
    Num.push(myNum + 10)
    //console.log(Num);
    

}
)