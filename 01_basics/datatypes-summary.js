//  Primitive 
// example: 
const score1 = 100
const score2 = score1 // it create a copy of score1 

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)
// example: 
let myObj1 = {
    name: "hitesh",
    age: 22,
} 
let myObj2 = myObj1 // it asssing the memorey referance of data that's why when we change myObj1 it also changed myObj1,

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


//Note: primitive are stake and no-primitive Heep

// https://262.ecma-international.org/5.1/#sec-11.4.3