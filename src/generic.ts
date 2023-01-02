// Generic ini membuat sebuah class, function atau interface menjadi memiliki berbagai macam 
// type data yang dinamis, dinamis yang dimaksud bisa menerima tipe data yang berbeda

function getData(value:any) {
    return value;
}

console.log(getData('Roihan').length);
console.log(getData(123).length);

// generic
function myData<T>(value:T) {
    return value;
}

console.log(myData("Arrafli").length);
console.log(myData(123));

// generic dgn arrow function
const arrowFunc = <T, >(value:T) => {

}
