const myArr = [ 0 , 1 , "Swara" , 3 , 4];
//PROPERTIES
//Resizable of size
//mix of datatypes
//Copy operation on them create shallow copies


// console.log(myArr[2])

//shallow copy: both the org and the copy share the same reference point
//deep copy: both the org and the copy do not share the same reference point

const myHeros = ["Shaktiman" , "Marvel" , "Spiderman"];
const myArr2 = new Array(1 , 2 , 3 ,5);

//ARRAY METHODS
// myArr.push(6);
// myArr.push(11);
// console.log(myArr);

// myArr.pop();
// console.log(myArr);

// myArr.unshift(9);
// console.log(myArr);
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(1));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


//slice , splice
console.log("A " , myArr);

const nArr = myArr.slice(1 , 3)
console.log(nArr);
console.log("A1 " , myArr);


const n2Arr = myArr.splice(1 , 3);
// console.log(n2Arr);
console.log("A2 " , myArr);




