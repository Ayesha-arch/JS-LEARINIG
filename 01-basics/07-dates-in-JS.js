let myDate = new Date;
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(myDate.getTimezoneOffset());
console.log(myDate.getHours());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getMilliseconds());
console.log(myDate.getMinutes());
console.log(myDate.getUTCDate());
console.log(myDate.getUTCDay());
console.log(myDate.getVarDate);
console.log(myDate.setFullYear());

let myCreatedDate = new  Date (2023,0,5,6,46,52)
console.log(myCreatedDate);

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log((Math.floor(Date.now()/1000)));
