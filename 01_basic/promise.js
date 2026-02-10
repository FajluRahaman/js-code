const promiseOne = new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Async task is completed");
    resolve()
    
  }, 1000)
})
promiseOne.then(function(){
    console.log("Promise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task");
        resolve()
    }, 1000)
}).then(function(){
    console.log("async task is resolved");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "fajlu", email: "fajlu@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
   console.log(user);
   
})

const promisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
      let error = true
      if(!error){
        resolve({username: "fajlu"})
      } else{
        reject("error: something went wrong")
      }
    },1000)
})
const username = promisefour.then((user) => {
   console.log(user);
   return user.username
   
})
.then((username) => {
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
}).finally(() => console.log("The promise is either is resolved")
)

const promisefive = new Promise(function(resolve, reject){
        setTimeout(function(){
      let error = true
      if(!error){
        resolve({username: "java"})
      } else{
        reject("error: something js went wrong")
      }
    }, 1000)

});
 async function consumePromise(){
 try {
       const response = await promisefive
    console.log(response);
 } catch (error) {
    console.log(error);
    
 }
    

 }
 consumePromise()




