// let myName = "narayan      "
// let myChannel = "nk tech info    "

// console.log(myName.truelength);

let myHeros =["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spiderman power is ${this.spiderman}`);
    }
}

Object.prototype.nk = function(){
    console.log(`Nk is present in all the objects`);
}
// heroPower.nk()
myHeros.nk()

// Inheritance

const User = {
    name: "narayan",
    email: "naranayan@gmail.com",

}

const Teacher = {
    makeVideos: true
}

const TechingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TechingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TechingSupport, Teacher)

let anotherUserName= "NK Tech Info"

String.prototype.trueLenght = function(){
    console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`);

}
anotherUserName.trueLenght()
"narayan".trueLenght()
"nk tech info".trueLenght()