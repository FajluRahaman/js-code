let x = {};
let y = {key: "a"};
let  z = {key: "b"};

x[y] = 123;
x[z] = 345;
console.log(x[y]);
console.log(x);
//It convert automatically object in to String"[object,Object]" 

const arr = [10,5,34,3,9];
console.log(Math.max(...arr));


 let a = 5;
 let b = 6;
[a,b] = [b, a];
console.log(a,b);
