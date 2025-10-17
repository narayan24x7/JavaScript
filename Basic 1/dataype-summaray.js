// Primitive

// 7 Types : String, Number ,Boolean, null, undefind, Symbol, BigInt

const score = 100 
const scoreValue = 100.3

const isLoogedIn= false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId =Symbol('123')

console.log(id === anotherId);

const bigNumber = 348353738837387383n


// Reference (Non primitive

// Array, Objects, Functions


const heros = ["Shaktiman","naagraj","doga"]
let Obj ={
 name :"Narayan",
 age : 19
}

const myFunction = function () {
    console.log("Hello");
}

console.log(typeof bigNumber);

// ++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non Primitive)

let myName ="Narayan"

let anotherName =myName

anotherName ="Bobby"

console.log(myName);

console.log(anotherName);

let userOne ={
    email:"usar@google.com",
    upi: "sbi@.com"
}

let userTwo = userOne

userTwo.email ="usar@google.com"

console.log(userOne.email);
console.log(userTwo.upi);

