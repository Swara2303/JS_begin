//SINGLETON : using constructors
//Object.create


//Object Literals : not singletons

const mySym = Symbol("key1");
// console.log(typeof mySym);

const JsUser  = {
    [mySym] : "Value",
    name : "Swara", 
    "Full Name" : "Swara Sagar" ,
    age : 21 , 
    location : "Jaipur" , 
    isLoggedIn : false ,
    email : "Swara@gmail.com",
    lastLoginDays : ["Mon" , "Sat"],
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); //Better way , as email , name , location all are stored at strings
// // console.log(JsUser.FullName); //Gives undefined , doesn't give correct result 
// console.log(JsUser["Full Name"]);//Is the only way to access it
// console.log(typeof JsUser[mySym]);

JsUser["email"] = "shashwat@gmail.com";
// Object.freeze(JsUser); //Now we can't change values of any element in the object
// JsUser.email = "swarasagar@.com";

console.log(JsUser);


//Using Functions as variables in Object
JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User , ${this.name}`);
}

// console.log(JsUser);    
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

//  console.log(JsUser); 





