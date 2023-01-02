"use strict";
// tipe data pada balikan function
function getName() {
    return "Roihan Arrafli";
}
console.log(getName());
function getAge() {
    return 17;
}
console.log(getAge());
function printName() {
    console.log("print name");
}
printName();
// argument types
function multiply(val1, val2) {
    return val1 * val2;
}
const result = multiply(2, 5);
console.log(result);
const add = (val1, val2) => {
    return val1 + val2;
};
console.log(add(1, 3));
// default parameters
const fullName = (first, last = "Arrafli") => {
    return first + " " + last;
};
console.log(fullName("Roihan"));
// optional parameter
const getUmur = (val1, val2) => {
    return val1 + " " + val2;
};
console.log(getUmur("A"));
const tambah = (val1, val2) => {
    return val1 + " " + val2;
};
console.log(tambah(1));
