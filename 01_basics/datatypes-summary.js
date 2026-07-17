//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

//console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ********************************************

//stack (primitive) and  heap (Non-primitive) //

let youtubename = "zahid321"
let anothername = youtubename

anothername = "zah@321"

console.log(youtubename)
console.log(anothername)

let user1 = {
    email: "zahid1123",
    Id: "231"
}

let user2 = user1
user2.email= "zah@321"

console.log(user1)
console.log(user2)

