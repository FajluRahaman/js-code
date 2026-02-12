function SetUserName(username){
    //complex DB calls
    this.username = username
    console.log("called");
    
}
function createUser(username,email,passward){

    SetUserName.call(this,username)
    
    this.email = email
    this.passward =passward
}
const cofee = new createUser("chai", "fajlu@1223", "123")
console.log(cofee);
