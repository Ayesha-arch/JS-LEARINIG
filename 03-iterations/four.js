const myObject = {
    js : 'javascript',
    py : 'python',
    cpp : 'C++',
    swift : 'swift by apple'

}
for (const key in myObject) {
    //console.log(myObject[key]);
    console.log(`${key} shortcut is ${myObject[key]}`);
    
}

const MyArray = [1,2,3,4,5]
for (const key in MyArray) {
    console.log(`${key} index has value ${MyArray[key]}`);
    
}

// no iteration on map