//  const coding = ["js", 'rb', "py", "cpp"]

//   const values = coding.forEach(  function (item) {
//     // console.log(item);
//     return item
//  })
//  console.log(values);

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// let newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if(num>4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);
//  const myNumbers = [1,2,3,4,5,6,7,8]

// const newNumbers =  myNumbers.map( (num) => num + 10 )

// const newNums = myNumbers
//                     .map( (num) => num*10 )
//                     .map( (num) =>num + 1 )
//                     .filter( (num) => num >= 40)
// console.log(newNums);

// REDUCE Method

const myNums1 = [1,2,3]


// const myTotal = myNums1.reduce(  function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval

// },0)

// myTotal = myNums1.reduce( (acc, currval) => acc + currval, 0)
// console.log(myTotal);

// const shoppingcart = [
//     {
//         itemname: 'js course',
//         price: "999"
//     },
//      {
//         itemname: 'js1 course',
//         price: "9999"
//     },
//      {
//         itemname: 'js2 course',
//         price: "1999"
//     },
// ]

// const priceTopay = shoppingcart.reduce( (acc,item) =>
//      acc + Number(item.price), 0 )

// console.log(priceTopay);

// const fruits = ["apple", "banana", 'mango']
//  fruits.forEach(  (item) =>{
//     console.log(item);
// } )

// const num = [2,4,6,8];
// const newnum = num.map( (num) => num * 3 );
// console.log(newnum);

// const nums = [5,6,7,8]

// const newnums = nums.reduce( (acc, currval) => {
//     return acc + currval
// }, 0)
// console.log(newnums);

// const names = ['ali', 'rahul', 'john']

// const newNames = names.map( (names) =>
//      names.toUpperCase(names) )
// console.log(newNames);
 

// const student = {
//     name: "rihan",
//     age: 23,
//     city: "kanpur"
// }
// for(const key in student){
//     console.log(key,':' ,student[key]);
    
// }
 
// const arr = [2,3,5,6,7]

// const newArr = arr.map( (num) => num * num )
// console.log(newArr);

// const marks = [20,45,35,30]

// const newMarks = marks.reduce( (acc,currval) => {
//     return acc + currval
// }, 0)
// console.log(newMarks);

// const word = "fajlurahaman"
// let key = 0;

// for(const char of word){
//     key ++;
//     console.log(key);
    
// }

const cart = [
    {
      items: "shoes", price: 400 
    },
    { 
      item:  " pant", price: 800
    },
]
const newCart = cart.map( (item) => {
    return item.price + (item.price % 18);
})
console.log(newCart);


  








 