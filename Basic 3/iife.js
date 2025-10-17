// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // Named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // No Named IIFE
    console.log(`DB CONNECTED ${name}`);
} )('Narayan')
