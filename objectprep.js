"use strict";
// learn this shit


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

//Calculate salaries

function sumsalaries(obj) {
    let sum = 0;
    for (let prop in obj){
        sum += obj[prop];
    }
    return sum;
}

alert(sumsalaries(salaries));

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    let multiplied;
    for (let prop in obj){
        if (typeof obj[prop] === "number")
        multiplied = obj[prop]*=2
    }
    return multiplied;
}
multiplyNumeric(menu);

for (let values in menu) {
    alert(menu[values]);
}

let user = {
    name: "John",
    age: 30,

    sayHi() {
        alert(`hello `+ this.name);
    }

};

user.sayHi(); // John