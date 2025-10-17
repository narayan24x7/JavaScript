// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id ="123abc"
tinderUser.name = "Janvi"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser ={
    email: "some@gmail.com",
    fullNmae: {
        userfullName:{
            firstName: "Narayan",
            lastName: "Kachhi"
        }
    }
}

// console.log(regularUser.fullNmae.userfullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj3 = {obj1,obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);


const users = [
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 2,
        email: "k@gmail.com"
    },
    {
        id: 3,
        email: "r@gmail.com"
    },
    {
        id: 4,
        email: "j@gmail.com"
    },
    
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));




const course ={
    courseName: "Js in hindi",
    price: "999",
    courseInstructor: "Narayan"
}
// course.courseInstructor

const {courseInstructor : instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Narayan",
//     "courseName" : "Js in hindi",
//     "price": "free"
// }