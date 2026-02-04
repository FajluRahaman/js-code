//  Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`db connected`);
    
})();

( (name) => {
    console.log(`bd connected two ${name}`);
    
})('fajlu')