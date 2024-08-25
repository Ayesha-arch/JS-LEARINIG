// for-of loop
["" , "" , ""]
[{} , {} , {}]

const arr = [1 , 2 , 3 , 4 , 5 , 6]
for (const num of arr) {
    console.log(num);
    
}

const greetings = "HELLO!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}

//MAP

const map = new Map()
map.set('PAK' , 'PAKISTAN')
map.set('USA' , 'UNITED STATES OF AMERICA')
map.set('GER', 'GERMANY')
console.log(map);

for (const [key , value] of map) {
    console.log(key , ':-' , value);
    
}

//const myObject = {
   // 'game1': 123,
   // 'game2': 456
//}
//for (const [key , value] of myObject) {
    //console.log(key , ':-' , value);

//}
