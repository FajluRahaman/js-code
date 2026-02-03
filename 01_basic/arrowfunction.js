const user = {
    username: "ashraf",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to web`);
        console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);
// function one(){
//     console.log(this.username);
    
// }
// one()
 const chai =() =>{
    let username ="ashraf"
    console.log(this);
    
 }
//  chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) =>  num1 + num2

// const addTwo = (num1,num2) =>  (num1 + num2)

const addTwo = (num1,num2) =>  ({username: "fajlu"})
console.log(addTwo(4,5));



