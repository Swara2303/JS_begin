//Singleton : Using constructor
// const tinderUser = {}; Same thing : non-singleton Object
const tinderUser = new Object(); //Singleton Object
// console.log(tinderUser);
tinderUser.id = "123@abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const RegularUser = {
    email : "some@gmail.com",
    fullName : {
        userName : "Swara",
        firstName : "Hitesh" 
    }
}
// console.log(RegularUser.fullName.firstName);

const obj1 = { 1 : "a" , 2 : "b"};
const obj2 = { 2 : "c" , 4 : "d"};
const obj4 = { 5 : "c" , 6 : "d"};

// const obj3 = {obj1 , obj2};
// const obj3 = Object.assign({} , obj1, obj2 , obj4)
// console.log(obj3);
// console.log(obj1);
// console.log(obj1 == obj3);

//Spread operator
const obj3 = {...obj1 , ...obj2 , ...obj4};
// console.log(obj3);

//Array of objects
const arrofObjs = [
    {
        id : 101 ,
        email : "swara101@gmail.com"
    },
      {
        id : 102 ,
        email : "swara102@gmail.com"
    },
      {
        id : 106 ,
        email : "swara106@gmail.com"
    }
]

// console.log( arrofObjs[2].email);
// console.log(typeof String(arrofObjs[2].id));

console.log(tinderUser);
// console.log( Object.keys(tinderUser)); //Return  array of keys
// console.log( Object.values(tinderUser));//Returns array of values
// console.log( Object.entries(tinderUser));//Return 2D array of key value pairs
// console.log(Object.keys(tinderUser).length)

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//*********DE - STRUCTURING**********
const course = {
    name : "JS in Hindi" , 
    fee : 999 , 
    instructor : "Hitesh"
}

// course.instructor

const {instructor : inst} = course; //Extracting instructor out of from course object
console.log(inst);


//THIS IS A JSON
// {
//     "name" : "Swara" ,
//     "courseName" : "JS in Hindi" , 
//     "price" : "free"
// }












