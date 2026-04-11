const employee = {
    calTax(){
        console.log("Tax is 10%");
    }
};


const emp1 ={
    salary : 5000,
}

const emp2 = {
    salary : 3000,
    calTax(){
        console.log("Tax is 8%");
    }
}

const emp3 = {
    salary : 4000,
}

emp1.__proto__ = employee;
emp2.__proto__ = employee;
emp3.__proto__ = employee;

class Parent{}


