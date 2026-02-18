class User {
    constructor(email, passward){
        this.email = email;
        this.passward = passward;
    }
    get email(){
        return this._email.toUpperCase()
    }
      set email(value){
        return this._email = value;
      }
    get passward(){
         return `${this._passward}fajlu`;
    }
    set passward(value){
        this._passward = value;
    }
      

}
const fajlu = new User("fajlu@gmail.com","abcgg")
console.log(fajlu.email);
