"use strict";

//holy fucking shit

function unique(arr) {
    let uniqueset = new Set(arr);
    let uniquearray = Array.from(uniqueset);
    return uniquearray;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(salaries) {
    let salarysum = 0;
    for (let salary of Object.values(salaries)){
        salarysum += salary;
    }
    return salarysum;
}
alert( sumSalaries(salaries) ); // 650



function count(obj) {
    return Object.keys(obj).length;
}

let user = {
    name: 'John',
    age: 30
};

alert( count(user) ); // 2
