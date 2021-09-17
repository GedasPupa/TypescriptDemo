"use strict";
const button = document.getElementById("addition_button");
const input1 = document.getElementById("n1");
const input2 = document.getElementById("n2");
const resultArea = document.getElementById("result_area");
const add = (n1, n2) => {
    return typeof n2 === "number" && typeof n1 === "number" ? n1 + n2 : +n1 + +n2; // unary plus for conversion
};
button.addEventListener("click", () => {
    resultArea.innerText = "| Result: ";
    resultArea.innerText += add(parseFloat(input1.value), parseFloat(input2.value));
});
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Employee {
    constructor(name) {
        this.name = name;
    }
}
