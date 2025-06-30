const accountId = 144553
let accountEmail = "swarasagar2004@gmail.com"
var accountPass = "Swara@23"
accountCity = "Nashik"
let accountState;

// accountId = 2 //Not allowed

accountEmail = "hc@hc.com"
accountPass = "Shashwat@8"
accountCity = "Delhi"

console.log(accountId);
console.table([accountId , accountEmail , accountPass , accountCity, accountState])

/*
Prefer Not to use 'var' because of issue in block scope and functional scope
*/