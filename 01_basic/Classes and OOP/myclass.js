// ES6

class User {
    constructor(username, email, passward){
        this.username  = username;
        this.email = email;
        this.passward = passward;
    }
    encryptPassward(){
        return `${this.passward}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User("fajlu","fajlu@gmail.com",3454);
console.log(chai.encryptPassward());
console.log(chai.changeUsername());


// behind the scene

function user(username, email, passward){
   this.username  = username;
        this.email = email;
        this.passward = passward;
}
user.prototype.encryptPassward = function(){
    return `${this.passward}abc`
}
const cofee = new User("Rahaman","fajlu@gmail.com",3454);
console.log(cofee.encryptPassward());
console.log(cofee.changeUsername());
