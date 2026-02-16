const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);

// console.log(Math.PI);
const name = {
    name1: "khalid",
    name2: "kamal"
}
console.log((Object.getOwnPropertyDescriptor(name, "name1")));
Object.defineProperty(name, "name1", {
    // writable: false,
    // configurable: false
})


// console.log(Object.getOwnPropertyDescriptor(name, "name1"));
 for (const [key, value] of Object.entries(name)){
    if (typeof value !== 'function'){
      
    }
    console.log(`${key} : ${value}`);
    
 }
