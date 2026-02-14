class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username} `);
        
    }
}
class Teacher extends user {
    constructor(username,email){
        super(username)
        this.email = email
    }
    add(){
        console.log(` A is new this field ${this.username}`);
        
    }
}

const tea = new Teacher("rihan","rigah@hfhn");
tea.logMe();

const cofee = new user("masala cofee");
cofee.logMe()

console.log(tea instanceof Teacher);

