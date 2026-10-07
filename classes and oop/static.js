class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const nk = new User('nk');
// console.log(User.createId());

class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher('iphone','iphone@example.com')

console.log(iphone.createId());