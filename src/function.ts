// tipe data pada balikan function

function getName(): string {
    return "Roihan Arrafli";
}

console.log(getName());


function getAge(): number {
    return 17;
}

console.log(getAge());

function printName(): void {
    console.log("print name");
}

printName();

// argument types

function multiply(val1 : number, val2 : number): number {
    return val1 * val2;
}

const result = multiply(2, 5)
console.log(result);

// function as type

type Tambah = (val1 : number, val2 : number) => number;

const add: Tambah = (val1: number, val2: number): number => {
    return val1 + val2;
}
console.log(add(1, 3));

// default parameters

const fullName = (first: string, last: string = "Arrafli"): string =>{
    return first + " " +last
}
console.log(fullName("Roihan"));

// optional parameter
const getUmur = (val1: string, val2?: string): string => {
    return val1 + " " + val2
}
console.log(getUmur("A"));

const tambah = (val1: number, val2?: number): string => {
    return val1+ " " + val2;
}

console.log(tambah(1));

