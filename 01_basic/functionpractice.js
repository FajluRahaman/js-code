// function add(a,b){
//   return a + b
// }
// console.log(add(3,5));
// function myName() {
//     console.log("Fajlu  Rahaman ");
    
// } 
// myName();


// if no argument is passed
// function greet(name = "kamal"){
//     console.log("hello " + name);
    
// }
// greet();
// greet("kulsum")

// check even odd number

// function isEven(num){
//     return num % 2 == 0;
// }
// console.log(isEven(10));
// console.log(isEven(11));
//   find largest number

// function largest(x,y,z){
//     return Math.max(x,y,z);
// } 
// console.log(largest(4,8,7));

// const square = function (num){
//     return num * num;
// };
// console.log(square(6));

function outer(){
    let x=13;

    function inner(){
        console.log(x);
        
    } 
    // inner(); child access parent parameter, 
    // but parent is not access child parameter
}
outer();
// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// function sayBye() {
//   console.log("Bye!");
// }

// greet("Naman", sayBye);

//  calculator function

// function calculator(a,b,operation){
//     if(operation === "Add") return a + b;

//     if(operation === "Subtract") return a - b;

//      if(operation === "Multiply") return a * b;

//     if(operation === "Divide") return a % b;
    
// }
// console.log(calculator(5,6, "Multiply"));

//  Reverse string

// function reversestring(str){
//       let reversed = "";

//       for(let i=str.length-1; i>=0; i--){
//         reversed = reversed + str[i];
//       } 
      
//       return reversed;
// }
//  console.log(reversestring("hello kamil ,How are you"));

// palindrome
function isPalindrome(str){
      let reversed = "";

      for(let i=str.length-1; i>=0; i--){
        reversed +=  str[i];
      } 
      if(str === reversed){
        return true;
      }else{
        return false;
      }
    
}
 console.log(isPalindrome("madam"));
  console.log(isPalindrome("dam"));