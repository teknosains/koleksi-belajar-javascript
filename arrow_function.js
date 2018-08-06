/**
 * pada Javscript terbaru, sudah support pembuatan function dengan arrow
 * 
 * tapi arrow function hanya bisa untuk expression atau callback
 */
function test() {
    //
}

// function diatas (declaration function) gk bisa dibuatkan versi arrow nya

// function expression
let test2 = function() {
    console.log('haloo');
};

test2(); // haloo

// function expression bisa kita buatkan versi Arrow nya
let test3 = () => {
    console.log('haloo');
};

test3(); // haloo

// pakai parameter

let test4 = (x, y) => {
    return x * y;
};

// bisa juga tanpa kurawal, jika hanya satu statement
test4 = (x, y) => x * y;

// function diats sama dengan
function test4(x, y) {
    return x * y;
}

// arrow function juga enak dipake buat callback
setTimeout(() => {
    console.log('haloo');
}, 1000);

// contoh lagi
const student = ['Budi', 'Agus'];
student.forEach((item, index) => { // dengan kurawal
    console.log(item);
});

let num = [1, 3];
let sum = num.map((item) => item * 2); // tanpa kurawal
console.log(sum); //[2, 6]

let sum2 = num.map((item) => { // pake kurawal karena body nya ada lebih dari 1 statement
    console.log(item); // statement 1
    return item * 2; // statement 2
});
console.log(sum2); //[2, 6]