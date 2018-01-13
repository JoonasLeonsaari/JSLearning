"use strict";

let styles = ["Jazz", "Blues"];

styles.push("Rock-n-roll");

let index = styles.indexOf("Blues");

if (~index){
    styles[index] = "Classics";
}

styles.shift();

styles.unshift("Reggae");
styles.unshift("Rap");

alert(styles);

// how to calculate stuff inside an array!
function sumInput() {
    let numbers = [];

    while (true) {

        let value = prompt("A number please?", 0);

        // should we cancel?
        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

alert(sumInput());

function camelize(str) {
    return str
    .split('-') // my-long-word -> ['my', 'long', 'word']
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        ) // ['my', 'long', 'word'] -> ['my', 'Long', 'Word']
        .join(''); // ['my', 'Long', 'Word'] -> myLongWord
}

let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in the reverse order
arr.reverse();
arr.sort(
    function (a, b){
        return b-a
    });

alert( arr ); // 8, 5, 2, 1, -10

