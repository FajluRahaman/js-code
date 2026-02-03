let a = 300

if(true) {
// let a =10
// const b = 20
// console.log("INNER:", a);

// }
//  console.log(a);
// // console.log(b);
    }
    function one(){
        const username  = "naman"

         function two(){
            const website = "youtube"
            // console.log(username);
            
         }
        //  console.log(website);
        //  two()
    }
//   one()
if(true){
    const username = "naman"
    if (username === "naman") {
        const website = "youtube"
        // console.log(username + website);
        
    }
    // console.log(username + website);
}
// console.log(username);

// +++++++++++++++++++ intersting ++++++++++++++++


function addone(num){
  return num + 1
}
console.log(addone(5))
 
// addtwo(5) cannot access
const addtwo = function(num){
    return num + 2
}


