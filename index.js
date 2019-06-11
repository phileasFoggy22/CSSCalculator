/*jslint browser: true */
/*jslint devel: true */
/*global window */
/*global console */


function getValues() {
    'use strict'
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    return [a, b];
}

function addNumbers() {
    let a = getValues();
    console.log(a);
    document.getElementById("result").innerHTML = a[0] + a[1];
}


function divide() {
    let a = getValues();
    document.getElementById("result").innerHTML = a[0] / a[1];
}

function subtract() {
    let a = getValues();
    document.getElementById("result").innerHTML = a[0] - a[1];
}

function multiply() {
    let a = getValues();
    document.getElementById("result").innerHTML = a[0] * a[1];
}
