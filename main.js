"use strict";
alert("wtf");


let inputNumber = prompt("Give me a random number please!");
if (inputNumber > 0) {
    alert("1");
}else if (inputNumber < 0) {
    alert("-1");
}else {
    alert("0");
}

let userCredentials = prompt("Please input a username :");
if (userCredentials == "Admin"){
    let adminPassword = prompt("Please give an Admin password :")
    if (adminPassword == "TheMaster"){
        alert("Welcome");
    }else if (adminPassword ==""){
        alert("Cancelled");
    }else{
        alert("Wrong Password");
    }
}else if (userCredentials == ""){
    alert("Cancelled");
}else{
    alert("Who the Fuck are you?");
}

for (let i = 2; i <= 10; i++){
    if (i % 2 == 0){
        alert(i);
    }
}

let i = 0;
while (i<3){
    alert(`Number ${i}!`);
    i++;
}

let userInputNumber = prompt("Please give me a number over 100:")
while(userInputNumber > 100) {
    if (userInputNumber = "") {
        alert("Cancelled");
    }
    prompt("Please give me another number over 100 :")
}