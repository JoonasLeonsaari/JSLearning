let user = {
    name: "John",
    surname: "Smith",
};

user.name = "Pete";
delete user.name;

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

alert(sum); // 390


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
/*
going through object's properties 1 by 1 in the for loop
and then if the property == number then multiply by 2
*/
function multiplyNumeric(obj){
    for (let prop in menu){
        if (typeof obj[prop] == "number"){
        obj[prop] *= 2;
        }
    }
}
multiplyNumeric(menu);
alert(menu.width);


function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n <= 0) {
    alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
} else {
    alert( pow(x, n) );
}