


function myName(){
console.log("h");
}
// myName()

// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
    
// }
function addTwoNumber(num1,num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const result = addTwoNumber(3,9)
// console.log("Result: ", result);

function loginUser(username = "sam"){
    if(!username){
        console.log("Please enter the username");
        return
        

    }
    return `${username} just logged in`
}
//   console.log(  loginUser("fajlu"))
 console.log(  loginUser("fajlu"))

