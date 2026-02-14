class User {
    constructor(username, email, passward){
        this.username  = username;
}
 logme(){
    console.log(`Username ${this.username}`);
    
 }
 createid(){
    return `123`
 }
}
const fajlu = new User("fajlu");
console.log(fajlu.createid);

class teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const iphone = new teacher("iphone","iphone@gmail.com")
console.log(iphone.createid);

