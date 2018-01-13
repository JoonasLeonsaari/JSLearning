"use strict";

function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

alert(sumTo(100));

function sumToo(n) {
    if (n == 1){
        return n;
    } else {
        return n + sumToo(n-1);
    }

}

alert(sumToo(100));

