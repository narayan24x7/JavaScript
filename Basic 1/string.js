const name = "Narayan"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Nk-Bobby')

console.log(gameName.__proto__);


console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);

const newStringOne = "   Narayan   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://placifiy-ai.com/placeifiy%20nk"

console.log( url.replace('%20','-'))

console.log(url.includes('narayan'))

console.log(gameName.split('-'));
