const user = {
    username: "narayan",
    loginCount: 8,
    signIn: true,

    getUserDetails: function() {
        // console.log("Got user details");
        // console.log(`Username: ${this.username}, Login Count: ${this.loginCount}, Signed In: ${this.signIn}`);
        // console.log(this)
    }
}
// console.log(user.username);
// console.log (user.getUserDetails)
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date();

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Hello, ${this.username}`);
    }

    return this
}

const userOne = new User("narayan", 8, true);
const userTwo = new User("nk", 5, false);

console.log(userOne.constructor);
// console.log(userTwo);