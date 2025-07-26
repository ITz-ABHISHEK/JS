//Primitive()

// 7Types : string, number, boolean, null, undefined, symbol,bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('543')
const anotherid = Symbol('543')

console.log( id === anotherid)

const bigNumber = 897467896348976983677n




// Reference (non primitive)

// Array, objects, functions

const heros = ["naruto", "deku","luffy"];
let myObj = {
    name: "abhishek",
    age: 20,

}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof heros);



//-----------------------STACK(Primitive) , HEAP(Non-Primitive)

let myName = "Abhishek"
let anotherName = myName
anotherName = "Abhi"

console.log(myName);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi: "user@ybl"
}


let userTwo = userOne
  userTwo.email = "abhi@google.com"

  console.log(userOne.email);
  console.log(userTwo.email);
  