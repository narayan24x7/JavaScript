// var c =300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("Inner: ",a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const userName = "Narayan"

    function two(){
        const website = "Youtube"
        console.log(userName);
    }
    // console.log(website);
    two()
}
// one()

if (true){
    const userName = "Narayan"
    if(userName === "Narayan"){
        const website = " Youtube"
        // console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);


// ++++++++++++++++ Interesting ++++++++++++++++

function addOne(num){
    return num + 1
}
console.log(addOne(5))

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))
