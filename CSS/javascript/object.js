//singleton

//object literals

const mySym = Symbol("key1")

const JsUser ={
    name: "Fajlu",
    "full name": "Fajlu Rhaman",
   [ mySym]: "mykey1",
    myAge: 18,
    location: "jaipur",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday","Saturday"]
}
// console.log(JsUser.location);
// console.log(JsUser["location"]);
// console.log(JsUser["full name"]);
// console.log(typeof(JsUser.mySym));

JsUser.name = "Fajlu"
// Object.freeze(JsUser)
JsUser.name = "Rana"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello Js Use");
    
}
JsUser.greetingTwo = function () {
    console.log(`Hello Js User,${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






