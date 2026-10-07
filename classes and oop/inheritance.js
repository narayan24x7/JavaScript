class User {
    constructor(username) {
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`Course added by ${this.username}`);
    }
}

const nk = new Teacher('nk','nk@example.com','password123');
nk.addCourse();

const nk2 = new User('nk2');
nk2.logMe();

console.log(nk instanceof Teacher);