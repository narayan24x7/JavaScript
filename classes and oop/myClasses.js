// ES6

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(newUsername){
        return `${this.username} changed to ${newUsername}`
    }
}

const nk = new User('nk','nk@example.com','password123');
console.log(nk.encryptPassword());
console.log(nk.changeUsername('newnk'));

// Behind the Scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

const nkk = new User('nk','nk@example.com','password123');
console.log(nkk.encryptPassword());
console.log(nkk.changeUsername('newnk'));