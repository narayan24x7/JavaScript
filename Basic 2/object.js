// Singleton
// Object.create

// Object literals

const mySym = Symbol("key1")


const jsUser = {
    name: "Narayan",
    "full name":"Kachhi Narayan",
    [mySym]:"mykey1",
    age: 19,
    location: "Nadiad",
    email: "narayan43@gmail.com",
    isLoffedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "narayan0301@gmai.com"
// Object.freeze(jsUser)
jsUser.email = "narayan0311@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js user");   
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`);   
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());