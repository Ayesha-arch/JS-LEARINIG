// Object Literals

const mysym = Symbol("key1")

const  JsUser = {
    name: "Ayesha",
    age: 19,
    email: "xyz@google.com",
    isloggedin: false,
    "grade": "A",
    last_login_days: ["sat","tue"],
    [mysym]: "key1"

}

console.log(JsUser.name);
console.log(JsUser["age"]);
console.log(JsUser.grade);
console.log(JsUser.last_login_days);
console.log(JsUser[mysym]);

JsUser.email = "xyz@abc.com"
//Object.freeze(JsUser)
console.log(JsUser.email);
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user!");
    
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}
console.log(JsUser.greetingTwo());








