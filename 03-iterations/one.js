// for loop

//for (let index = 0; index < array.length; index++) {
//    const element = array[index];
    
//}

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element === 6) {
        console.log("6 is best number");
        
    }
    console.log(element);
    
}
//console.log(element);

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(`Outer loop value: ${i}`);
    
    for (let j = 0; j < 10; j++) {
        const element = j;
        //console.log(`Inner loop value ${j} and Outer loop value ${i}`);
        console.log(`${i} * ${j} = ${i*j}`);
        
    }
    
}

let MyArray = ['one' , 'two' , 'three' , 'four']
for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    console.log(element);
     
}

for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log("DETECTED 5");
        break 
    }
    console.log(`The value of i is ${index}`);
    
}
for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log("DETECTED 5");
        continue 
    }
    console.log(`The value of i is ${index}`);
    
}
