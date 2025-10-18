const score = 400;
// console.log(score);


const balance = new Number(200.1234);
// console.log(balance);

// console.log(typeof balance.toString());
// console.log( balance.toString().length);
// console.log(balance.toFixed(2));


const hundreds = 1000000
// console.log(hundreds.toLocaleString()); //US Standards by default
// console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++++++++++++++ Maths +++++++++++++++++++++++++
// console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.abs(4));

// console.log(Math.round(4.3789));
// console.log(Math.ceil(6.0001));
// console.log(Math.floor(5.9999999));


//random
// console.log(Math.random());  //Gives random values from 0 to 1

//For random value >= 1
// console.log((Math.floor(Math.random()*10)) + 1);

//For between range mix - max
const min = 10;
const max = 20;


Math.random() * (max-min + 1)
console.log(Math.floor((Math.random()* (max - min + 1))) + min);






