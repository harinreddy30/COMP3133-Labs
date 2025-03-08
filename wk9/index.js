"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FullTimeStudent_1 = require("./FullTimeStudent");
console.log("Hello TypeScript");
var a = 100; //Number
console.log(a);
//a = "Hello"
var b;
b = "Helloo";
var c = 100;
var d = false;
var e = "Hello";
function add(a, b) {
    // return `${a}+ ${b}`
    return a + b;
}
var sum = add(10, 20);
console.log(sum);
console.log(typeof sum);
var x; //Union
x = 100;
x = "Hello";
// x = true // Not allowed
var y;
y = true;
console.log("".concat(y, " is boolean"));
if (typeof y === 'string') {
    console.log("".concat(y, " is string"));
}
else if (typeof y === 'number') {
    console.log("".concat(y, " is number"));
}
var s1;
s1 = {
    sid: 1,
    snm: "Pritesh",
    per: 50.50,
    isPass: true
};
console.log(s1);
var s = {
    sid: 1,
    snm: "Pritesh",
    per: 50.50,
    isPass: true
};
var s2 = new FullTimeStudent_1.default();
s2.studentType = "FullTimeStudent";
s2.print();
