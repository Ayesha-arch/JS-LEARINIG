const myArr =  [1,3,2,4,5];
const myArr2 = ["two", "Coding"];
const Arr = new Array(23,45,65,78);
console.log(myArr[3]);

myArr.push(6)
myArr.pop() //removes the last value of the arr
console.log(myArr);

Arr.unshift(0) //adds arr to the start
Arr.shift()
console.log(Arr);

console.log(myArr.includes(12));
console.log(myArr.indexOf(1));

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice 

console.log("A", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);

// splice

console.log("B" , myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2);

console.log(myArr);

