//PRIMITIVE 
//7 types : Number(also decimals , every number) , String , boolean , null , undefined , Symbol , BigInt 

const id = Symbol('123')
const another_id = Symbol('123')

// console.log(id == another_id);
// console.log(id === another_id);

const bigNumber = 12346736n;

//REFERENCE / NON PRIMITIVE 
//Arrays . objects , Function

//Arrays 
const fruits = ["Mango" , "Apple" , "Fig"];

//Object
let myObj = {
    name : "Swara" , 
    age : 21,
}

//Function 
let myFunct = function(){
    console.log("Hello World");
}

let nullVal = null;

// console.log(typeof bigNumber);
// console.log(typeof fruits);
// console.log(typeof another_id);
// console.log(typeof myObj);
// console.log(typeof null);

//TYPES OF MEMORY MANAGEMENT
//1.Stack (Primitive type)
//2. Heap (Non Primitive type)

let myName = "Swara";
let anotherName = myName;
anotherName = "Swara Sagar";

// console.log(anotherName);
// console.log(myName);

let userOne = {
    email : "useratgoogle.com" , 
    upi : "user@ybl"
}

let userTwo = userOne;

userTwo.email = "swara@google.com"


console.log(userTwo.email);
console.log(userOne.email);


