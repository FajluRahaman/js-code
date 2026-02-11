// let myName = "fajlu   "
// let lastName = "rahaman  "

// console.log(myName.trim().length);
 

let myCar = ["bmw", "thar"];

let carPower = {
    bmw: "hammer",
    thar: "strong",
    gettharpower: function() {
        console.log(`thary power is ${this.Thar}`);
        
    }
}

Object.prototype.fajlu = function () {
    console.log('present');
    
}

Array.prototype.hey = function(){
    console.log("hello");
    
}
// myCar.fajlu()
// carPower.fajlu()
// myCar.hey()

// inheritance
const User = {
    name: "fajlu"
}
const Teacher = {
    makeVideo: false
}
const TeachSupport = {
    isAvailable: false
}
const TaSupport = {
    makeAssignment: "js assignment",
    fullTime: false,
    __proto__: TeachSupport
}

Teacher.__proto__ = User
//modern syntax

Object.setPrototypeOf(TeachSupport, Teacher)

let anotherUsername = "chai aur code"
String.prototype.trueLength = function(){
    console.log(`${this}`);
 
      console.log(` True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"fajlu".trueLength()
"icetea".trueLength()
