// // for of
 
// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
    
// }


// const greet = "Hello world"
// for (const num of greet) {
//     console.log(` each char is ${num}`);
    
// }

//maps

const map = new Map()
map.set('NU', "Newzealand")
map.set('USA', "United states of america")

// console.log(map);
// for (const [key ,value ] of map) {
//     console.log(key, ':-',value);
    
// }

const myObject = {
    'game2': 'NFS',
    game: 'spiderman'
}

for (const [key ,value ] of myObject) {
    console.log(key, ':-',value);
    
}

// const myObject = {
//     js: 'javascript',
//     cpp: 'c++',
//     rb:'ruby'
// }
// for (const key in myObject) {

//     console.log(`${key} shortcut is for ${myObject[key]}`);
    
    
// }

// const programming = ["js", 'rb', "py", "cpp"]
// for (const key in programming){
//     console.log(programming[key]);
    
// }
 //for Each loop

 const coding = ["js", 'rb', "py", "cpp"]

//  coding.forEach(  function (item) {
//     console.log(item);
    
//  })

// coding.forEach(  (item) => {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item,index,arr) => {
// console.log(item,index,arr);

// })

const myCoding =  [ 
    { carnmae: 'javascript',
    languageFileName: 'js'
},
    {
        carnmae: 'java',
    languageFileName: 'ja'
 },
 {
        carnmae: 'cript',
    languageFileName: 'jks' 
   },
]

myCoding.forEach(  (item) => {
    console.log(item.languageFileName);
    
})
