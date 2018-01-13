"use strict";

let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head,
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
};

let pockets = {
    money: 2000,
    __proto__: bed,
};

alert(pockets.pen);
alert(bed.glasses);

Function.prototype.defer = function (ms) {
    setTimeout(this, ms);
};
function f() {
    alert("Hello!");
}
f.defer(1000); // shows "Hello!" after 1 second
