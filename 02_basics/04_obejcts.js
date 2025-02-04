// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "Sanskar";
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sanskar",
            lastname: "Patidar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2); 
const obj3 = {...obj1, ...obj2};

// console.log(obj3);


const users = [
    {
        id: 1,
        email: "sanskar@gmail.com"
    },
    {
        id: 2,
        email: "boy@gmail.com"
    },   
    {
        id: 1,
        email: "patidar@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
