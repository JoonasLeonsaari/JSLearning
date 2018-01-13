"use strict";

let A = +prompt("Give me a numeric value for A :", "0");
let B = +prompt("Give me a numeric value for B :", "0");

function sum() {
    return(A + B);
}

alert(sum());

alert( Math.ceil(6.35) );


function readNumber() {
    let number;

    do {
        number = +prompt("Please give me a number :");
    }while (isFinite(number)===false);

    if (number === ""){
        return (null);
    }
    if (number === null){
        return (null);
    }
    return +number;
}

alert(readNumber());

function random(min, max) {
    return min + Math.random() * (max - min);
}

alert(random(1, 5));

alert(Math.random());

function randomInteger(min, max) {
    // now rand is from  (min-0.5) to (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

alert( randomInteger(1, 3) );