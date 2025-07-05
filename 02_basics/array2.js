const marvelHeros = ["Thor" , "IronMan" , "Spiderman" , "Batman"];
const dcHeros = ["Superman" , "Flash" , "HelloKitty"];
const princess = ["Diana" , "Moana" , "Frozen" , "Cinderella"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);

// console.log(marvelHeros[4][0]);


// marvelHeros.push(2);
// console.log(marvelHeros);

// marvelHeros.push("Swara");
// console.log(marvelHeros);

// marvelHeros.push(false);
// console.log(marvelHeros);

// marvelHeros.push(["Power" , "PUFF"]);
// console.log(marvelHeros);

//********CONCAT*******
const nArray = marvelHeros.concat(dcHeros , princess);
// console.log(marvelHeros);
// console.log(dcHeros);
// console.log(princess);

// console.log(nArray);


//*****SPREAD OPERATOR******
// const allHeros = [...marvelHeros, ...dcHeros , ...princess];
// console.log(allHeros);


//**********FLAT METHOD**********
// const anArray = [1 , 2 , 3 , [4 ,5 , 6] , 7 , [6 , 2  , [1 , 3 , 8] , 12] , 16 , 19 ];
// const org_anArray = anArray.flat(Infinity);  //Infinity == depth
// console.log(org_anArray);



//*******ISARRAY , FROM , OF***********
const str1 = "Swara";
const arr1 = [1 , 2 , 3 , 5];

// console.log(Array.isArray(str1));
// console.log(Array.isArray(arr1));

const convtStr1 = Array.from(str1);
// console.log(convtStr1);
// console.log(Array.from("Vivek"));
console.log(Array.from('A'));
console.log(Array.from(12)); //Not iteratable
console.log(Array.from(false)); //Not iteratable
console.log(Array.from(["a1" , "a2"]));
console.log(Array.from({name : "Yug"})); //Not iteratable


const score1 = 'A';
const score2 = 'B';
const score3 = 'C';

// const array2 = Array.of(score1 , score2 , score3);
// console.log(array2);

// console.log(Array.of(score1 , score2 , score3));














