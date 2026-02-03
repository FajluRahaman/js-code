


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
//  console.log(  loginUser("fajlu"))

function calculateCartPrice(val1,val2,...num11){
    //rest operator ...
 return num11
}
// console.log(calculateCartPrice(200,400,500,2000));
const user = {
    username: "fajlu",
    price: 999
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} 
        and price is ${anyobject.username}`);
    
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})
const myNewArray = [200,450,188,600]

function returnSecondValue(getArray){
    return getArray[1]
}
// 
console.log(returnSecondValue([200,400,500,600]));
