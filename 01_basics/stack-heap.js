// Stack (Primitive), Heap (Non-Primitive)

// Stack Example
let myName = "Sanskar";
let anothername = myName;
anothername = "Patidar";

console.log(myName);
console.log(anothername);


// Heap Example
let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne;

userTwo.email = "sanskar@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);