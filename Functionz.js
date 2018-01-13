let a = prompt("give a value for a");
let b = prompt("give a value for b");

function min(a,b){
    if (a < b){
        return a;
    }else{
        return b;
    }
}

let x = prompt("Gimme an X");
let n = prompt("Gimme an N");
/*
function poww(x, n) {
    return(x**n);
}*/
let pow=(x,n) => (x**n);

if (n<1){
    alert("Please input a power higher than 0");
}else{
    alert(pow(x,n));
}

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    () => alert("you agreed"),
    () => alert("you cancelled the execution")
);

function summa(a, b, c) {
    return a + b + c;
}

alert(summa(1, 2, 3));

