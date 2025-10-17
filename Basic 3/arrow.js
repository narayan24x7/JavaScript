const user = {
    username: "Narayan",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Sam" // Context
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let userName = "Narayan"
//     console.log(this.userName);
// }

// chai()

// const chai = function(){
//     let userName = "Narayan"
//     console.log(this.userName);
// }

const chai = () => {
    let userName = "Narayan"
    console.log(this);
}
// chai()

// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }


// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = (num1,num2) => ({userName: "Narayan"})

console.log(addTwo(3,4));

// const myArray = [2,5,3,7,8]

// myArray.forEach()