function SetUsername(username){
    // complex DB calls
    this.username = username;
    console.log("Called");
}

function createUser(username,email,password){
    SetUsername.call(this,username);
    this.email = email;
    this.password = password;
}

const nk = new createUser('nk','nk@example.com','password123'); 
console.log(nk);