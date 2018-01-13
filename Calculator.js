"use strict";
//calculator object
let calculator = {
    //functions inside object == methods
    read(){
        this.a = +prompt("Give me a value for A :", "lorem");
        this.b = +prompt("Give me a value for B :");
    },
    sum(){ return(this.a + this.b) },
    mul(){ return(this.a * this.b) },
};

//method calls
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
