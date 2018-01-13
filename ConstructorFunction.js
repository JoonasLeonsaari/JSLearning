"use strict";

//this is a CONSTRUCTOR!
function Calculator() {
    //this is a method
    this.read = function () {
        this.a = +prompt("Give me a value for A");
        this.b = +prompt("Give me a value for B");
    };
    //this is a method
    this.sum = function () {
        return (this.a + this.b)
    };
    //this is a method
    this.mul = function () {
        return (this.a * this.b)
    };

    }
    //object created here
    let calculator = new Calculator();
    //method call here
    calculator.read();
    alert( "Sum=" + calculator.sum() );
    alert( "Mul=" + calculator.mul() );



function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt("Give me a number :");
    };
}
let accumulator = new Accumulator(1); // initial value 1
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
alert(accumulator.value); // shows the sum of these values