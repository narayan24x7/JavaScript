const piDescriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(piDescriptor);

//console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const nk = {
    name : "nk",
    age : 25,
    isAdmin : true,

    orderChai: function(){
console.log("code Brake")
    }
}
console.log(Object.getOwnPropertyDescriptor(nk, "name"));

Object.defineProperty(nk, "name", {
    writable : false,
    enumerable : true,
    configurable : false
});

console.log(Object.getOwnPropertyDescriptor(nk, "name"));

for (let [key, value]of Object.entries(nk)){
    if (typeof value !== 'function') {
        console.log(`${key} : ${value} `);
    }
    
}