
function sayMyName(){
    console.log("N");
    console.log("A");
    console.log("R");
    console.log("A");
    console.log("Y");
    console.log("A");
    console.log("N");
    
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    
    // let result =num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(3,4)

// console.log("Result: ", result);


function loginUserMessage(userName = "Someone"){
    if (!userName) {
        console.log("Please enter a username");
        return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("Narayan"));
// console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000));

const user ={
    userName: "Narayan",
    prices: 199
}

function handelObject(anyObjcat){
    console.log(`Usernam is ${anyObjcat.userName} and price is ${anyObjcat.price}`);   
}

// handelObject(user)
handelObject({
    userName: "Sam",
    price : 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));