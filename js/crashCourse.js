"use strict";
// Basic types
let id = 5;
let company = "GeraUAB";
let isPublished = true;
let x = [1, 2, "aga"];
// x = true; //no error
let myArr = [1, 3, 5, 7];
// myArr[0] = 'str'; // error
let anyArr = [1, "str", true];
// Tuples
let person = [1, "Brad", true];
// person[0] = "Brad"; // error
// Tuple Array
let employee;
employee = [
    [1, "Brad"],
    [2, "Tom"],
    [3, "John Lenon"],
];
// Union
let kazkas = "22";
kazkas = 22; // no error - type union;
// kazkas = true // error
// Enum
var Directions1;
(function (Directions1) {
    Directions1[Directions1["Up"] = 1] = "Up";
    Directions1[Directions1["Right"] = 2] = "Right";
    Directions1[Directions1["Down"] = 3] = "Down";
    Directions1[Directions1["Left"] = 4] = "Left";
})(Directions1 || (Directions1 = {}));
console.log(Directions1[3]); // prinsts: "Down"
console.log(Directions1.Right); // prinsts: 2
var Directions2;
(function (Directions2) {
    Directions2["Up"] = "Up";
    Directions2["Right"] = "Right";
    Directions2["Down"] = "Down";
    Directions2["Left"] = "Left";
})(Directions2 || (Directions2 = {}));
console.log(Directions2.Left); // prints: "Left"
const user1 = {
    id: 1,
    name: "John Lenon",
};
// Type Assertion
let cid = 1;
let customerId = cid;
let cystomerId2 = cid; // same as customerId --> type number / dif sintax
// Functions //// tsconfig.json: "noImplicitAny": false
function sum(x, y) {
    return x + y;
}
// Void
function justConsole(message) {
    console.log(message);
}
const jonas = {
    id: 1,
    name: "John Lenon",
};
const addFunc = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Persona {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is registered`;
    }
}
// Subclasses
class Employee1 extends Persona {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp1 = new Employee1(3, "TomTom", "Dev");
console.log(emp1);
console.log(emp1.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 5]);
let strArray = getArray(["john", "tom", "peter"]);
// numArray.push('helllo'); // no error if types any[] and no generics <>
// NEXT:
// npx create-react-app --template typescript
